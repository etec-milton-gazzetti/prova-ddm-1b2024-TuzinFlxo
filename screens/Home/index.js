import * as React from 'react';
import { Text, Button, View, Image, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import fogueira from '../../assets/Fogueira.png'

export default function Home({ navigation }) {
    return (
      
      <View style={styles.content}> 
      
      <ImageBackground source={fogueira} style={styles.background}/>


      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      
      

      <Text style={{color: '#fff',alignSelf: 'center' }}>História:</Text>

      <Text> </Text>
        

      <Pressable
        style={{ padding: 10, backgroundColor: '#ffff', borderRadius: 25,  width: '60%', height: '9%', alignItems: 'center' }}
        onPress={() => navigation.navigate("History")}
      >
        <Text style={{ color: '#141414', fontSize: 30 }}>Atos Divinos</Text>
      </Pressable>

        <Text> </Text>

        <Text style={{color: '#fff',alignSelf: 'center' }}>Criador do app :</Text>

        <Text> </Text>

        <Pressable
        style={{ padding: 10, backgroundColor: '#ffff', borderRadius: 25,  width: '60%', height: '10%', alignItems: 'center' }}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={{ color: '#141414', fontSize: 40 }}>Biografia</Text>
      </Pressable>

      </View>



    );
  }
  