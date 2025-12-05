# Firebase 보안 가이드

## Vercel 환경 변수 경고에 대해

Vercel에서 `VITE_` 접두사가 붙은 환경 변수에 대해 경고가 표시됩니다. 이는 Vite의 특성 때문입니다.

### 왜 경고가 나타나나요?

- Vite는 `VITE_` 접두사가 붙은 환경 변수를 **클라이언트 번들에 포함**시킵니다
- 즉, 브라우저에서 이 값들을 볼 수 있습니다
- 일반적으로 API 키나 비밀번호 같은 민감한 정보는 클라이언트에 노출되면 안 됩니다

### Firebase API Key는 안전한가요?

**네, Firebase API Key는 공개되어도 안전합니다!**

Firebase API Key는:
- ✅ **공개되어도 안전합니다** - Firebase 보안 규칙으로 보호됩니다
- ✅ **클라이언트에서 사용하는 것이 정상**입니다
- ✅ Firebase Console에서도 공개 사용을 권장합니다

### Firebase 보안은 어떻게 보장되나요?

1. **Firebase Security Rules** - Firestore, Storage 등의 접근 제어
2. **Firebase Authentication** - 사용자 인증 및 권한 관리
3. **API Key 제한** - Firebase Console에서 API Key 사용 제한 설정 가능

### 더 안전하게 하려면?

만약 더 높은 보안이 필요하다면:

1. **Firebase API Key 제한 설정**
   - Firebase Console → 프로젝트 설정 → API 키
   - HTTP 리퍼러 제한 설정
   - 애플리케이션 제한 설정

2. **Firebase Security Rules 강화**
   ```javascript
   // Firestore Rules 예시
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

3. **서버 사이드 처리** (고급)
   - Firebase Admin SDK를 서버에서만 사용
   - 클라이언트는 서버 API를 통해 접근

## 결론

**현재 설정으로도 충분히 안전합니다!**

- Vercel 경고는 무시해도 됩니다
- Firebase API Key는 공개되어도 안전합니다
- Firebase Security Rules로 데이터를 보호하세요

