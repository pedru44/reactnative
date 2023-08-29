import React from 'react'
import { Avatar, Card } from 'react-native-paper'

const Pag3 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Pedro" subtitle="Pedro" left={LeftContent} />
            </Card>

            <Card style={{marginBottom: 10}}>
                <Card.Title title="Pedro" subtitle="Pedro" left={LeftContent} />
            </Card>

            <Card style={{marginBottom: 10}}>
                <Card.Title title="Pedro" subtitle="Pedro" left={LeftContent} />
            </Card>

            <Card style={{marginBottom: 10}}>
                <Card.Title title="Pedro" subtitle="Pedro" left={LeftContent} />
            </Card>

        </>
    )
}

export default Pag3