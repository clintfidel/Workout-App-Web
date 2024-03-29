import { createContext } from "react";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string
    value: number
  }>
}

class WorkoutStore {
  currentSquat: number;
  currentBenchPress: number;
  currentOverheadPress: number;
  currentDeadLift: number;
  currentBarbellRow: number; 
  lastWorkOutType:  WorkoutDay;
  history: WorkoutHistory
}

export const WorkoutStoreContext = createContext(new WorkoutStore())