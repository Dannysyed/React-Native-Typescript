import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TodoItems from '../models/todo';

const Listitem: React.FC<TodoItems> = (prop) => {
    return (
        <View style={styles.Listitem}>
            <Text style={styles.item}>{prop.id} {prop.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Listitem: {
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '1rem'
    },
    item: {
        color: 'white',
        padding: '0.4rem',
        // borderWidth: 3,
        width: '100vw',
        textAlign: 'center',
        backgroundColor: 'purple',
        marginBottom: '1.4rem',
        borderRadius: 2,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});


export default Listitem