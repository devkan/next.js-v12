import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

export default function NavBar(){
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link legacyBehavior href="/">
       <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
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
        <a className={[
          styles.link,
          router.pathname === "/about" ? styles.active : ""
        ].join(" ")}>About</a>
      </Link>
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