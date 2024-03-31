import { createStore } from "redux";
import todoReducer from '../Reducer/reducer';

const store = createStore(todoReducer);

export default store;
