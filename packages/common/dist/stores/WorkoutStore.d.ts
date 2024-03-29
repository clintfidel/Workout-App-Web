/// <reference types="react" />
declare type WorkoutDay = 'a' | 'b';
interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string;
        value: number;
    }>;
}
declare class WorkoutStore {
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadLift: number;
    currentBarbellRow: number;
    lastWorkOutType: WorkoutDay;
    history: WorkoutHistory;
}
export declare const WorkoutStoreContext: import("react").Context<WorkoutStore>;
export {};
