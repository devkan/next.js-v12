import Head from "next/head"; //next.js는 작은 패키지를 가져가 쓸수 있다.

export default function Seo({title}){
  return (
    <Head>
      <title>{`${title} | Kan Movies`}</title>
      {/* 
      <title>{title} | Kan Movies</title> 이렇게 사용하니, 
      "Warning: A title element received an array with more than 1 element as children" 경고가 나왔다.
      React render에서는 <title> <!-- -->{title}<!-- --> | xmunt blog</title> 변수 앞뒤로 주석으로 되는데 주석은 HTML노드여서 하위노드로 간주로해서 주석-글자-주석-글자 => 이런식으로 여러 개의 자식노드로 인식하는 것이다.
       */}
    </Head>
  )
}