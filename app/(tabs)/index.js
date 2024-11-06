// app/index.tsx (Page d'accueil)
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import "react-native-get-random-values";
import { Buffer } from "buffer";
global.Buffer = Buffer;

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/transfer" style={styles.button}>
        Go to Transfer Money screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'tomato',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
  },
});
