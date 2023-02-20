import {Image, StyleSheet} from 'react-native';
import React from 'react';
import BaseView from '../../components/container/basview';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);

  return (
    <BaseView style={styles.container}>
      <Image style={styles.img} source={require('../../assets/logo.png')} />
    </BaseView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 350,
    height: 350,
  },
});
