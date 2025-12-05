# Open Graph 이미지 설정 가이드

## 현재 상태

✅ Open Graph 메타 태그가 모두 설정되었습니다.
⚠️ 실제 로고 이미지 파일이 필요합니다.

## 다음 단계

### 1. 로고 이미지 파일 준비

제공하신 **평안상조 로고 이미지**를 다음 위치에 저장하세요:

**파일 경로**: `public/og-image.png`

**이미지 사양**:
- 크기: **1200x630px** (Open Graph 표준 크기)
- 형식: PNG 또는 JPG
- 파일 크기: 1MB 이하 권장

### 2. 이미지 생성 방법

#### 방법 A: 기존 로고 사용
1. 제공하신 평안상조 로고 이미지 열기
2. 이미지 편집 도구(Photoshop, Canva, Figma 등) 사용
3. 1200x630px 캔버스 생성
4. 로고를 중앙에 배치
5. 배경색 추가 (선택사항 - 파란색 계열 권장)
6. "평안상조 - 품격있는 장례 서비스" 텍스트 추가 (선택사항)
7. PNG로 내보내기
8. `public/og-image.png`로 저장

#### 방법 B: 온라인 도구 사용
1. [Canva](https://www.canva.com) 접속
2. "1200x630" 크기로 새 디자인 생성
3. 로고 이미지 업로드 및 배치
4. 텍스트 추가
5. PNG로 다운로드
6. `public/og-image.png`로 저장

### 3. 파일 저장 후

1. 파일을 `public/og-image.png`에 저장
2. 개발 서버 재시작: `npm run dev`
3. 브라우저에서 확인: `http://localhost:3000/og-image.png`
4. 커밋 및 푸시:
   ```bash
   git add public/og-image.png
   git commit -m "Add Open Graph image for social media sharing"
   git push
   ```

### 4. 테스트 방법

#### 카카오톡에서 테스트
1. 배포된 사이트 링크 복사
2. 카카오톡에서 링크 공유
3. 로고 이미지와 제목, 설명이 표시되는지 확인

#### 온라인 도구로 테스트
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## 현재 설정된 메타 태그

- ✅ Open Graph (Facebook, 카카오톡)
- ✅ Twitter Card
- ✅ 파비콘
- ✅ 사이트 설명
- ✅ 키워드

이미지만 추가하면 완료됩니다!

