import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'socketid',
  initialState: {
    value: null
  },
  reducers: {
    setSocketID: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {setSocketID } = counterSlice.actions

export default counterSlice.reducer