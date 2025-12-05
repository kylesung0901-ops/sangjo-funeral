import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase/config';

const storage = app ? getStorage(app) : null;

// Firebase Storage에서 이미지 URL 가져오기
export async function getImageUrl(filePath: string): Promise<string | null> {
  if (!storage) return null;
  
  try {
    const imageRef = ref(storage, filePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('이미지 URL 가져오기 오류:', error);
    return null;
  }
}

// Open Graph 이미지 URL (Firebase Storage)
export const OG_IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/sangjo-funeral.firebasestorage.app/o/20251205210331.png?alt=media';

