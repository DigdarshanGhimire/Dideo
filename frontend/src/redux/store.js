import { configureStore } from '@reduxjs/toolkit'
import SocketReducer from './meSlice'


export default configureStore({
  reducer: SocketReducer
})