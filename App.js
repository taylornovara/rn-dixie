import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text color={colors.textColor}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
