import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './give-classes.styles';

function GiveClasses() {

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return(
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        style={styles.content} source={giveClassesBgImg}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na plataforma web.</Text>
      </ImageBackground>

      <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GiveClasses;