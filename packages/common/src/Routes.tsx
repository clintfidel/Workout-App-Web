import React, { useContext } from "react";
import { RouterStoreContext } from "./stores/RouterStore";
import { observer } from "mobx-react-lite";
import { WorkoutHistory } from "./stores/components/WorkoutHistory";
import { CurrentWorkout } from "./stores/components/CurrentWorkout";

export const Routes = observer(() => {
  const routerStore = useContext(RouterStoreContext)

  return (
    routerStore.screen === 'WorkoutHistory' ?
      <WorkoutHistory /> : <CurrentWorkout />
  )
}); 