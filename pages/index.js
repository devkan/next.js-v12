//import "../styles/globals.css";
// 여기서 외부파일을 import하면 오류가 발생한다. _app.js에서만 가능하다.

import Seo from "@/components/Seo";
import { useEffect, useState } from "react";


export default function Home({results}) { // getServerSideProps의 props가 results라서 results로 받아야 한다.
	return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie{
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
	);
}

// getServerSideProps()는 서버사이드에서만 작동이 되며, 이 결과값이 page의 props로 전달된다.
export async function getServerSideProps(){
  const { results } = await (await fetch("http://localhost:3000/api/movies")).json();
  return{
    props:{
      results // results로 props를 지정되면 Home()의 페이지에서도 result로 받아야 한다.
    }
  }
}