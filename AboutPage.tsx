import { Card, CardContent, CardHeader } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Heart, Snowflake, Cloud } from 'lucide-react'

export function AboutPage() {
  const values = [
    {
      icon: Snowflake,
      title: '순수함',
      description: '눈처럼 맑고 투명한 마음으로 이야기를 바라보고, 있는 그대로의 진실을 담아내려 합니다.'
    },
    {
      icon: Cloud,
      title: '자유로움',
      description: '구름처럼 형태에 얽매이지 않고 자유롭게 떠다니는 상상력을 추구합니다.'
    },
    {
      icon: Heart,
      title: '따뜻함',
      description: '모든 작품에 따뜻한 마음과 공감을 담아 독자와 진정한 소통을 나누고자 합니다.'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-primary">About</h1>
          <p className="text-xl text-muted-foreground mb-4">설화 소개</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            순수함과 상상력, 그리고 탐험적 사고를 담은 창작자의 이야기와 철학을 소개합니다.
          </p>
        </div>

        <div className="space-y-20">
          {/* Introduction */}
          <section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl mb-6">설화(雪話)의 의미</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    <strong className="text-primary">설화(雪話)</strong>는 '눈 이야기'라는 뜻입니다. 
                    눈처럼 순수하고 맑은 마음으로 시작되는 이야기들, 
                    그리고 그 이야기들이 독자의 마음에 조용히 내려앉기를 바라는 마음을 담았습니다.
                  </p>
                  <p>
                    이곳은 단순히 글을 게시하는 공간이 아닙니다. 
                    방문자가 이야기 속을 직접 걸어다니며, 
                    상상의 세계를 탐험할 수 있는 몰입형 공간을 지향합니다.
                  </p>
                  <p>
                    모든 창작물은 <em className="text-primary">"진실한 마음"</em>에서 출발하며, 
                    독자와의 만남에서 완성됩니다.
                  </p>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719259927068-0e1d1025c95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aGl0ZSUyMGxvdHVzJTIwZmxvd2VyJTIwd2F0ZXJ8ZW58MXx8fHwxNzU1ODM4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="순수함을 상징하는 연꽃"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl text-center mb-12">창작 가치관</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl mb-2">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section>
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <h2 className="text-3xl mb-4">창작 철학</h2>
              </CardHeader>
              <CardContent className="max-w-4xl mx-auto text-center">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    "모든 이야기는 누군가의 마음에서 시작되어 
                    또 다른 누군가의 마음에서 완성됩니다."
                  </p>
                  <p>
                    창작자는 씨앗을 심는 사람입니다. 
                    독자의 상상력이라는 토양에서 그 씨앗이 어떤 꽃을 피울지는 
                    각자의 경험과 감성에 달려있습니다.
                  </p>
                  <p>
                    완벽한 작품보다는 진실한 작품을, 
                    화려한 기교보다는 따뜻한 마음을 담아 
                    독자와 진정한 소통을 나누고자 합니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Closing Message */}
          <section className="text-center">
            <div className="mt-12 p-8 bg-muted/30 rounded-lg">
              <p className="text-lg leading-relaxed">
                설화의 세계에 관심을 가져주신 모든 분들께 감사드립니다. 
                여러분의 마음속에서 새로운 이야기들이 꽃피기를 바랍니다.
              </p>
              <p className="mt-4 text-primary italic">
                "이야기는 혼자 만드는 것이 아니라, 함께 만들어가는 것입니다."
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}