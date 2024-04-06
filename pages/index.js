//import "../styles/globals.css";
// 여기서 외부파일을 import하면 오류가 발생한다. _app.js에서만 가능하다.

import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "17aac700a5086c5b3362043c1f6a81e1";

export default function Home() {
	const [movies, setMovies] = useState();
	useEffect(() => {
		(async () => {
			const { results } = await (
				await fetch(
					`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
				)
			).json();
			// {results}를 response되는 데이타중 results 부분을 가져오기 위한 것이다. 즉, api리턴값이 있는 객채의 이름으로 임의로 지정한 것이 아니다.
			//  (async () => {……})(); 에서 맨 뒤의 ()가 없으면 실행이 안된다. run() 함수의 ()처럼 있으면 실행이 된다는거
			setMovies(results);
		})();
	}, []);

	return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
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
