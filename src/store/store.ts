import { combineReducers , configureStore } from "@reduxjs/toolkit";
import breedsPageToolkit from './slices/breeds_page_slice'
import votingPageToolkit from './slices/voting_page_slice';
import galletyPageToolkit from './slices/gallery_page_slice';

const rootReducer = combineReducers( {
    breedsPageToolkit:breedsPageToolkit,
    votingPageToolkit:votingPageToolkit,
    galletyPageToolkit:galletyPageToolkit,
})

const store = configureStore(
    {
        reducer:rootReducer
    }
)

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;