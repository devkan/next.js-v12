//import "../styles/globals.css";
// 여기서 외부파일을 import하면 오류가 발생한다. _app.js에서만 가능하다.

import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "xxxxxxxx"; // change

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
		<div>
			<Seo title="Home" />
			{!movies && <h4>Loading...</h4>}
			{movies?.map((movie) => (
				<div key={movie.id}>
					<h4>{movie.original_title}</h4>
				</div>
			))}
		</div>
	);
}
