import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Listitem from './components/Listitem';
import { useState } from 'react'
import AddList from './components/AddList';
import TodoItems from './models/todo';

export default function App() {
  let [modalON, setModalOn] = useState<boolean>(true)

  let modalHandle = () => {
    setModalOn(true)
  }
  let [itemList, setItemList] = useState<TodoItems[]>([])

  let getData = (data: string) => {


    setItemList(prev => prev.concat({ id: Math.floor(Math.random() * 1000), title: data }))
  }
  return (
    <View style={styles.container}>
      {modalON && <AddList showmodal={modalON} setModal={setModalOn} extractData={getData} />}
      <Button title='Add List ' onPress={modalHandle} />
      <ScrollView style={styles.button}>
        {itemList.map(val => <Listitem title={val.title} id={val.id} />)}
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
