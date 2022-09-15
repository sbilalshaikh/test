import {useState} from  'react'
import React from 'react'

const Content = () => {

    const [name, setName] = useState('bilal')
    const [count, setCount] = useState(0)



    const handleNameChange = () => {
        const names = ['madeeha' , 'abdullah' , 'bilal']
        const int = Math.floor(Math.random() * 3)
        setName(names[int])
      } 

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleClick2 = () => {
        console.log(count)
    }





  return (
    <main>
        <p onDoubleClick={handleClick}>
            hello {name}!
        </p>
        <button onClick={handleNameChange}>  change name</button>
        <button onClick={handleClick}>  click me</button>
        <button onClick={(handleClick2)}>  click me</button>

    </main>
  )
} 

export default Content