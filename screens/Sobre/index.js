import * as React from 'react';
import { Text, Button, View, Image,  ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import joana from '../../assets/joana.jpeg'
import euzinho from '../../assets/euzinho.jpg'





export default function PageTwo({ navigation }) {
  return (
      <View style={styles.container}><ImageBackground source={joana} style={styles.background}>
      <View style={styles.content}>

      <Text> </Text>

      <Image source={euzinho} style={styles.imagem}/>

      <Text> </Text>

      <Text style={{ fontSize: 18, color: '#ffff' }}>Matheus Pontes Lé</Text>
      <Text> </Text>
      <Text style={{  fontSize: 18, color: '#ffff' }}>3° Info</Text>
      <Text> </Text>
      <Text style={{  fontSize: 18, color: '#ffff' }}>(RM: 07686)</Text>
        

         
        


        
        

        
        
      </View>

      <Pressable
        style={{ padding: 10, backgroundColor: '#ffff', borderRadius: 25,  width: '40%', height: '10%', alignItems: 'center' }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: '#141414', fontSize: 30 }}>Voltar</Text>
      </Pressable>

        <Text> </Text>

        
      </ImageBackground>
    </View>

  );
}
