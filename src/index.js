import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

// const initialState = 0;
// let state = reducer(undefined, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

// выше создание стора в ручную

const reducer = (state = 0, action) => {
    switch (action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
    document.querySelector('#counter').textContent = store.getState();
})

document.querySelector('#inc').addEventListener('click', () => {
    store.dispatch({type: 'INC'})
});
document.querySelector('#dec').addEventListener('click', () => {
    store.dispatch({type: 'DEC'})
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  </React.StrictMode>
);


