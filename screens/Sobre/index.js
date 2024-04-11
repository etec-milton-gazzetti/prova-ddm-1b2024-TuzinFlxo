import * as React from 'react';
import { Text, Button, View, Image, ImageBackground } from 'react-native';


export default function Sobre({ navigation }) {
    return (
      <View style={styles.content}>
        <Text style={{  fontSize: 25, color: '#000000', alignItems: "center" }}>
           Santa Inquisição
        </Text>

        <Button 
        title="Conteudo"
        onPress={() => navigation.navigate('Sobre')}
        />
      </View>



    );
  }
  