import { createSlice ,PayloadAction } from "@reduxjs/toolkit";
import GalleryPage from './../../pages/gallery_page/GalleryPage';

interface IinitialState{
    order:string,
    type:string,
    limit:number,
    breed:{
        name:string,
        id:string
    },
    preload:boolean

}

const initialState:IinitialState={
    order:'Random',
    type:'All',
    limit:10,
    breed:{
        name:"All breeds",
        id:''
        },
    preload:false



}

const galletyPageToolkit = createSlice({
    name:"galleryPageToolkit",

    initialState,
    reducers:{
        changeLimitState(state,action){
            state.limit = action.payload
        },
        changeBreedState(state,action){
            state.breed = action.payload
        },
        changeTypeState(state,action){
            state.type = action.payload
        },
        changeOrderState(state,action){
            state.order = action.payload
        }
       
    }
})

export default galletyPageToolkit.reducer
export const {changeLimitState,changeBreedState,changeOrderState,changeTypeState} = galletyPageToolkit.actions