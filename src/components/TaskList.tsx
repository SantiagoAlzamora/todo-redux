import React from 'react'
import { State } from '../redux/reducers'
import { useSelector } from 'react-redux/es/exports'
import TaskItem from './TaskItem'

export default function TaskList() {
  const taskLists = useSelector((state : State)  => state.task )

  return (
    <div>

      <section>
        {taskLists && taskLists.map(e => <TaskItem key={e.id} task={e}/>)}
      </section>

    </div>
  )
}
