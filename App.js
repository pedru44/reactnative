import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Pag3 from './screens/Pag3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pag1 from './screens/Pag1';
import Pag2 from './screens/Pag2';
import { NavigationContainer } from '@react-navigation/native';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Objeto" component={Objeto}options={{title:"Objeto"}} />
        <Stack.Screen name="Arrays" component={Arrays}options={{title:"Arrays"}} />
          <Stack.Screen name="pagina1" component={Pag1}options={{title:"Página Principal"}} />
          <Stack.Screen name="pagina2" component={Pag2}options={{title:"Página 2"}} />
          <Stack.Screen name="pagina3" component={Pag3}options={{title:"Página 3"}} />
        </Stack.Navigator>
      </NavigationContainer>

    </>

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
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});
