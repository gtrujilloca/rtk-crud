import { createSlice } from '@reduxjs/toolkit';

import { Task } from '../../interfaces/Taks';

const initialState: Task[] = []

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload);
      state.splice(taskIndex, 1)
    },
    editTask: (state,action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id);
      if(taskIndex >= 0)
        state[taskIndex] = action.payload;
    }
  }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;