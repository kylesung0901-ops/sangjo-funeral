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
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`
6. "Deploy" 클릭

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

