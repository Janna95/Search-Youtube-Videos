import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from '../reducers/videoReducer';

const middleware = [thunk];
const initialState = {
    allVideos: [],
};

const store = createStore(videoReducer, initialState, applyMiddleware(...middleware));

export default store;


