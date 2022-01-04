import rootReducer from './reducer/mainroot'


import {createStore} from 'redux'

// global / centralized state
const store=createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;