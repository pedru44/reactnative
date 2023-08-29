import React from 'react'
import { Button, Text } from 'react-native'
import Card from '../components/Card'
import Pag2 from './Pag2'

const Pag1 = ({navigation}) => {

  return (
    <>

      <Button title='Pag2' onPress={()=>navigation.navigate('pagina2')} />
      <Button title='Pag3' onPress={()=>navigation.navigate('pagina3')} />

      <Card titulo="Sem conteúdo" />
      <Card titulo="Mobile">
        <Text>React Native</Text>
      </Card>

      <Card titulo="Principal" nome="Pedro">
        <Text>Parágrafo 1</Text>
        <Text>Parágrafo 2</Text>
        <Text>Parágrafo 3</Text>
        <Button title='Detalhes' />
      </Card>

      <Card titulo="Flamengo Cheirinho">

      </Card>


    </>
  )
}

export default Pag1