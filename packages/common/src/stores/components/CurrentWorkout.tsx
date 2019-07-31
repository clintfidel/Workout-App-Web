import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RouterStoreContext } from '../RouterStore';

interface Props {

}

export const CurrentWorkout: React.FC<Props> = () => {
  const routerStore = React.useContext(RouterStoreContext) 
  return (
    <View>
      <Text>
        My workouts
      </Text>
      <Button title ='create workout' onPress = {() => routerStore.screen = "WorkoutHistory"}/>

    </View>
  )
}