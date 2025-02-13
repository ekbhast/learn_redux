import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

const initialState = {
    value: 0
};

// // создание стора в ручную
// let state = reducer(undefined, {type: 'INC'}); // создание стора и привязка к нему редюсера
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

// //функция reduser в простом виде
// function reducer(state = 0, action){
//     if (action.type === 'INC'){
//         return state + 1;
//     }
//     return state;
// }




//reducer
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INC':
            return {
                ...state,//разворачиваем старый стэйт
                value: state.value + 1 // берем старый стейт его значение и добавлем 1 и записваем в value
                // на выходе получится объект со всеми старыми свойствами + новое валью
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1
            };
        case 'RND':
            return {
                ...state,
                value: state.value * action.payload
            }
        default:
            return state;
    }
}

const update = () => {
    document.querySelector('#counter').textContent = store.getState().value;// не забыть казать какое именно свойство мы получаем
}

//action creators суть простов возвращать объект с нужным action
//классический вариант
// const inc = () => {
//     return {type: 'INC'}
// }
//сокращенная запись
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});


//создание стора
const store = createStore(reducer);
//подвиска на изменение стора
store.subscribe(update);


// Ивенты вызывающие диспатч, для изменения стора
document.querySelector('#inc').addEventListener('click', () => {
    store.dispatch(inc())
});
document.querySelector('#dec').addEventListener('click', () => {
    store.dispatch(dec())
});
document.querySelector('#rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    store.dispatch(rnd(value));
});





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  </React.StrictMode>
);


