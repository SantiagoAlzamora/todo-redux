import { Dispatch } from "redux"
import { Task } from "../../types/task.type"
import { ActionTypes } from "../actions-types/taskActionTypes"
import Action from "../actions/taskActions"

export const addTask = (task : Task) =>{
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type:ActionTypes.ADD_TASK,
            payload:task
        })
    }
}
export const deleteTask = (id : number) =>{
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type:ActionTypes.DELETE_TASK,
            payload:id
        })
    }
}
export const completeTask = (id : number) =>{
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type:ActionTypes.COMPLETE_TASK,
            payload:id
        })
    }
}