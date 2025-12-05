import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '김민수',
    age: 54,
    location: '서울 강남구',
    rating: 5,
    comment: '아버지 장례를 치르면서 평안상조의 도움을 받았습니다. 힘든 시기에 모든 것을 꼼꼼하게 챙겨주셔서 정말 감사했습니다. 전문적이면서도 따뜻한 서비스에 감동받았습니다.',
    date: '2024.11',
  },
  {
    name: '이정희',
    age: 48,
    location: '경기 성남시',
    rating: 5,
    comment: '10년 전에 가입해서 꾸준히 납입하다가 이번에 서비스를 받게 되었습니다. 가입할 때 약속했던 것 이상으로 세심하게 진행해주셔서 정말 만족스러웠습니다.',
    date: '2024.10',
  },
  {
    name: '박준영',
    age: 61,
    location: '부산 해운대구',
    rating: 5,
    comment: '24시간 상담 서비스가 정말 큰 도움이 되었습니다. 새벽에 급하게 연락했는데도 즉시 출동해주시고, 모든 절차를 친절하게 안내해주셨습니다. 믿고 맡길 수 있는 곳입니다.',
    date: '2024.09',
  },
  {
    name: '최은영',
    age: 52,
    location: '대구 수성구',
    rating: 5,
    comment: '어머니 장례를 준비하면서 많이 힘들었는데, 평안상조 덕분에 품격있게 잘 모실 수 있었습니다. 가족처럼 함께해주신 직원분들께 진심으로 감사드립니다.',
    date: '2024.08',
  },
  {
    name: '정우진',
    age: 45,
    location: '인천 연수구',
    rating: 5,
    comment: '투명한 비용 안내와 합리적인 가격이 마음에 들어 가입했습니다. 중간에 궁금한 사항이 있을 때마다 친절하게 상담해주셔서 신뢰가 갑니다.',
    date: '2024.11',
  },
  {
    name: '강수민',
    age: 57,
    location: '광주 서구',
    rating: 5,
    comment: '할아버지부터 아버지까지 평안상조와 함께했습니다. 3대째 이용하는 이유가 있습니다. 변함없는 정성과 전문성에 항상 감사합니다.',
    date: '2024.10',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
            고객 후기
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            고객님들의 소중한 이야기
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            평안상조와 함께하신 고객님들의<br />
            진심 어린 후기를 만나보세요
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.comment}
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-900 mb-1">
                      {testimonial.name} ({testimonial.age}세)
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-gray-400">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-900 mb-2">98.5%</div>
              <div className="text-gray-600">고객 만족도</div>
            </div>
            <div>
              <div className="text-4xl text-blue-900 mb-2">4.9/5.0</div>
              <div className="text-gray-600">평균 평점</div>
            </div>
            <div>
              <div className="text-4xl text-blue-900 mb-2">50만+</div>
              <div className="text-gray-600">누적 회원 수</div>
            </div>
            <div>
              <div className="text-4xl text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">재가입률</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
