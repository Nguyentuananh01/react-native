
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "tuan anh",
    age: 20
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20

  },
});
