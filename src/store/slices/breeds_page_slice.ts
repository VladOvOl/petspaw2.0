import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

interface IinitialState{
    limit:number,
    breed:{
        name:string,
        id:string
    },
    preload:boolean

}

const initialState:IinitialState={
    limit:10,
    breed:{
        name:"All breeds",
        id:''
        },
    preload:false



}

const breedsPageToolkit = createSlice({
    name:"breedsPageToolkit",

    initialState,
    reducers:{
        changeLimitState(state,action){
            state.limit = action.payload
        },
        changeBreedState(state,action){
            state.breed = action.payload
        },
        changePreload(state){
            state.preload = !state.preload
        }
    }
})

export default breedsPageToolkit.reducer
export const {changeLimitState,changeBreedState,changePreload} = breedsPageToolkit.actions