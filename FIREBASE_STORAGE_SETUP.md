# Firebase Storage 이미지 공개 설정 가이드

## 현재 상태

✅ Open Graph 메타 태그에 Firebase Storage 이미지 URL이 설정되었습니다.
⚠️ Firebase Storage 파일이 공개 접근 가능하도록 설정되어 있어야 합니다.

## Firebase Storage 공개 설정

### 1. Firebase Console에서 설정

1. [Firebase Console](https://console.firebase.google.com) 접속
2. 프로젝트 선택: `sangjo-funeral`
3. **Storage** 메뉴 클릭
4. **Rules** 탭 클릭
5. 다음 규칙으로 업데이트:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Open Graph 이미지는 공개 접근 허용
    match /20251205210331.png {
      allow read: if true;
    }
    
    // 다른 파일은 인증된 사용자만 접근
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

6. **Publish** 클릭

### 2. 이미지 URL 확인

Firebase Storage에서 파일을 클릭하면 공개 URL을 확인할 수 있습니다.

**예상 URL 형식:**
```
https://firebasestorage.googleapis.com/v0/b/sangjo-funeral.firebasestorage.app/o/20251205210331.png?alt=media&token={token}
```

또는 공개 접근이 허용된 경우:
```
https://firebasestorage.googleapis.com/v0/b/sangjo-funeral.firebasestorage.app/o/20251205210331.png?alt=media
```

### 3. URL이 다른 경우

만약 실제 공개 URL이 다르다면:

1. Firebase Console → Storage → 파일 클릭
2. 공개 URL 복사
3. `index.html` 파일의 `og:image` 메타 태그 업데이트
4. 커밋 및 푸시

## 테스트 방법

### 1. 이미지 URL 직접 접속
브라우저에서 다음 URL을 열어 이미지가 표시되는지 확인:
```
https://firebasestorage.googleapis.com/v0/b/sangjo-funeral.firebasestorage.app/o/20251205210331.png?alt=media
```

### 2. Open Graph 테스트
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [카카오톡 링크 미리보기](https://developers.kakao.com/tool/clear/og)

### 3. 카카오톡에서 직접 테스트
1. 배포된 사이트 링크 복사
2. 카카오톡에서 링크 공유
3. 로고 이미지가 표시되는지 확인

## 문제 해결

### 이미지가 표시되지 않는 경우

1. **Firebase Storage 공개 설정 확인**
   - Storage Rules에서 공개 읽기 허용 확인

2. **URL 형식 확인**
   - 파일명이 URL 인코딩되어 있는지 확인
   - `20251205210331.png` → `20251205210331.png` (인코딩 불필요)

3. **CORS 설정 확인**
   - Firebase Storage는 기본적으로 CORS 허용
   - 문제가 있으면 Firebase Console에서 확인

4. **캐시 문제**
   - 카카오톡, 페이스북 등은 링크 미리보기를 캐시합니다
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)에서 "Scrape Again" 클릭하여 캐시 새로고침

## 현재 설정된 URL

```
https://firebasestorage.googleapis.com/v0/b/sangjo-funeral.firebasestorage.app/o/20251205210331.png?alt=media
```

이 URL이 정확한지 Firebase Console에서 확인하세요!

