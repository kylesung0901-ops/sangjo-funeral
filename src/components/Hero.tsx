import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760201656695-76e8765eef67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZsb3dlcnMlMjBtZW1vcmlhbHxlbnwxfHx8fDE3NjQ5MzEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="평안상조 배경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
            <span>믿음과 신뢰의 상조서비스</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            고인의 마지막 길을<br />
            <span className="text-blue-200">품격있게 모시겠습니다</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            30년의 경험과 노하우로 가족처럼 따뜻하게,<br />
            전문가답게 정성스럽게 함께하겠습니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              <span>서비스 알아보기</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1588-0000"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>1588-0000 상담전화</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-white mb-2">30년+</div>
              <div className="text-blue-200">업계 경력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-white mb-2">50만+</div>
              <div className="text-blue-200">회원 수</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-white mb-2">98%</div>
              <div className="text-blue-200">만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
