import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/movieService';  // API 서비스에서 인기 영화 가져오는 함수

function PopularMovies() {
  const [movies, setMovies] = useState([]);  // 영화 목록 상태
  const [loading, setLoading] = useState(true);  // 로딩 상태

  // 영화 데이터 API 호출
  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchPopularMovies();  // API로 인기 영화 목록 가져오기
        setMovies(data.results);  // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error('영화 데이터 로딩 실패:', error);
      } finally {
        setLoading(false);  // 로딩 완료
      }
    }
    loadMovies();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;  // 로딩 중일 때 메시지
  }

  return (
    <div>
      <h3>인기 영화 목록</h3>
      {movies.length === 0 ? (
        <div>영화가 없습니다.</div>  // 영화 목록이 없을 경우 메시지
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h4>{movie.title}</h4>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '200px' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularMovies;