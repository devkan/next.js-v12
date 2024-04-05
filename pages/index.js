//import "../styles/globals.css";
// 여기서 외부파일을 import하면 오류가 발생한다. _app.js에서만 가능하다.

import Seo from '@/components/Seo';

export default function Home(){
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
    </div>
  )
}