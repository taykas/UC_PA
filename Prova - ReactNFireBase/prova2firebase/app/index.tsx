import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import Swal from 'sweetalert2';


export default function HomeScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const auth = getAuth(app)

  const signUp = async () => {
    if(password.length >= 6){
      if(password === confirmPassword){
          try {
            await createUserWithEmailAndPassword(auth, email, password)
            Swal.fire({
              icon: 'success',
              title: 'Usuário cadastrado com sucesso!'
            })
            return router.navigate('/') 
          } catch(e) {
            return Swal.fire({
              icon: 'error',
              title: 'Email já cadastrado!'
            })
          }
      } else {
        return Swal.fire({
          icon: 'error',
          title: 'As senhas não coincidem'
        })
      }
    } else {
        return Swal.fire({
          icon: 'error',
          title: 'A senha deve ter no mínimo 6 caracteres'
        })
    }
  }

  useEffect(() => {
    console.log(email, password, confirmPassword)
  }, [email, password, confirmPassword])

  return (
    <>
      <View style={styles.main}>
        <View>
          <Text>Name</Text>
          <TextInput style={styles.inputName} placeholder='Name' onChangeText={(value) => setEmail(value)}></TextInput>
          <Text>Email</Text>
          <TextInput style={styles.inputEmail} placeholder='Email' onChangeText={(value) => setPassword(value)}></TextInput>
          <Text>Password</Text>
          <TextInput style={styles.inputPass}placeholder='Password' onChangeText={(value) => setPassword(value)} secureTextEntry={true}></TextInput>
          <TextInput style={styles.inputPass}
          placeholder='Confirm Password' onChangeText={(value) => setConfirmPassword(value)} secureTextEntry={true}></TextInput>

          <View style={styles.btnCad}>
            <TouchableOpacity>              
                  <Text style={{textAlign: 'center'}}
                    onPress={signUp}>Confirm</Text>                
            </TouchableOpacity>
          </View>
       
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  inputEmail: {
    borderWidth: 2,
    borderColor:'purple',
    width: 200,
    marginBottom: 20,
    borderRadius: 8,
    padding: 2
  },
  inputName: {
    borderWidth: 2,
    borderColor:'purple',
    width: 200,
    marginBottom: 20,
    borderRadius: 8,
    padding: 2
  },
  inputPass: {
    borderWidth: 2,
    borderColor:'purple',
    width: 200,
    borderRadius: 8,
    padding: 2
  },
  btnCad: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
