import { Task } from "../../types/task.type"
import { ActionTypes } from "../actions-types/taskActionTypes"
import Action from "../actions/taskActions"

const initial_state: Array<Task> = []

const reducer = (state: Array<Task> = initial_state, action: Action) => {

    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return [...state, action.payload]
        case ActionTypes.DELETE_TASK:
            return state.filter(e => e.id !== action.payload)
        case ActionTypes.COMPLETE_TASK:
            return state.map(e => {
                if (e.id === action.payload) {
                    e.completed = !e.completed
                }
                console.log(e.id === action.payload);
                
                return e
            })


        default:
            return state
    }
}

export default reducer