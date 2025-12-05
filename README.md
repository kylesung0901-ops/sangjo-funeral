
# Funeral Service Website Design

This is a code bundle for Funeral Service Website Design. The original project is available at https://www.figma.com/design/xVIhE3iRWeF75dXjcXHMcX/Funeral-Service-Website-Design.

## Features

- 🔐 Firebase Authentication (이메일/비밀번호, 토큰 기반)
- 💾 Firestore Database 연동
- 📝 로그인/회원가입 기능
- 📧 문의 폼 (Firestore 저장)
- 🎨 Modern UI with Tailwind CSS
- 🧪 Playwright 테스트

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Authentication

### 이메일/비밀번호 인증
- 로그인 버튼 클릭 → 이메일/비밀번호 입력
- 회원가입 버튼 클릭 → 성함, 전화번호, 이메일, 비밀번호 입력

### 토큰 기반 인증
- Firebase ID Token 자동 발급 및 관리
- API 요청 시 자동으로 토큰 포함
- 토큰 자동 갱신 (55분마다)

자세한 내용은 [토큰 인증 가이드](./src/docs/TOKEN_AUTH.md)를 참고하세요.

## Firebase 설정

1. Firebase Console에서 Authentication 활성화
2. Firestore Database 생성
3. `.env` 파일에 Firebase 설정 추가

## Testing

Run `npm run test` to run Playwright tests.
  