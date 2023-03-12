import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'

const AddList: React.FC<{ showmodal: boolean }> = (prop) => {
    return (
        <Modal visible={prop.showmodal} animationType='slide' style={styles.container} >
            <View >
                <text>Hello</text>
            </View>
            <View>
                <text>Hello</text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink !important'
    },
    first: {
        backgroundColor: 'yellow'
    }
});




export default AddList
