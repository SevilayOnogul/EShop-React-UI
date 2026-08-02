import { createSlice } from '@reduxjs/toolkit'
import type { UserType } from '../types/Types'

export interface AppSliceType {
    currentUser: UserType | null,
    loading: boolean
}

const initialState: AppSliceType = {
    currentUser: null,
    loading: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
})


export const { } = appSlice.actions
export default appSlice.reducer