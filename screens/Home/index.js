import * as React from 'react';
import { Text, Button, View, Image, ImageBackground } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {
    return (
      <View style={styles.content}>
        <Text style={{  fontSize: 25, color: '#000000', alignItems: "center" }}>
           Santa Inquisição
        </Text>

        <Button 
        title="Conteudo"
        onPress={() => navigation.navigate('Cont')}
        />
      </View>



    );
  }
  