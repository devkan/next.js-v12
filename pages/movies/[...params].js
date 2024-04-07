import Seo from "@/components/Seo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Detail({ params, results }) {
	//console.log(results);
	const router = useRouter();
	const [title, id] = params || [];
	//console.log(router);

	return (
		<div className="container">
			<Seo title={title} />
			<h4 className="title">{title}</h4>
			<div className="imageContainer">
				<img src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`} />
			</div>
			<p>
				<strong>Release Date:</strong> {results.release_date}
			</p>
			<p>
				<strong>Genres:</strong>{" "}
				{results.genres.map((genre) => genre.name).join(", ")}
			</p>
			<p>
				<strong>Overview:</strong> {results.overview}
			</p>
			<p>
				<strong>Production Companies:</strong>{" "}
				{results.production_companies.map((company) => company.name).join(", ")}
			</p>
			<p>
				<strong>Runtime:</strong> {results.runtime} minutes
			</p>
			<p>
				<strong>Rating:</strong> {results.vote_average} ({results.vote_count}{" "}
				votes)
			</p>
			<a href={results.homepage} target="_blank" rel="noopener noreferrer">
				Official Website
			</a>

			<style jsx>{`
				.container {
					padding: 20px;
				}
				.title {
					text-align: center;
				}
				.imageContainer {
					display: flex;
					justify-content: center;
					margin: 20px;
          border-radius: 20px;
				}

				p {
					margin: 5px 0;
				}
				a {
					display: block;
					margin-top: 10px;
					color: blue;
				}
			`}</style>
		</div>
	);
}

export async function getServerSideProps({ query: { params } }) {
	const id = params[1];
	//console.log("params", params)

	const res = await fetch(`http://localhost:3000/api/movies/${id}`);
	const results = await res.json();

	return {
		props: {
			params: params,
			results,
		},
	};
}
// 여기서는 server side rendering으로 title과 id를 얻기위해 getServerSideProps를 사용한다.
