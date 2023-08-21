import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';



export default function App() {
  return (
    <ScrollView style={{margin:10}}>
      <Card></Card>
      
    <View style={styles.card}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text> isto é um parágrafo.</Text>
      <Text style={styles.titulomenor}> isto é um parágrafo.</Text>
      <Text> isto é um parágrafo.</Text>
      <StatusBar style="auto" />
    </View>
    
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'black',
    bordeStyle: 'solid',
    borderWidth: 2,
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    padding: 20,
    marginBottom: 20,
    borderBottomColor: 'red',
    bordeBottomStyle: 'solid',
    bordeBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'green',

  },
  titulomenor: {
    fontSize:10
  }
});
