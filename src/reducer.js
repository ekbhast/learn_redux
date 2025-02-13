const initialState = {
    value: 0
};

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

export default reducer;