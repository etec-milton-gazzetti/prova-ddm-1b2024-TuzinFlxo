import * as React from 'react';
import { Text, Button, View, Image, ImageBackground } from 'react-native';
import styles from './styles';
import fogueira from '../../assets/fogueira.jpg'

export default function Home({ navigation }) {
    return (
      
      <View style={styles.content}> 
      
      <ImageBackground source={fogueira} style={styles.background}/>
        
        <Text style={{  fontSize: 25, color: '#000000', alignItems: "center",  }}>
           Santa Inquisição
        </Text>

        <Button 
        title="Atos Santos"
        onPress={() => navigation.navigate('History')}
        />

        <Text> </Text>

        <Text> Criador do app :</Text>

        <Button 
        title="Biografia"
        onPress={() => navigation.navigate('Sobre')}
        />
      </View>



    );
  }
  