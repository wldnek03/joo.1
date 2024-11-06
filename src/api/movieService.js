const API_KEY = process.env.REACT_APP_TMDB_API_KEY;  // 환경 변수에서 API 키 가져오기
const API_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    if (!response.ok) {
      throw new Error('영화 데이터를 가져오는 데 실패했습니다.');
    }
    const data = await response.json();
    return data;  // 인기 영화 목록 반환
  } catch (error) {
    console.error(error);
    throw error;  // 에러 발생 시 처리
  }
};