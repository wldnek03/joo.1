// movieService.js

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // 환경 변수에서 API 키 가져오기
const API_URL = 'https://api.themoviedb.org/3';

// 인기 영화 가져오기
export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    if (!response.ok) throw new Error('영화 데이터를 가져오는 데 실패했습니다.');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 트렌딩 영화 가져오기
export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}&language=ko-KR`);
    if (!response.ok) throw new Error('영화 데이터를 가져오는 데 실패했습니다.');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 최고 평점 영화 가져오기
export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`);
    if (!response.ok) throw new Error('영화 데이터를 가져오는 데 실패했습니다.');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 최신 개봉작 가져오기
export const fetchNewReleases = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR`);
    if (!response.ok) throw new Error('영화 데이터를 가져오는 데 실패했습니다.');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};