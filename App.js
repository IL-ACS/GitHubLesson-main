import { Text, StyleSheet, SafeAreaView } from 'react-native';
import FirstPage from './screens.FirstPage';
//npm uninstall expo
//npm install expo@51
export default function App() {
  let screen = <FirstPage />

  return (
    <SafeAreaView style={styles.container}>
      {screen}
      <Text>wowoow</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
