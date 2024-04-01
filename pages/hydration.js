import { useState } from "react"

export default function Hydration(){
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <buttion onClick={() => setCounter((prev) => prev + 1)}>+</buttion>
    </div>
  )
}