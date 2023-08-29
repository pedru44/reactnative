import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

const Objeto = () => {

    const carros = [
        { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: '' },
        { marca: 'GM', modelo: 'Celta', ano: 2003, cor: 'Preto', foto: '' },
        { marca: 'Fiat', modelo: 'Palio', ano: 1995, cor: 'Azul', foto: '' },
        { marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Vermelho', foto: '' },
        { marca: 'Ford', modelo: 'Ka', ano: 2023, cor: 'Prata', foto: '' }
    ]
    return (
        <>
            {carros.map(item => (
                <Card>
                    <Card.Cover Source>{{ url: item.foto }}/>
                </Card>
        </>
    )
}

export default Objeto