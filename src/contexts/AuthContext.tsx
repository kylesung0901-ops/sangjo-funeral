import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
  signInWithCustomToken
} from 'firebase/auth';
import { auth } from '../firebase/config';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithToken: (customToken: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | null>;
  refreshToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  const signup = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase Auth is not initialized');
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // 회원가입 후 토큰 가져오기
    const idToken = await getIdToken(userCredential.user);
    setToken(idToken);
    return userCredential;
  };

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase Auth is not initialized');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // 로그인 후 토큰 가져오기
    const idToken = await getIdToken(userCredential.user);
    setToken(idToken);
  };

  const loginWithToken = async (customToken: string) => {
    if (!auth) throw new Error('Firebase Auth is not initialized');
    const userCredential = await signInWithCustomToken(auth, customToken);
    // 커스텀 토큰 로그인 후 ID 토큰 가져오기
    const idToken = await getIdToken(userCredential.user);
    setToken(idToken);
  };

  const logout = async () => {
    if (!auth) throw new Error('Firebase Auth is not initialized');
    await signOut(auth);
    setToken(null);
  };

  const getToken = async (): Promise<string | null> => {
    if (!auth || !currentUser) return null;
    try {
      const idToken = await getIdToken(currentUser);
      setToken(idToken);
      return idToken;
    } catch (error) {
      console.error('토큰 가져오기 오류:', error);
      return null;
    }
  };

  const refreshToken = async (): Promise<string | null> => {
    if (!auth || !currentUser) return null;
    try {
      // forceRefresh: true로 설정하여 강제로 새 토큰 발급
      const idToken = await getIdToken(currentUser, true);
      setToken(idToken);
      return idToken;
    } catch (error) {
      console.error('토큰 갱신 오류:', error);
      return null;
    }
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      // 사용자가 로그인되어 있으면 토큰 가져오기
      if (user) {
        try {
          const idToken = await getIdToken(user);
          setToken(idToken);
        } catch (error) {
          console.error('토큰 가져오기 오류:', error);
          setToken(null);
        }
      } else {
        setToken(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // 토큰 자동 갱신 (1시간마다)
  useEffect(() => {
    if (!currentUser || !auth) return;

    const refreshInterval = setInterval(async () => {
      try {
        const idToken = await getIdToken(currentUser, true);
        setToken(idToken);
      } catch (error) {
        console.error('토큰 자동 갱신 오류:', error);
      }
    }, 55 * 60 * 1000); // 55분마다 갱신 (토큰 만료 전)

    return () => clearInterval(refreshInterval);
  }, [currentUser]);

  const value = {
    currentUser,
    loading,
    token,
    login,
    loginWithToken,
    signup,
    logout,
    getToken,
    refreshToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

