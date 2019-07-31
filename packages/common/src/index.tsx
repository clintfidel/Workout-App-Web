import React, { useState, useContext } from 'react';
import { observer} from 'mobx-react-lite';
import { CounterStoreContext } from './stores/CounterStore';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';



export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext)
  return (
    <View style={styles.container}>
      <Text style={styles.people}>
        {counterStore.count}
      </Text>
      <Button title = 'count' onPress = {() => counterStore.count++}/>
    </View>
  );
});

const styles = StyleSheet.create({
 people: {
   fontSize: 24,
 },
 container: {
	 flex: 1,
  alignItems: "center",
  justifyContent: "center"
 }
});
