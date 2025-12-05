import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface TokenLoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TokenLoginDialog({ open, onOpenChange }: TokenLoginDialogProps) {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { loginWithToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!token.trim()) {
        setError('토큰을 입력해주세요.');
        setLoading(false);
        return;
      }

      await loginWithToken(token.trim());
      onOpenChange(false);
      setToken('');
    } catch (err: any) {
      let errorMessage = '오류가 발생했습니다. 다시 시도해주세요.';
      
      if (err.code === 'auth/invalid-custom-token') {
        errorMessage = '유효하지 않은 토큰입니다.';
      } else if (err.code === 'auth/custom-token-mismatch') {
        errorMessage = '토큰이 일치하지 않습니다.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setToken('');
    setError('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" style={{ zIndex: 9999 }}>
        <DialogHeader>
          <DialogTitle>토큰으로 로그인</DialogTitle>
          <DialogDescription>
            커스텀 토큰을 입력하여 로그인하세요.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="token" className="text-sm font-medium text-gray-700">
              토큰 *
            </label>
            <Input
              id="token"
              type="text"
              placeholder="토큰을 입력하세요"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                로그인 중...
              </>
            ) : (
              '토큰으로 로그인'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

