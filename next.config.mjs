/** @type {import('next').NextConfig} */

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

const nextConfig = {
  reactStrictMode: true,

  async redirects(){
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false, // permanent(영구적)가 true이면 브라우저가 검색엔지이 이 정보를 기억하고, false면 아니다.
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${MOVIE_API_KEY}`,
      }
    ]
  }
};

export default nextConfig;
