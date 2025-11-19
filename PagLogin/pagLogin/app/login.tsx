import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

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
  }
});

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const screen = Dimensions.get("window").width

  const auth = getAuth(app)

  const singIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    router.navigate('/')
  }

  return (
    <>
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={{alignSelf: 'flex-start', fontSize: 20, marginBottom: 10}}>Wellcome!</Text>
          <TextInput style={styles.input}
            placeholder='Email'></TextInput>

          <TextInput style={styles.input}
            placeholder='Password' secureTextEntry={true}></TextInput>

          <TouchableOpacity style={styles.login_bottom}>
            <View>
              <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 20, marginBottom: 20}}>
            <View>
              <Text style={{color: '#6e4ce6'}}>Forgot Password?</Text>
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
          </View>

          <View style={styles.sing_up_container}>
            <Text style={{color: '#a18bef'}}>Don't have an account?</Text>
            <TouchableOpacity>
              <View>
                <Text style={{color: '#7067cb'}} onPress={() => router.navigate('/')}>Sing Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}