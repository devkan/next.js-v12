import "../styles/globals.css"; // 외부 파일은 이처럼 _app.js에서 import해야 한다.
import Layout from "@/components/Layout";

export default function App({Component, pageProps}){
  return (
    <Layout>
      <Component {...pageProps} />    
    </Layout>
  );
}