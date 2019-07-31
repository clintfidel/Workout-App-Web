import React, { useState, useContext } from 'react';
import { observer} from 'mobx-react-lite';
import { CounterStoreContext } from './stores/CounterStore';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Routes } from './Routes';



export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext)
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
         <Routes />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
 container: {
	 flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: '100%'
 }, 
 wrapper: {
   width: '100%',
   flex: 1,
   maxWidth: 425,
   backgroundColor: '#F5FCFF'
 }
});
