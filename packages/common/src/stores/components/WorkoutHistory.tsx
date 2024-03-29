import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RouterStoreContext } from '../RouterStore';

interface Props {

}

export const WorkoutHistory: React.FC<Props> = () => {
  const routerStore = React.useContext(RouterStoreContext)
  return (
    <View>
      <Text>
        Workout History Page
      </Text>
      <Button title ='create workout' onPress = {() => routerStore.screen = 'CurrentWorkout'}/>
    </View>
  )
}