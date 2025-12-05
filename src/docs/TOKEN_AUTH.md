# 토큰 기반 인증 가이드

## 개요

이 프로젝트는 Firebase ID Token을 사용한 토큰 기반 인증을 지원합니다.

## 토큰 종류

### 1. Firebase ID Token
- 로그인 후 자동으로 발급되는 토큰
- 1시간 유효
- 자동 갱신 (55분마다)

### 2. Custom Token
- 백엔드에서 생성한 커스텀 토큰
- `loginWithToken()` 함수로 로그인

## 사용 방법

### 1. AuthContext에서 토큰 사용

```typescript
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { token, getToken, refreshToken, currentUser } = useAuth();

  // 현재 토큰 가져오기
  const handleGetToken = async () => {
    const idToken = await getToken();
    console.log('현재 토큰:', idToken);
  };

  // 토큰 강제 갱신
  const handleRefreshToken = async () => {
    const newToken = await refreshToken();
    console.log('새 토큰:', newToken);
  };

  return (
    <div>
      <p>토큰: {token ? '있음' : '없음'}</p>
      <button onClick={handleGetToken}>토큰 가져오기</button>
      <button onClick={handleRefreshToken}>토큰 갱신</button>
    </div>
  );
}
```

### 2. useToken Hook 사용

```typescript
import { useToken } from '../hooks/useToken';

function MyComponent() {
  const { token, fetchToken, refreshToken, decodeToken, isExpired } = useToken();

  // 토큰 정보 확인
  const tokenInfo = token && decodeToken ? decodeToken() : null;
  const expired = isExpired;

  return (
    <div>
      <p>토큰 만료 여부: {expired ? '만료됨' : '유효함'}</p>
      {tokenInfo && (
        <div>
          <p>사용자 ID: {tokenInfo.uid}</p>
          <p>이메일: {tokenInfo.email}</p>
          <p>만료 시간: {new Date(tokenInfo.exp * 1000).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
```

### 3. API 요청 시 토큰 사용

```typescript
import { apiGet, apiPost } from '../utils/api';

// GET 요청 (자동으로 토큰 포함)
const fetchUserData = async () => {
  try {
    const data = await apiGet('/api/user/profile');
    console.log('사용자 데이터:', data);
  } catch (error) {
    console.error('오류:', error);
  }
};

// POST 요청 (자동으로 토큰 포함)
const updateUserData = async (userData: any) => {
  try {
    const result = await apiPost('/api/user/update', userData);
    console.log('업데이트 결과:', result);
  } catch (error) {
    console.error('오류:', error);
  }
};

// 인증이 필요 없는 요청
const publicData = await apiGet('/api/public/data', { requireAuth: false });
```

### 4. 수동으로 토큰을 헤더에 추가

```typescript
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { getToken } = useAuth();

  const fetchData = async () => {
    const token = await getToken();
    
    const response = await fetch('https://api.example.com/data', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  };
}
```

### 5. Custom Token으로 로그인

```typescript
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { loginWithToken } = useAuth();

  const handleCustomTokenLogin = async (customToken: string) => {
    try {
      await loginWithToken(customToken);
      console.log('커스텀 토큰 로그인 성공');
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };
}
```

## 토큰 자동 관리

- 로그인 시 자동으로 토큰 발급 및 저장
- 55분마다 자동 갱신 (토큰 만료 전)
- 로그아웃 시 토큰 자동 삭제
- API 요청 시 자동으로 토큰 포함

## 보안 주의사항

1. **토큰은 클라이언트에 저장하지 마세요**
   - 토큰은 메모리에만 저장됩니다
   - localStorage나 sessionStorage에 저장하지 않습니다

2. **HTTPS 사용**
   - 프로덕션 환경에서는 반드시 HTTPS를 사용하세요

3. **토큰 만료 처리**
   - 토큰이 만료되면 자동으로 갱신됩니다
   - 갱신 실패 시 사용자에게 재로그인 요청

## 백엔드에서 토큰 검증

백엔드에서 Firebase Admin SDK를 사용하여 토큰을 검증할 수 있습니다:

```javascript
// Node.js 예제
const admin = require('firebase-admin');

async function verifyToken(idToken) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log('사용자 UID:', decodedToken.uid);
    console.log('이메일:', decodedToken.email);
    return decodedToken;
  } catch (error) {
    console.error('토큰 검증 실패:', error);
    throw error;
  }
}
```

