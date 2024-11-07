import React, { useEffect, useState } from 'react';
import './movies.css'; // CSS 파일 불러오기
import { fetchPopularMovies, fetchTrendingMovies, fetchTopRatedMovies, fetchNewReleases } from '../api/movieService';

function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h3>{title}</h3> {/* 타이틀 표시 */}
      <div className="movie-row__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-row__poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p> {/* 영화 제목 */}
          </div>
        ))}
      </div>
    </div>
  );
}

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllMovies() {
      try {
        const popularData = await fetchPopularMovies();
        const trendingData = await fetchTrendingMovies();
        const topRatedData = await fetchTopRatedMovies();
        const newReleasesData = await fetchNewReleases();

        setPopularMovies(popularData.results);
        setTrendingMovies(trendingData.results);
        setTopRatedMovies(topRatedData.results);
        setNewReleases(newReleasesData.results);
      } catch (error) {
        console.error('영화 데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    }
    loadAllMovies();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="netflix-like-movies">
      <h2>넷플릭스 스타일 영화 목록</h2>

      {/* 각 카테고리별 영화 목록 */}
      <MovieRow title="인기 영화" movies={popularMovies} />
      <MovieRow title="트렌딩 영화" movies={trendingMovies} />
      <MovieRow title="최고 평점 영화" movies={topRatedMovies} />
      <MovieRow title="새로운 개봉작" movies={newReleases} />
    </div>
  );
}

export default PopularMovies;