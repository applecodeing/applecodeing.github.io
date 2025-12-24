import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { MapPin, Users, Clock, BookOpen } from 'lucide-react'

export function WorldPage() {
  const worlds = [
    {
      id: 'ethereal-realm',
      title: '에테리얼 렐름',
      description: '구름 위에 떠있는 신비로운 세계',
      status: '진행중',
      genre: ['판타지', '모험'],
      image: 'https://images.unsplash.com/photo-1697283896715-ca06e132b2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY2xvdWRzJTIwc2t5JTIwZXRoZXJlYWx8ZW58MXx8fHwxNzU1ODM4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        setting: '하늘 위 떠다니는 부유 섬들',
        timeline: '고대 마법 시대',
        theme: '순수함과 타락의 대립'
      }
    },
    {
      id: 'snow-valley',
      title: '설화의 계곡',
      description: '영원한 겨울이 머무는 평화로운 마을',
      status: '구상중',
      genre: ['일상', '치유'],
      image: 'https://images.unsplash.com/photo-1641754850990-c3869ab50e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwbW91bnRhaW4lMjBjbG91ZHMlMjB3aW50ZXIlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU1ODM4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        setting: '눈으로 덮인 고요한 산골 마을',
        timeline: '현대와 과거가 공존',
        theme: '기억과 망각, 치유'
      }
    }
  ]

  const characters = [
    {
      name: '아리엘',
      role: '구름 수호자',
      world: 'ethereal-realm',
      description: '순수한 마음을 가진 젊은 수호자. 구름의 힘을 다루며 세계의 균형을 지킨다.',
      traits: ['순수함', '용기', '공감능력']
    },
    {
      name: '설아',
      role: '기억 수집가',
      world: 'snow-valley',
      description: '사라져가는 이야기들을 모으고 보존하는 신비로운 소녀.',
      traits: ['호기심', '따뜻함', '지혜']
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-primary">World</h1>
          <p className="text-xl text-muted-foreground mb-4">세계관</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            이곳에서는 창작된 세계들이 살아 숨쉽니다. 
            각각의 세계는 고유한 설정과 등장인물, 그리고 이야기를 품고 있습니다.
          </p>
        </div>

        <Tabs defaultValue="worlds" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="worlds">세계</TabsTrigger>
            <TabsTrigger value="characters">인물</TabsTrigger>
            <TabsTrigger value="timeline">연대기</TabsTrigger>
          </TabsList>

          <TabsContent value="worlds" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {worlds.map((world) => (
                <Card key={world.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] relative">
                    <ImageWithFallback
                      src={world.image}
                      alt={world.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={world.status === '진행중' ? 'default' : 'secondary'}>
                        {world.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl mb-2">{world.title}</h3>
                        <CardDescription className="text-base mb-4">
                          {world.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {world.genre.map((g) => (
                        <Badge key={g} variant="outline" className="text-sm">
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{world.details.setting}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{world.details.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{world.details.theme}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="characters" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {characters.map((character) => (
                <Card key={character.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl">{character.name}</h3>
                        <CardDescription>{character.role}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        {worlds.find(w => w.id === character.world)?.title}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed mb-4">
                      {character.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <Badge key={trait} variant="secondary" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-8">
            <Card>
              <CardHeader>
                <h3 className="text-2xl">세계 연대기</h3>
                <CardDescription>
                  창작 세계들의 시간적 배경과 주요 사건들
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <h4 className="text-lg mb-2">고대 마법 시대</h4>
                    <p className="text-muted-foreground text-sm mb-2">에테리얼 렐름</p>
                    <p className="text-sm">
                      마법이 세상을 지배하던 시대. 구름 위의 섬들이 처음 떠오르고, 
                      수호자들이 탄생한다.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/60 rounded-full"></div>
                    <h4 className="text-lg mb-2">현재 시간</h4>
                    <p className="text-muted-foreground text-sm mb-2">설화의 계곡</p>
                    <p className="text-sm">
                      현대와 과거가 공존하는 시간. 잊혀져가는 이야기들을 
                      수집하고 보존하는 일들이 일어난다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}