import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white">평안</span>
              </div>
              <span className="text-xl text-white">평안상조</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              30년의 경험과 신뢰로<br />
              고객님의 소중한 순간을<br />
              함께하겠습니다
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  서비스 안내
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  고객 후기
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  약관 및 정책
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-6">주요 서비스</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  장례 대행 서비스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  상조 보험
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  가족 케어 서비스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  24시간 긴급 출동
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  프리미엄 서비스
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6">연락처</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white mb-1">1588-0000</div>
                  <div className="text-sm text-gray-400">24시간 상담 가능</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@pyungan.co.kr" className="hover:text-white transition-colors">
                  info@pyungan.co.kr
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  서울특별시 강남구<br />
                  테헤란로 123 평안빌딩 10층
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              &copy; 2024 평안상조. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white transition-colors">
                사이트맵
              </a>
            </div>
          </div>

          {/* Company Registration Info */}
          <div className="mt-6 text-xs text-gray-500 space-y-1">
            <p>상호명: (주)평안상조 | 대표자: 김평안 | 사업자등록번호: 123-45-67890</p>
            <p>통신판매업신고번호: 제2024-서울강남-12345호</p>
            <p>본 사이트는 데모 목적으로 제작되었습니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
