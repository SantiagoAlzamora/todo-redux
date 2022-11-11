import React from 'react'
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../redux/actions-types/taskActionTypes'
import { Task } from '../types/task.type'

interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {

  const dispatch = useDispatch()
  
  return (
    <div >
      <span className={task.completed ? "completed" : ""}>{task.content}</span>
      <button onClick={()=>dispatch({
        type:ActionTypes.COMPLETE_TASK,
        payload:task.id
      })}>✔</button>
      <button onClick={()=>dispatch({
        type:ActionTypes.DELETE_TASK,
        payload:task.id
      })}>🗑</button>
        
    </div>
  )
}
