import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import { db } from '../firebaseConfig';
import { addDoc, CollectionReference, DocumentData, serverTimestamp, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { router } from 'expo-router';

const typesCol1 = ["Normal", "Fogo", "Água", "Planta", "Elétrico", "Gelo"];
const typesCol2 = ["Lutador", "Voador", "Venenoso", "Terra", "Pedra", "Inseto"];
const typesCol3 = ["Fantasma", "Metal", "Dragão", "Sombrio", "Fada", "Psíquico"];

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    typeCheckbox: {
        flexDirection: 'row',
        gap: 20
    },
    checkList: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    column: {
        flexDirection: 'column'
    }
});

export default function HomeScreen() {

    const [pokemonName, setPokemonName] = useState("");
    const [cardNumber, setCardNumber] = useState('');
    const [image, setImage] = useState('');

    const [typeStates, setTypeStates] = useState(
        [...typesCol1, ...typesCol2, ...typesCol3].map(t => ({
        name: t,
        checked: false
        }))
    );

    const toggleType = (typeName) => {
        setTypeStates(prev =>
            prev.map(item =>
                item.name === typeName ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const renderColumn = (list) => (
        <View style={styles.column}>
            {list.map(type => {
                const current = typeStates.find(t => t.name === type);
                return (
                    <View key={type} style={styles.checkList}>
                        <Checkbox
                        value={current?.checked}
                        onValueChange={() => toggleType(type)}
                        />
                        <Text style={{ marginLeft: 8 }}>{type}</Text>
                    </View>
                );
            })}
        </View>
    );

    const getSelectedTypes = () => {
    return typeStates
        .filter(t => t.checked)
        .map(t => t.name);        
    };

    async function registerPokemon() {
    try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            console.log("Usuário não está logado.");
            return;
        }

        const pokemon = {
            pokemonName,
            types: getSelectedTypes(),
            cardNumber,
            image,
            userId: user.uid,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };

        await addDoc(collection(db, "pokemon"), pokemon);

        console.log("Pokemon cadastrado!");

    } catch (err) {
        console.log("Erro ao cadastrar:", err);
    }
}

    return (
        <View style={styles.main}>
            <Text style={{marginBottom: 30}}>Wellcome!</Text>

            <TouchableOpacity onPress={() => router.navigate('/list')}>
                <View>
                    <Text>Pokemon List</Text>
                </View>
            </TouchableOpacity>

            <TextInput placeholder='Pokemon Name' onChangeText={(name) => setPokemonName(name)}
                style={{padding: 10, margin: 5, width: 300, borderWidth: 2, borderColor: 'purple', borderRadius: 10}}/>
            <TextInput placeholder='Card Number'  onChangeText={(card) => setCardNumber(card)}
                style={{padding: 10, margin: 5, width: 300, borderWidth: 2, borderColor: 'purple', borderRadius: 10}}/>
            <TextInput placeholder='URL Image'  onChangeText={(image) => setImage(image)}
                style={{padding: 10, margin: 5, width: 300, borderWidth: 2, borderColor: 'purple', borderRadius: 10}}/>    

            <Text style={{ marginTop: 10, marginBottom: 10}}>Type</Text>

            <View style={styles.typeCheckbox}>
                {renderColumn(typesCol1)}
                {renderColumn(typesCol2)}
                {renderColumn(typesCol3)}
            </View>

            <TouchableOpacity onPress={registerPokemon}>
                <View>
                    <Text>Cadastrar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

