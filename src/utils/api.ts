import { auth } from '../firebase/config';
import { getIdToken } from 'firebase/auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

interface RequestOptions extends RequestInit {
  requireAuth?: boolean;
}

export async function apiRequest(
  endpoint: string,
  options: RequestOptions = {}
): Promise<Response> {
  const { requireAuth = true, headers = {}, ...fetchOptions } = options;

  const requestHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // 인증이 필요한 경우 토큰 추가
  if (requireAuth && auth?.currentUser) {
    try {
      const token = await getIdToken(auth.currentUser);
      requestHeaders['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('토큰 가져오기 오류:', error);
      throw new Error('인증 토큰을 가져올 수 없습니다.');
    }
  }

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...fetchOptions,
    headers: requestHeaders,
  });

  // 401 Unauthorized인 경우 토큰 갱신 후 재시도
  if (response.status === 401 && requireAuth && auth?.currentUser) {
    try {
      // 토큰 강제 갱신
      const newToken = await getIdToken(auth.currentUser, true);
      requestHeaders['Authorization'] = `Bearer ${newToken}`;
      
      // 재시도
      return await fetch(url, {
        ...fetchOptions,
        headers: requestHeaders,
      });
    } catch (error) {
      console.error('토큰 갱신 오류:', error);
      throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
    }
  }

  return response;
}

// GET 요청
export async function apiGet<T>(endpoint: string, options?: RequestOptions): Promise<T> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.statusText}`);
  }

  return response.json();
}

// POST 요청
export async function apiPost<T>(
  endpoint: string,
  data?: unknown,
  options?: RequestOptions
): Promise<T> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.statusText}`);
  }

  return response.json();
}

// PUT 요청
export async function apiPut<T>(
  endpoint: string,
  data?: unknown,
  options?: RequestOptions
): Promise<T> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.statusText}`);
  }

  return response.json();
}

// DELETE 요청
export async function apiDelete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.statusText}`);
  }

  return response.json();
}

