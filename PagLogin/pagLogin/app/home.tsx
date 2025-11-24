import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import Swal from 'sweetalert2';
import { Checkbox } from 'expo-checkbox';

const styles = StyleSheet.create ({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  typeCheckbox: {
    flexDirection: 'row',
    gap: 5
  },
  checkList: {
    flexDirection: 'row'
  }
});

export default function HomeScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isChecked, setChecked] = useState(false);

  const auth = getAuth(app)

  useEffect(() => {
    console.log(email, password, confirmPassword)
  }, [email, password, confirmPassword])

  return (
    <>
      <View style={styles.main}>
        <View>
            <TextInput placeholder='Pokemon Name'></TextInput>

            <TextInput placeholder='PC'></TextInput>

            <Text style={{textAlign: 'center'}}>Type</Text>
            <View style={styles.typeCheckbox}>
                <View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Normal</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Fogo</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Água</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.checkList}>
                         <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Planta</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Elétrico</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Lutador</Text>
                    </View>
                   
                </View>
                <View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Voador</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Venenoso</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Psiquico</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Inseto</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Pedra</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Fantasma</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Dragão</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Aço</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Sombrio</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Fada</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Gelo</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox value={isChecked} onValueChange={setChecked}/>
                        <Text>Terra</Text>
                    </View>
                </View>
            </View>


        </View>    
      </View>
    </>
    )
};