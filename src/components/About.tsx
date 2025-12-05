import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: '신뢰',
    description: '30년간 쌓아온 신뢰로 고객님과 함께합니다',
  },
  {
    title: '정성',
    description: '한 분 한 분 정성스럽게 모시겠습니다',
  },
  {
    title: '전문성',
    description: '전문 교육을 받은 직원들이 최상의 서비스를 제공합니다',
  },
  {
    title: '투명성',
    description: '명확하고 투명한 비용 안내로 신뢰를 드립니다',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
              회사 소개
            </div>
            
            <h2 className="text-4xl text-gray-900 mb-6">
              30년의 경험과 신뢰<br />
              평안상조입니다
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              평안상조는 1994년 설립 이래 30년간 50만 고객님과 함께하며
              대한민국 상조문화를 선도해왔습니다. 고인의 마지막 여정을
              품격있고 따뜻하게 모시는 것, 그것이 저희의 사명입니다.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              전국 100여 개 지점과 24시간 긴급 출동 시스템을 통해
              언제 어디서나 고객님 곁에서 함께하겠습니다.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl text-blue-900 mb-2">100+</div>
                <div className="text-gray-600">전국 지점</div>
              </div>
              <div>
                <div className="text-3xl text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">전문 직원</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY0ODczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="평안상조 팀"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-1">고객 만족도</div>
                  <div className="text-3xl text-blue-900">98.5%</div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
