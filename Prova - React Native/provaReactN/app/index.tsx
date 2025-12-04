import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>      
          <Text style={styles.textHeader}>Studying</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.texttitle}>Timer Mode</Text>
        </View>
      
        <View style={styles.container}>
          <View style={styles.iconTimer}>
            <Image
                source={{ uri: "https://i.pinimg.com/736x/1e/d7/a7/1ed7a7386f627bc1c212cb616751dfbb.jpg" }}
                style={{ width: 200, height: 200, marginTop: 10 }}
            />
          </View>

          <View style={styles.timer}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>00:00:00</Text>
          </View>

          <View style={styles.displayTimer}>
            <View style={styles.barra}></View>
            <View style={styles.currentTime}></View>
            <View style={styles.barra2}></View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.displayOptions}>
            <View style={styles.option1}></View>
            <View style={styles.option2}>
              <Text style={{fontWeight:'bold'}}>Focus</Text>
            </View>
            <View style={styles.option3}></View>
          </View>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create ({
  main: {
    backgroundColor: "#221843",
    height: '100%'
  },
  container: {
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 20
  },
  textHeader: {
    color: 'white',
    fontSize: 18
  },
  texttitle: {
    height: 8,
    color: 'white',
    fontSize: 20
  },
  title: {
    alignItems: 'center',
    marginTop: 70
  },
  iconTimer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'white',
    marginTop: 100
  },
  timer: {
    marginTop: 50
  },
  displayTimer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  barra: {
    backgroundColor: 'white',
    height: 8,
    width: 170,
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100,
    marginTop: 4
  },
  currentTime: {
    width: 15,
    height: 15,
    backgroundColor: "#4E379A",
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 90
  },
  barra2: {
    backgroundColor: 'gray',
    height: 8,
    width: 100,
    borderRadius: 100,
    marginTop: 4
  },
  displayOptions: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 80
  },
  option1: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'white',
    marginTop: 15,
    margin: 15
  },
  option2: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'white',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  option3: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'white',
    marginTop: 15,
    margin: 15
  }
})