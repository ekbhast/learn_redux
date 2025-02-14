const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INC':
            return {
                ...state,//разворачиваем старый стэйт
                counter: state.counter + 1 // берем старый стейт его значение и добавлем 1 и записваем в value
                // на выходе получится объект со всеми старыми свойствами + новое валью
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'RST':
            return {
                ...state,
                counter: 0
            };
        case 'RND':
            return {
                ...state,
                counter: state.counter * action.payload
            }
        default:
            return state;
    }
}

export default reducer;