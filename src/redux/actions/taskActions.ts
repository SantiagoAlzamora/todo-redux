import { Task } from "../../types/task.type"
import { ActionTypes } from "../actions-types/taskActionTypes"

interface AddTaskAction {
    type : ActionTypes.ADD_TASK
    payload: Task
}
interface DeleteTaskAction {
    type : ActionTypes.DELETE_TASK
    payload: number
}
interface CompleteTaskAction {
    type : ActionTypes.COMPLETE_TASK
    payload: number
}

type Action = AddTaskAction | DeleteTaskAction | CompleteTaskAction

export default Action