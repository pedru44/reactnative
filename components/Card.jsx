import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



const Card = () => {
  return (
     <>
     <Card></Card>
        <View style={styles.card}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text> isto é um parágrafo.</Text>
      <Text> isto é um parágrafo.</Text>
      <Text> isto é um parágrafo.</Text>
      </View>
     </>
  )
}

export default Card
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
  