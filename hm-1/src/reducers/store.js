import {configureStore} from '@reduxjs/toolkit';
import listSlice from './listReducer'


export default configureStore({
    reducer: {
        listSlice,
    }
})