import Head from "next/head"; //next.js는 작은 패키지를 가져가 쓸수 있다.

export default function Seo({title}){
  return (
    <Head>
      <title>{title} | Kan Movies</title>
    </Head>
  )
}