import { useState } from "react"

export default function Hydration(){
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <buttion onClick={() => setCounter((prev) => prev + 1)}>+</buttion>
    {/*
    Next.js에서 react.js를 프론트 앤드안에서 실행하는 것을 hydration 이라고 부른다.
    pre-render 된 정적 페이지 html을 불러내고, 그뒤 react.js를 로딩하고 난 뒤부터는 react app처럼 사용하게 되는 것이다. 
    이것을 hydration 이라고 하는 것이고..
   */} 
     </div>
  )
}