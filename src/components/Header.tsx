import { useState } from 'react';
import { Menu, X, Phone, LogIn, LogOut, User, UserPlus } from 'lucide-react';
import { LoginDialog } from './LoginDialog';
import { SignupDialog } from './SignupDialog';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const menuItems = [
    { label: '홈', href: '#home' },
    { label: '서비스', href: '#services' },
    { label: '회사소개', href: '#about' },
    { label: '고객후기', href: '#testimonials' },
    { label: '문의하기', href: '#contact' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white">평안</span>
                </div>
                <span className="text-2xl text-blue-900">평안상조</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{currentUser.email}</span>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>로그아웃</span>
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginDialogOpen(true);
                    }}
                    className="flex items-center space-x-2 bg-blue-900 text-white hover:bg-blue-800"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>로그인</span>
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSignupDialogOpen(true);
                    }}
                    variant="outline"
                    className="flex items-center space-x-2 border-blue-900 text-blue-900 hover:bg-blue-50"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>회원가입</span>
                  </Button>
                </>
              )}
              <a
                href="tel:1588-0000"
                className="flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>1588-0000</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {currentUser ? (
                  <div className="px-4 space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700 py-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{currentUser.email}</span>
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>로그아웃</span>
                    </Button>
                  </div>
                ) : (
                  <div className="px-4 space-y-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLoginDialogOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-blue-900 text-white hover:bg-blue-800"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>로그인</span>
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSignupDialogOpen(true);
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2 border-blue-900 text-blue-900 hover:bg-blue-50"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>회원가입</span>
                    </Button>
                  </div>
                )}
                <a
                  href="tel:1588-0000"
                  className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors mx-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>1588-0000</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      <LoginDialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen} />
      <SignupDialog open={isSignupDialogOpen} onOpenChange={setIsSignupDialogOpen} />
    </>
  );
}
