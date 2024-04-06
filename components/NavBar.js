import Link from "next/link";
import { useRouter } from "next/router";
//import styles from "../styles/NavBar.module.css";


export default function NavBar(){
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" /> 
      {/* 
      next.js에서는 images를 제공하는데, 여기서는 사용하지 않는다.
      public/vercel.svg를 사용하는 것인데 ../public 뭐 이런식으로 들어가는 않는다. 디폴트가 경로가 무조건 /public에서 시작한다.
      경로 지정시 헤깔리지 말자.
      */}
      <Link legacyBehavior href="/">
       <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      {/*
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      네비게이터를 사용시 a (anchor)를 사용하지 말아라. 이건 html의 단순 링크로, 결과가 같이 보이지만..
      페이지 새로고침이 일어나게 된다. 그러면 기존 <LInk> 방식보다 더 느리게 작동을 한다.
      */}
      <Link legacyBehavior href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
      {/*
      14.x에서는 이처럼 사용하지 않는다. 샘플용 코드임을 알아두자. 여기서는 12.x대의 코드로 사용하려고 이러는 것임.
      실제 12.x에서는 이처럼 사용한다.
      <Link href="/">
       <a style={{color: router.pathname === "/" ? "red": "blue"}}>Home</a>
      </Link>
      */}
    </nav>
  )
}