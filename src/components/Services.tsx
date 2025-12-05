import { Heart, Shield, Users, Clock, Award, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: '장례 대행 서비스',
    description: '장례 준비부터 진행까지 모든 과정을 전문적으로 대행해드립니다',
    features: ['장례식장 예약', '접수 및 안내', '장례용품 준비', '의전 진행'],
  },
  {
    icon: Shield,
    title: '상조 보험',
    description: '안정적인 보장으로 든든한 미래를 준비하세요',
    features: ['장례비 보장', '월 납입 가능', '중도 해지 가능', '적립금 지급'],
  },
  {
    icon: Users,
    title: '가족 케어 서비스',
    description: '가족 모두가 함께하는 종합 상조 서비스',
    features: ['가족 회원 할인', '경조사 지원', '건강 검진', '상담 서비스'],
  },
  {
    icon: Clock,
    title: '24시간 긴급 출동',
    description: '언제든지 연락주시면 즉시 출동하여 도와드립니다',
    features: ['24시간 상담', '전국 출동 가능', '신속한 대응', '전문 상담사'],
  },
  {
    icon: Award,
    title: '프리미엄 서비스',
    description: '최고급 장례 문화를 제공하는 프리미엄 서비스',
    features: ['특급 장례식장', '고급 장례용품', 'VIP 의전', '맞춤 서비스'],
  },
  {
    icon: Sparkles,
    title: '사후 관리',
    description: '장례 이후에도 지속적인 케어 서비스를 제공합니다',
    features: ['묘지 관리', '제례 지원', '법률 상담', '행정 대행'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
            서비스 안내
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            전문적이고 세심한 서비스
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            고객님의 소중한 순간을 품격있게 준비하고 진행하는<br />
            평안상조의 다양한 서비스를 만나보세요
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            상세 상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
