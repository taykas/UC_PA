import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import Swal from 'sweetalert2';

const styles = StyleSheet.create ({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  input: {
    padding: 9,
    color: '#a3a3a3',
    backgroundColor: '#ededed',
    marginBottom: 10,
    borderRadius: 10,
    width: 300
  },
  login_bottom: {
    width: 300,
    padding: 10,
    backgroundColor: '#a385d1',
    borderRadius: 10
  },
  button_container: {
    flexDirection: 'row',
    gap: 70
  },
  sing_up_container: {
    flexDirection: 'row',
    gap: 5
  },
  haveAccount: {
    flex: 1
  }
});

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
        <View style={styles.container}>
          <Text style={{alignSelf: 'flex-start', fontSize: 20, marginBottom: 10}}>Create Account!</Text>

          <TextInput style={styles.input}
          placeholder='Name'></TextInput>

          <TextInput style={styles.input}
          placeholder='Email' onChangeText={(value) => setEmail(value)}></TextInput>

          <TextInput style={styles.input}
          placeholder='Password' onChangeText={(value) => setPassword(value)} secureTextEntry={true}></TextInput>

          <TextInput style={styles.input}
          placeholder='Confirm Password' onChangeText={(value) => setConfirmPassword(value)} secureTextEntry={true}></TextInput>

          <TouchableOpacity style={styles.login_bottom}>
            <View>
              <Text style={{color: 'white', textAlign: 'center'}} onPress={signUp}>Confirm</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 20, marginBottom: 20}}>
            <View>
              <Text style={{color: '#6e4ce6'}}>Access Quickly</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.button_container}>
            <TouchableOpacity>
              <View>
                <Text style={{fontSize: 15, marginBottom: 20, color: '#5d24c1'}}>Google</Text>
              </View>
            </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Text style={{fontSize: 15, marginBottom: 20, color: '#0615b1'}}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Text style={{fontSize: 15, marginBottom: 20, color: '#5d24c1'}}>Linkedin</Text>
            </View>
          </TouchableOpacity>
          </View>
          <View style={styles.sing_up_container}>
          <Text style={{color: '#a18bef'}}>Already have an account?</Text>
          <TouchableOpacity>
            <View>
              <Text style={{color: '#7067cb'}} onPress={() => router.navigate('/')}>Sing In</Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </>
    )
};