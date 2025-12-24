import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Separator } from './ui/separator'
import { Calendar, Lightbulb, BookOpen, Code, Gamepad2, Palette } from 'lucide-react'

export function NotesPage() {
  const creativeIdeas = [
    {
      id: 1,
      title: '시간이 멈춘 도서관',
      description: '모든 책 속의 등장인물들이 실제로 살고 있는 도서관. 독자가 책을 읽을 때만 그들의 시간이 흐른다.',
      category: '소설 아이디어',
      date: '2024.12.18',
      tags: ['판타지', '메타픽션', '시간'],
      status: '발전중'
    },
    {
      id: 2,
      title: '감정의 색깔',
      description: '각 감정이 고유한 색깔을 가지고, 사람들의 감정 상태에 따라 주변 환경의 색이 변하는 세계.',
      category: '세계관',
      date: '2024.12.15',
      tags: ['색채', '감정', 'SF'],
      status: '초기 구상'
    },
    {
      id: 3,
      title: '기억 수집가의 일기',
      description: '사라져가는 기억들을 수집하고 보존하는 사람의 이야기. 각 기억은 고유한 향기와 온도를 가진다.',
      category: '단편',
      date: '2024.12.12',
      tags: ['기억', '노스탤지어', '치유'],
      status: '완성'
    }
  ]

  const analysisNotes = [
    {
      title: '독자 몰입도 분석',
      description: '2인칭 서술과 현재진행형을 사용한 글의 몰입도 차이에 대한 연구',
      category: '글쓰기 기법',
      insights: [
        '2인칭 서술은 독자를 직접적으로 이야기 속으로 끌어들임',
        '현재진행형은 즉시성과 생생함을 증대시킴',
        '독자의 상상력을 자극하는 여백의 중요성'
      ],
      date: '2024.12.16'
    },
    {
      title: '색채 심리학과 서사',
      description: '색깔이 독자의 감정과 분위기 인식에 미치는 영향 연구',
      category: '시각적 서사',
      insights: [
        '파란색: 평온함과 우울함의 이중성',
        '흰색: 순수함과 공허함의 대비',
        '색채의 점진적 변화로 감정 전환 유도'
      ],
      date: '2024.12.14'
    }
  ]

  const gameDesignNotes = [
    {
      title: '이야기 중심 어드벤처 게임',
      description: '"설화의 계곡"을 배경으로 한 내러티브 중심 게임 구상',
      mechanics: [
        '선택지를 통한 스토리 분기',
        '환경과의 상호작용으로 숨겨진 이야기 발견',
        '플레이어의 감정 상태가 게임 세계에 영향'
      ],
      status: '프로토타입',
      date: '2024.12.10'
    },
    {
      title: '블록 코딩 교육 게임',
      description: '창작과 프로그래밍을 결합한 교육용 게임 아이디어',
      mechanics: [
        '이야기 요소들을 블록으로 조합',
        '코딩 로직으로 서사 구조 이해',
        '완성된 이야기를 다른 플레이어와 공유'
      ],
      status: '기획서 작성',
      date: '2024.12.08'
    }
  ]

  const reflections = [
    {
      date: '2024.12.18',
      content: '오늘은 첫 눈이 내렸다. 창밖을 바라보며 "구름 위의 편지" 마지막 장면을 다시 생각해보았다. 눈송이 하나하나가 누군가의 작은 메시지 같다는 생각이 든다. 자연에서 받는 영감은 정말 소중하다.'
    },
    {
      date: '2024.12.15',
      content: '독자 한 분이 내 글을 읽고 "마음이 따뜻해졌다"는 메시지를 보내주셨다. 이런 순간을 위해 글을 쓰는구나 싶었다. 완벽한 문장보다 진실한 마음이 더 중요하다는 걸 다시 한번 깨닫는다.'
    },
    {
      date: '2024.12.12',
      content: '창작의 고민: 상상력과 현실성의 균형. 너무 현실적이면 재미가 없고, 너무 비현실적이면 공감하기 어렵다. 독자가 "그럴 수도 있겠다"고 생각할 수 있는 절묘한 지점을 찾는 것이 관건이다.'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-primary">Notes</h1>
          <p className="text-xl text-muted-foreground mb-4">사유의 기록</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            창작 아이디어, 몰입 체험 기록, 분석 노트. 
            생각의 파편들이 모여 새로운 이야기가 됩니다.
          </p>
        </div>

        <Tabs defaultValue="ideas" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="ideas">아이디어</TabsTrigger>
            <TabsTrigger value="analysis">분석</TabsTrigger>
            <TabsTrigger value="games">게임기획</TabsTrigger>
            <TabsTrigger value="reflections">성찰</TabsTrigger>
          </TabsList>

          <TabsContent value="ideas" className="space-y-6">
            <div className="space-y-6">
              {creativeIdeas.map((idea) => (
                <Card key={idea.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl mb-2">{idea.title}</h3>
                        <CardDescription className="text-base leading-relaxed mb-3">
                          {idea.description}
                        </CardDescription>
                      </div>
                      <Badge variant={idea.status === '완성' ? 'default' : 'secondary'}>
                        {idea.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Lightbulb className="w-4 h-4" />
                          <span>{idea.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{idea.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {idea.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="space-y-6">
              {analysisNotes.map((note, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl">{note.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        <span>{note.category}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {note.description}
                    </CardDescription>
                    <div className="text-sm text-muted-foreground mb-4">
                      {note.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm mb-3 text-muted-foreground">주요 통찰</h4>
                    <div className="space-y-2">
                      {note.insights.map((insight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="games" className="space-y-6">
            <div className="space-y-6">
              {gameDesignNotes.map((game, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl">{game.title}</h3>
                      <Badge variant={game.status === '프로토타입' ? 'default' : 'secondary'}>
                        {game.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {game.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gamepad2 className="w-4 h-4" />
                      <span>{game.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm mb-3 text-muted-foreground">핵심 메커닉</h4>
                    <div className="space-y-2">
                      {game.mechanics.map((mechanic, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">{mechanic}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="text-lg">블록 코딩 철학</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  블록 코딩은 복잡한 논리를 시각적으로 표현하는 강력한 도구입니다. 
                  창작에서도 마찬가지로, 이야기의 구성 요소들을 블록처럼 조합하여 
                  새로운 서사를 만들어낼 수 있습니다. 
                  코딩과 창작의 공통점은 '논리적 사고'와 '창의적 조합'에 있습니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reflections" className="space-y-6">
            <div className="space-y-6">
              {reflections.map((reflection, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{reflection.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-sm italic">
                      "{reflection.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="my-8" />

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="text-lg">창작자의 마음가짐</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  창작은 완벽함을 추구하는 작업이 아니라 진실함을 찾아가는 여정입니다. 
                  매일의 작은 관찰과 경험이 쌓여 이야기가 되고, 
                  독자와의 만남에서 그 이야기는 완성됩니다. 
                  실패를 두려워하지 않고, 계속해서 새로운 시도를 하며, 
                  순수한 마음으로 이야기를 전하고자 합니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}