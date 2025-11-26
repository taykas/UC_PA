import { collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { db } from "../firebaseConfig";

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row'
    }
});

export default function PokemonList() {

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchPokemons() {
    try {
      const q = query(collection(db, "pokemon"));
      const snapshot = await getDocs(q);

      console.log(snapshot.docs)

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPokemons(list);

    } catch (err) {
      console.log("No cards found", err);
    } finally {
      setLoading(false);
    }
  }

  async function updatePokemon(id: string, data: any) {
    try {
      const ref = doc(db, "pokemon", id);
      await updateDoc(ref, data);

      alert("Cadastro atualizado!");
      fetchPokemons();

    } catch (err) {
      console.log("Erro ao atualizar:", err);
    }
  }

  async function deletePokemon(id: string) {
    try {
      const ref = doc(db, "pokemon", id);
      await deleteDoc(ref);

      alert("Cadastro deletado!");
      fetchPokemons();

    } catch (err) {
      console.log("Erro ao deletar:", err);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (pokemons.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Nenhum pokemon encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Cadastro de Cartas
      </Text>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
        <View style={styles.main}>    
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 12,
              marginBottom: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {item.pokemonName} {item.cardNumber}
            </Text>
            <Image
                source={{ uri: item.image || "https://via.placeholder.com/150" }}
                style={{ width: 165, height: 230, marginTop: 10 }}
            />
            <Text style={{ opacity: 0.7 }}>Pokemon Name: {item.pokemonName}</Text>
            <Text style={{ opacity: 0.7 }}>Card Number: {item.cardNumber}</Text>
            <Text style={{ opacity: 0.7 }}>Types: {item.types.join(", ")}</Text>



            <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#3498db",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                }}
                onPress={() =>
                  updatePokemon(item.id, { brand: "Atualizado" })
                }
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#e74c3c",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                }}
                onPress={() => deletePokemon(item.id)}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
         </View>
        )}
      />
    </View>
  );
}