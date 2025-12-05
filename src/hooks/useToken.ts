import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';

export function useToken() {
  const { currentUser, getToken, refreshToken, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // 현재 토큰 가져오기
  const fetchToken = async (forceRefresh = false): Promise<string | null> => {
    if (!currentUser) return null;

    setIsLoading(true);
    try {
      const idToken = forceRefresh ? await refreshToken() : await getToken();
      return idToken;
    } catch (error) {
      console.error('토큰 가져오기 오류:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // 토큰 디코딩 (JWT 페이로드 추출)
  const decodeToken = (tokenString: string) => {
    try {
      const base64Url = tokenString.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('토큰 디코딩 오류:', error);
      return null;
    }
  };

  // 토큰 만료 시간 확인
  const isTokenExpired = (tokenString: string): boolean => {
    const decoded = decodeToken(tokenString);
    if (!decoded || !decoded.exp) return true;

    const expirationTime = decoded.exp * 1000; // 초를 밀리초로 변환
    return Date.now() >= expirationTime;
  };

  return {
    token,
    isLoading,
    fetchToken,
    refreshToken: () => fetchToken(true),
    decodeToken: token ? () => decodeToken(token) : null,
    isExpired: token ? isTokenExpired(token) : true,
  };
}

