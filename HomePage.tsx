import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { ChevronDown } from 'lucide-react'

interface HomePageProps {
  onSectionChange: (section: string) => void
}

export function HomePage({ onSectionChange }: HomePageProps) {
  const quickLinks = [
    {
      key: 'stories',
      title: 'Stories',
      subtitle: '이야기 속',
      description: '단편, 시, 몰입형 글로 떠나는 상상의 여행',
      image: 'https://images.unsplash.com/photo-1719259927068-0e1d1025c95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxvdHVzJTIwZmxvd2VyJTIwd2F0ZXJ8ZW58MXx8fHwxNzU1ODM4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      key: 'about',
      title: 'About',
      subtitle: '설화 소개',
      description: '순수함과 상상력을 담은 창작자의 이야기와 철학',
      image: 'https://images.unsplash.com/photo-1697283896715-ca06e132b2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY2xvdWRzJTIwc2t5JTIwZXRoZXJlYWx8ZW58MXx8fHwxNzU1ODM4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641754850990-c3869ab50e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwbW91bnRhaW4lMjBjbG91ZHMlMjB3aW50ZXIlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU1ODM4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="눈 덮인 산과 구름"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl mb-6 text-primary/90">
            Seolhwa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary/80 leading-relaxed">
            이야기 속을 걷는 공간
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-primary/70 leading-relaxed">
              이곳은 눈처럼 맑은 마음으로 이야기를 담아내는 공간입니다.<br />
              설화(雪話)는 단순한 글이 아닌, 마음과 상상, 경험이 교차하는 여정입니다.<br />
              방문자는 이곳에서 글을 읽고, 그림을 보고, 세계관을 탐험하며,<br />
              이야기 속을 실제로 걸어다니듯 몰입할 수 있습니다.
            </p>
          </div>
          <Button
            onClick={() => onSectionChange('stories')}
            size="lg"
            className="bg-white/90 text-primary hover:bg-white/80 backdrop-blur-sm"
          >
            탐험 시작하기
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-primary">설화의 세계로</h2>
            <p className="text-xl text-muted-foreground">
              순수함과 상상력을 담은 이야기들
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Card 
                key={link.key}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => onSectionChange(link.key)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={link.image}
                    alt={link.subtitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-primary">{link.title}</h3>
                  <p className="text-muted-foreground mb-3">{link.subtitle}</p>
                  <p className="text-sm leading-relaxed">{link.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-8 text-primary">창작의 철학</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl mb-3">순수함</h3>
              <p className="text-muted-foreground">
                눈처럼 맑고 투명한 마음에서 시작되는 이야기
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl mb-3">상상력</h3>
              <p className="text-muted-foreground">
                구름처럼 자유롭게 떠다니는 창의적 사고
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🪷</div>
              <h3 className="text-xl mb-3">성장</h3>
              <p className="text-muted-foreground">
                연꽃처럼 진흙에서도 아름답게 피어나는 창작
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}