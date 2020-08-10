import React from 'react';
import { View } from 'react-native';

import styles from './favorites.styles';
import PageHeader from '../../components/PageHeader/page-header';

function Favorites() {
  return(
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default Favorites;