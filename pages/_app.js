import NavBar from "@/components/NavBar";
import "../styles/globals.css"; // 외부 파일은 이처럼 _app.js에서 import해야 한다.

export default function App({Component, pageProps}){
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a { color: green; }
      `}
      </style>      
    </div>
  );
}