import { Percent, Gift, CreditCard, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Percent,
    title: '합리적인 가격',
    description: '투명한 비용 체계와 다양한 할인 혜택',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Gift,
    title: '회원 특별 혜택',
    description: '가입 회원님께 드리는 다양한 서비스',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: CreditCard,
    title: '유연한 납입',
    description: '월 납입 가능하고 중도 해지 시 적립금 환급',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: HeadphonesIcon,
    title: '24시간 상담',
    description: '언제든지 전문 상담사가 대기하고 있습니다',
    color: 'from-orange-500 to-orange-600',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
            회원 혜택
          </div>
          <h2 className="text-4xl text-white mb-4">
            평안상조 회원만의 특별한 혜택
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            가입하시는 순간부터 누리실 수 있는<br />
            다양하고 실질적인 혜택들을 만나보세요
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-blue-100">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits List */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h3 className="text-2xl text-white mb-8 text-center">
            추가 회원 혜택
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              '가족 회원 최대 30% 할인',
              '전국 제휴 병원 건강검진 할인',
              '장례식장 이용료 할인',
              '고급 장례용품 무료 제공',
              '법률 및 세무 상담 무료',
              '제례 및 추모 서비스 지원',
              '온라인 추모관 무료 제공',
              '장례 이후 행정 업무 대행',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-200 rounded-full" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
