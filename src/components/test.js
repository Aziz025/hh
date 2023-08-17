'use client'
import {useState} from 'react'
export default function Test(){
    const {counter , setCounter} = useState(5)
    const plusFunc = () =>{
        setCounter(counter + 1)
    }
    const minusFunc = () =>{
        setCounter(counter - 1)
    }
    return (<div>
        <h1>
            My test component
        </h1>
        <p>
            test parag...
        </p>
        <a>
            link
        </a>
        <p>
            counter: {counter}
        </p>
        <button onClick={minusFunc}>minus</button>
        <button onClick={plusFunc}>plus</button>
    </div>)
}