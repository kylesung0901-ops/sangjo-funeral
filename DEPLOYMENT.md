# Vercel 배포 가이드

## 자동 배포 (GitHub 연동)

### 1. Vercel 웹사이트에서 배포

1. [Vercel](https://vercel.com)에 접속하여 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택: `kylesung0901-ops/sangjo-funeral`
4. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
5. 환경 변수 추가:
   - `VITE_FIREBASE_API_KEY` = `AIzaSyDO3TdEWghWqLtQAkhG2Fwd0NHxRH8_dHE`
   - `VITE_FIREBASE_AUTH_DOMAIN` = `sangjo-funeral.firebaseapp.com`
   - `VITE_FIREBASE_PROJECT_ID` = `sangjo-funeral`
   - `VITE_FIREBASE_STORAGE_BUCKET` = `sangjo-funeral.firebasestorage.app`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID` = `566010018168`
   - `VITE_FIREBASE_APP_ID` = `1:566010018168:web:35114574c37e1e7ace708d`
   - `VITE_FIREBASE_MEASUREMENT_ID` = `G-PDLW7QCPV0`
   
   ⚠️ **경고 메시지에 대해**: 
   - Vercel에서 "might expose sensitive information" 경고가 나타날 수 있습니다
   - **이 경고는 무시해도 됩니다**
   - Firebase API Key는 공개되어도 안전합니다 (Firebase 보안 규칙으로 보호됨)
   - 자세한 내용은 `src/docs/FIREBASE_SECURITY.md` 참고
   
6. "Save" 클릭 후 "Deploy" 클릭

### 2. 환경 변수 설정

Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Environment Variables
3. 각 환경 변수 추가:
   - Production, Preview, Development 모두에 추가

## CLI를 통한 배포

### 1. Vercel 로그인
```bash
vercel login
```

### 2. 프로젝트 배포
```bash
vercel
```

### 3. 프로덕션 배포
```bash
vercel --prod
```

## 배포 후 확인사항

1. ✅ 빌드가 성공적으로 완료되는지 확인
2. ✅ 환경 변수가 제대로 설정되었는지 확인
3. ✅ Firebase 연결이 정상 작동하는지 확인
4. ✅ 로그인/회원가입 기능이 작동하는지 확인

## 자동 배포 설정

GitHub에 푸시하면 자동으로 배포됩니다:
- `main` 브랜치 → Production 배포
- 다른 브랜치 → Preview 배포

## 커스텀 도메인 설정

1. Vercel 대시보드 → 프로젝트 → Settings → Domains
2. 도메인 추가
3. DNS 설정 안내에 따라 설정

