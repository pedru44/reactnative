import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

const Objeto = () => {

    const carros = [
        { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/57d875000e216302700166d5fuscao-v1.jpeg?quality=70&strip=info&w=948&h=552&crop=1' },
        { marca: 'GM', modelo: 'Celta', ano: 2003, cor: 'Preto', foto: 'https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/sobre-grade-a-o-inox-chevrolet-celta-12-16-e-prisma-2012-fusion-superior-2.png' },
        { marca: 'Fiat', modelo: 'Palio', ano: 1995, cor: 'Azul', foto: 'https://cdn.autopapo.com.br/box/uploads/2022/05/28121818/fiat_palio_elx-1.0-azul-claro-frente.jpg' },
        { marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Vermelho', foto: 'https://www.autossegredos.com.br/wp-content/webp-express/webp-images/uploads/2021/07/vw-gol-rock-in-rio-2011.jpg.webp' },
        { marca: 'Ford', modelo: 'Ka', ano: 2023, cor: 'Prata', foto: 'https://noticiasdecarros.com.br/wp-content/uploads/2021/09/novo-ka.jpg' }
    ]
    return (
        <>

            {carros.map(item => (
                <Card>
                    <Card style={{ marginBottom: 20 }}>
                        <Card.Content>
                            <Card.Cover source={{ uri:item.foto }} />
                        </Card.Content>
                    </Card>

                    <Card.Content>
                        <Text variant="bodyMedium">Modelo: {item.modelo}</Text>
                        <Text variant="tittleLarge">Marca: {item.marca}</Text>
                        <Text variant="bodyMedium">Ano: {item.ano}</Text>
                        <Text variant="bodyMedium">Cor: {item.cor}</Text>
                    </Card.Content>
                </Card>

            ))}
        </>
    )
}

export default Objeto