import {StyleSheet, View} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';
import colors from './src/Constants/colors';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, },
});
