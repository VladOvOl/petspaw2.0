import { createSlice ,PayloadAction } from "@reduxjs/toolkit";
import { IVotingCard, IVotingLog } from "../../types/TypesCard";

interface IinitialState{
    arrLikeImg:IVotingCard[],
    arrDislikeImg:IVotingCard[],
    arrLog:IVotingLog[],
    

}

const initialState:IinitialState={
    arrLikeImg:[],
    arrDislikeImg:[],
    arrLog:[]
    



}

const votingPageToolkit = createSlice({
    name:"breedsPageToolkit",

    initialState,
    reducers:{
        addToArrLikeImg(state,action){
            state.arrLikeImg.push(action.payload)
        },
        addToLogLike(state,action){
            state.arrLog.push(action.payload)
        },
        addToArrFavouriteImg(state,action){
            //state.arrLikeImg.push(action.payload)
        },
        addToLogFavourite(state,action){
            //state.arrLog.push(action.payload)
        },
        addToArrDislikeImg(state,action){
            state.arrDislikeImg.push(action.payload)
        },
        addToLogDislike(state,action){
            state.arrLog.push(action.payload)
        },

    }
})

export default votingPageToolkit.reducer
export const {addToArrLikeImg,addToLogLike,
            addToArrFavouriteImg,addToLogFavourite,
            addToArrDislikeImg,addToLogDislike} = votingPageToolkit.actions