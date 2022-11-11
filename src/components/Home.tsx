import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { State } from '../redux/reducers'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { Task } from '../types/task.type'
import { ActionTypes } from '../redux/actions-types/taskActionTypes'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

export default function Home() {

    const taskLists  = useSelector((state : State)  => state.task ) // taskLists va a trabajar con el state del taskReducer al poner state.task
   
   const dispatch = useDispatch()

   function handleClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>, content:string ){
        e.preventDefault()
        const task : Task = {
            id: taskLists.length+1,
            content:content,
            completed:false
        }
        // let addDispatch = addTask(task) FUNCIONA PERO NO CREEMOS QUE SE USE
        // addDispatch(dispatch)

        /**
         * FUNCIONA PERO NOS SALTEAMOS UN ARCHIVO (taskActionCreators.ts)
         */
        dispatch({  
            type:ActionTypes.ADD_TASK,
            payload:task
        }) 
   }

    

    return (
        <div>
            <TaskForm handleClick={handleClick}/>
            <TaskList />
            
        </div>
    )
}
