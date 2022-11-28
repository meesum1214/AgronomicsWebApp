import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface driverState {
  value: boolean
}

const initialState: driverState = {
  value: false
}

const driverSlice = createSlice({
  name: 'driverMode',
  initialState,
  reducers: {
    switchDriverMode: (state, action) => {
      state.value = true
    }
  }
})

export const { switchDriverMode } = driverSlice.actions

export const selectedDriverMode = (state: RootState) => state.driverMode.value

export default driverSlice.reducer