import React, { useState } from 'react'

interface Props{
    handleClick : Function
}

export default function TaskForm({handleClick}:Props) {

    const [content, setContent] = useState("")

    return (
        <form action="">
            <input type="text" placeholder='Contenido' value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={(e) => handleClick(e, content)}>Crear</button>
        </form>
    )
}
