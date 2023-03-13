import { View, Text, Modal, StyleSheet, TextInput, Button, Image, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { useState } from 'react'

const AddList: React.FC<{ showmodal: boolean, setModal: (data: boolean) => void, extractData: (data: string) => void }> = (prop) => {
    let hideModal = () => {
        prop.setModal(false)
    }

    let [listInput, setInputList] = useState('')

    let SubmitHandle = () => {
        console.log(listInput, 'asfsd')
        prop.extractData(listInput)
    }
    return (
        <Modal visible={prop.showmodal} animationType='slide'  >
            <View style={styles.container}>
                <View style={styles.first}>
                    <Image style={styles.image} source={require('../assets/favicon.png')} />
                    <TextInput style={styles.input} placeholder="Please input your text here"
                        onChangeText={newText => setInputList(newText)}
                    //  onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setInputList(e.target)}
                    />
                </View>
                <View style={styles.second}>
                    <Button title='Submit' onPress={SubmitHandle} />
                    <Button title='Cancel' onPress={hideModal} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'

    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        alignSelf: 'center'
        // backgroundColor: 'black'
    },
    first: {
        // backgroundColor: 'yellow',

    },
    second: {
        // backgroundColor: 'purple',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 5,
        gap: 20
    },
    input: {
        borderWidth: 2,

        padding: 10
    }
});




export default AddList
