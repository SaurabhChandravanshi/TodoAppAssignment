const initialState = []
const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ONE': {
            return [...state, action.payload]
        }
        case 'ADD_ALL': {
            return action.payload;
        }
        case 'UPDATE_STATUS': {

            return [...state.filter((item) => {
                if(item.id === action.payload) {
                    item.completed = !item.completed;
                }
                
                return item;
            })]
        }
        case 'DELETE' : {
            return [...state.filter((item) => item.id !== action.payload)]
        }
        default: return state;
    }
}
export default todoReducer;