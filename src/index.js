import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
// import store from './store'
import states from './store'

states.subscribe(()=>{
  console.log(states.getState() )
})



ReactDOM.render(
  <React.StrictMode>
      <Provider store={states}>

    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

