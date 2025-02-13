
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          test
          <Text style={styles.ok}> tuan anh</Text>
        </Text>
      </View>
      <Text>Hello world tuan anh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ok: {
    color: "green"
  },
  text: {
    fontSize: 25,
    color: "pink"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
