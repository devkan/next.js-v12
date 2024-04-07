//import "../styles/globals.css";
// 여기서 외부파일을 import하면 오류가 발생한다. _app.js에서만 가능하다.

import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

// getServerSideProps의 props가 results라서 results로 받아야 한다.
export default function Home({ results }) {
	const router = useRouter();
	const onClick = (id, title) => {
		router.push(
			{
				pathname: `/movies/${id}`,
				query: {
					title, // query를 사용하여 title을 넘겨준다. title: title 대신에 title로 축약해서 사용가능하다.
				},
			},
			`movies/${id}`
		); // router.push()를 사용하여 페이지 이동
	};

	return (
		<div className="container">
			<Seo title="Home" />
			{results?.map((movie) => (
				<div
					onClick={() => onClick(movie.id, movie.original_title)}
					className="movie"
					key={movie.id}
				>
					<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
					<h4>
						{movie.original_title}
						<Link
							legacyBehavior
							href={{
								pathname: `/movies/${movie.id}`,
								query: { title: movie.original_title },
							}}
							as={`movies/${movie.id}`}
						>
							<a></a>
						</Link>
					</h4>
				</div>
				// 구지 <Link/>를 사용하지 않아도 되지만, 두가지 방식을 보여주기 위해서 사용했다.
			))}
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie {
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
export async function getServerSideProps() {
	const { results } = await (
		await fetch("http://localhost:3000/api/movies")
	).json();
	return {
		props: {
			results, // results로 props를 지정되면 Home()의 페이지에서도 result로 받아야 한다.
		},
	};
}
