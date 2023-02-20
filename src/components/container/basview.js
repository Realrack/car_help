import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function BaseView({children, style}) {
  return <View style={[styles.container, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
