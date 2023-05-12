const getTodoSuccess = todo => ({
    type: "GET_TODO_SUCCESS",
    payload: todo
})

const getTodoStarted = () => ({
    type: "GET_TODO_STARTED"
})

const getTodoFailed = error => ({
    type: "GET_TODO_FAILED",
    payload: error
})

export const getTodo = () => {
    return async dispatch => {
        dispatch(getTodoStarted())
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'GET'
        })
        const todos = await response.json()
        dispatch(getTodoSuccess(todos))
    }
}


const postTodoSuccess = todo => ({
    type: "POST_TODO_SUCCESS",
    payload: todo
})
const postTodoStarted = () => ({
    type: "POST_TODO_STARTED"
})

const postTodoFailed = (error) => ({
    type: "POST_TODO_FAILED",
    payload: error
})

export const postTodo = (title) => {
    return async dispatch => {
        dispatch(postTodoStarted())
        const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
            method: 'POST',
            body: JSON.stringify({
                title: title,
                completed: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const todo = await response.json()
        dispatch(postTodoSuccess(todo))
    }
}

