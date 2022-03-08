export const addOneTodo = (data) => {
    return {
        type:'ADD_ONE',
        payload:data
    }
}

export const addAllTodo = (data) => {
    return {
        type:'ADD_ALL',
        payload:data
    }
}

export const updateTodoStatus = (id) => {
    return {
        type:'UPDATE_STATUS',
        payload:id
    }
}

export const deleteTodo = (id) => {
    return {
        type:'DELETE',
        payload:id
    }
}