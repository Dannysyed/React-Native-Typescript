import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Listitem from './components/Listitem';
import { useState } from 'react'
import AddList from './components/AddList';

export default function App() {
  let [modalON, setModalOn] = useState<boolean>(false)

  let modalHandle = () => {
    setModalOn(true)
  }
  return (
    <View style={styles.container}>
      {modalON && <AddList showmodal={modalON} />}
      <Button title='Add List ' onPress={modalHandle} />
      <ScrollView style={styles.button}>
        {[1, 23, 2, 12, 12, 12, 1, 21, 2, 12, 1, 2, 12].map(val => <Listitem />)}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'flex-start'
  },
  button: {
    // backgroundColor: 'red',
    display: 'flex',
    height: '70vh',
    marginTop: '5rem'

  },
});
