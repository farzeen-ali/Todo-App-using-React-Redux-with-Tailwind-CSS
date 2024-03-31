import { ADD_TODO, FILTER_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, MARL_ALL_COMPLETED_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payLoad: {text}
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payLoad: {id}
})
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payLoad: {id}
})
export const markCompleted = (id) => ({
    type: MARK_COMPLETED_TODO,
    payLoad: {id}
})
export const markInCompleted = (id) => ({
    type: MARK_INCOMPLETE_TODO,
    payLoad: {id}
})
export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payLoad: {filter}
})
export const updateSearchTodo = (search) => ({
    type: SEARCH_TODO,
    payLoad: {search}
})
export const markAllCompleted = () => ({
    type: MARL_ALL_COMPLETED_TODO,
})