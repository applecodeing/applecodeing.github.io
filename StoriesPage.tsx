import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Clock, Eye, Heart, BookOpen, Snowflake, Cloud, Sun, Leaf } from 'lucide-react'

export function StoriesPage() {
  const poemsByCategory = {
    '자연': [
      {
        title: '설화',
        content: `눈처럼 내리는 말들이 있다
마음 속 깊은 곳에서 피어나
하얀 침묵으로 세상을 덮는

조용히 스며드는 이야기들
발자국 없이 걸어오는 기억들
누군가의 꿈이 되어 내려앉는

설화는 그렇게 시작된다
순수한 마음에서 태어나
당신의 마음에서 꽃피기를`,
        date: '2024.12.18',
        views: 892,
        likes: 67,
        tags: ['눈', '시작', '순수']
      },
      {
        title: '구름의 속삭임',
        content: `하늘을 떠다니는 구름들이
속삭이는 이야기를 들었다

바람에 실려 온 작은 목소리들
누군가의 꿈, 누군가의 소원

흰 캔버스 위에 그려지는
보이지 않는 글씨들

오늘도 구름은 말한다
모든 이야기는 소중하다고`,
        date: '2024.12.15',
        views: 654,
        likes: 89,
        tags: ['구름', '속삭임', '소중함']
      },
      {
        title: '연꽃의 깨달음',
        content: `진흙에서 피어나는 연꽃처럼
어둠에서 태어나는 빛이 있다

더러운 것은 더러운 채로
아름다운 것은 아름다운 채로

모든 것이 자신의 자리에서
저마다의 향기를 내뿜는다

그래서 나는 배운다
완벽하지 않아도 괜찮다는 것을`,
        date: '2024.12.12',
        views: 743,
        likes: 92,
        tags: ['연꽃', '깨달음', '수용']
      },
      {
        title: '나무의 노래',
        content: `수백 년을 한 자리에 서서
나무는 노래한다

바람과 함께, 새와 함께
계절과 함께, 사람과 함께

뿌리는 땅 깊숙이
가지는 하늘 높이

움직이지 않으면서도
가장 많은 것을 품는
나무의 노래를 듣는다`,
        date: '2024.12.06',
        views: 432,
        likes: 58,
        tags: ['나무', '자연', '포용']
      },
      {
        title: '바다의 편지',
        content: `파도가 해변에 남긴 편지를
모래 위에서 읽는다

오늘은 무엇을 전하려 하는가
끝없는 이야기의 바다여

때로는 거칠게, 때로는 부드럽게
당신은 늘 진실을 말한다

영원함 속에서
순간의 소중함을 일깨우며`,
        date: '2024.11.30',
        views: 378,
        likes: 45,
        tags: ['바다', '진실', '영원']
      },
      {
        title: '꽃잎의 여행',
        content: `벚꽃 한 잎이 떨어진다
봄바람에 실려서

어디로 가는지 모르지만
그 여행이 아름답다

가볍게, 자유롭게
중력을 거스르지 않으면서도
하늘을 나는 꽃잎

나도 그런 여행자가 되고 싶다
목적지보다 여정이 아름다운`,
        date: '2024.11.18',
        views: 521,
        likes: 72,
        tags: ['벚꽃', '여행', '자유']
      }
    ],
    '감정': [
      {
        title: '눈의 기억',
        content: `첫 눈이 내리던 날
네가 남긴 발자국을
따라 걸었다

하얀 침묵 속에서
들리는 건 내 심장소리뿐

눈은 모든 것을 덮지만
기억만은 덮을 수 없어

그래서 겨울이 올 때마다
나는 너를 그리워한다`,
        date: '2024.12.10',
        views: 567,
        likes: 78,
        tags: ['그리움', '기억', '겨울']
      },
      {
        title: '마음의 계절',
        content: `봄이 오면 설레고
여름이 오면 들뜨고
가을이 오면 그리워하고
겨울이 오면 고요해진다

계절이 바뀔 때마다
마음도 함께 변한다

하지만 변하지 않는 것이 있다
당신을 사랑하는 마음
그것만은 사계절 내내 따뜻하다`,
        date: '2024.12.08',
        views: 423,
        likes: 65,
        tags: ['사계절', '사랑', '변화']
      },
      {
        title: '혼자가 아닌 혼자',
        content: `혼자 있을 때가 좋다
아무도 나를 판단하지 않는 시간
아무것도 증명하지 않아도 되는 공간

하지만 진짜 혼자는 아니다
마음속에는 수많은 목소리들이
나와 함께 이야기하고 있으니까

혼자라는 건
오히려 모든 것과 연결되는 것`,
        date: '2024.12.05',
        views: 389,
        likes: 54,
        tags: ['고독', '연결', '내면']
      },
      {
        title: '눈물의 의미',
        content: `눈물은 슬플 때만 나는 게 아니다
기쁠 때도, 감동할 때도
때로는 이유 없이도

마음이 가득 찰 때
흘러넘치는 것들

그래서 눈물은 소중하다
진실한 감정의 증거이니까

울어도 괜찮다
그것도 삶의 일부이니까`,
        date: '2024.11.28',
        views: 445,
        likes: 61,
        tags: ['눈물', '감정', '수용']
      },
      {
        title: '웃음의 마법',
        content: `웃음은 전염된다
한 사람의 웃음이
온 세상을 밝게 한다

슬픔을 나누면 반이 되고
기쁨을 나누면 배가 된다는데

웃음은 그 이상이다
나누면 나눌수록
무한히 커지는 기적

오늘도 누군가에게
웃음을 선물하고 싶다`,
        date: '2024.11.25',
        views: 367,
        likes: 48,
        tags: ['웃음', '전염', '기적']
      },
      {
        title: '분노의 교훈',
        content: `화가 날 때가 있다
세상이 불공평하게 느껴질 때
내 마음대로 되지 않을 때

하지만 분노도 선생님이다
내가 무엇을 소중히 여기는지
무엇을 지키고 싶은지 알려준다

분노를 억누르지 말고
분노에 휩쓸리지도 말고
그 속에 숨은 진실을 찾자`,
        date: '2024.11.20',
        views: 298,
        likes: 41,
        tags: ['분노', '감정', '성장']
      }
    ],
    '시간': [
      {
        title: '오늘이라는 선물',
        content: `어제는 이미 지나갔고
내일은 아직 오지 않았다

지금 이 순간만이
내가 가진 전부

숨을 들이쉬고 내쉬는 것
심장이 뛰는 것
눈을 깜빡이는 것

모든 것이 기적이다
오늘이라는 선물 안에서`,
        date: '2024.12.03',
        views: 634,
        likes: 87,
        tags: ['현재', '순간', '감사']
      },
      {
        title: '시간의 강',
        content: `시간은 강물처럼 흐른다
돌이킬 수 없는 방향으로

때로는 격류처럼 빠르게
때로는 호수처럼 고요하게

우리는 그 강에 떠 있는
작은 나뭇잎 같다

어디로 흘러갈지 모르지만
지금 이 흐름을 즐기자`,
        date: '2024.11.28',
        views: 512,
        likes: 71,
        tags: ['시간', '흐름', '수용']
      },
      {
        title: '어린 시절의 문',
        content: `기억 속 문을 열면
어린 시절이 나온다

햇살 가득한 오후
엄마의 다정한 목소리
친구들과의 웃음소리

그때는 몰랐다
그 순간들이 얼마나 소중한지

지금은 안다
돌아갈 수 없기에
더욱 아름다운 기억들`,
        date: '2024.11.22',
        views: 456,
        likes: 63,
        tags: ['어린시절', '기억', '그리움']
      },
      {
        title: '늙음의 지혜',
        content: `나이를 먹는다는 것은
경험이 쌓인다는 것
지혜가 깊어진다는 것

주름 하나하나에
이야기가 새겨져 있고
하얀 머리카락 하나하나에
세월의 무게가 담겨있다

늙음을 두려워하지 말자
그것도 삶의 아름다운 계절이니까`,
        date: '2024.11.15',
        views: 389,
        likes: 52,
        tags: ['나이', '지혜', '수용']
      },
      {
        title: '새벽 4시',
        content: `새벽 4시의 고요함
세상이 숨을 죽이고 있는 시간

이 조용함 속에서
내 마음의 소리가 들린다

하루를 돌아보고
내일을 꿈꾸는 시간

새벽 4시는 특별하다
나만의 시간이니까`,
        date: '2024.11.08',
        views: 423,
        likes: 58,
        tags: ['새벽', '고요', '성찰']
      }
    ],
    '희망': [
      {
        title: '새벽의 약속',
        content: `가장 어두운 시간은
새벽이 오기 직전이다

절망이 깊을수록
희망의 빛이 더 밝게 보인다

새벽은 약속한다
모든 것이 새로 시작될 것이라고

그래서 나는 기다린다
나만의 새벽이 올 때까지`,
        date: '2024.11.25',
        views: 456,
        likes: 83,
        tags: ['새벽', '희망', '시작']
      },
      {
        title: '씨앗의 믿음',
        content: `땅 속 깊은 곳에서
씨앗이 꿈을 꾼다

꽃이 될 꿈
열매가 될 꿈
누군가에게 그늘이 될 꿈

아직 보이지 않는 미래를
씨앗은 믿는다

나도 그런 씨앗이고 싶다
보이지 않는 것을 믿는`,
        date: '2024.11.22',
        views: 398,
        likes: 69,
        tags: ['씨앗', '믿음', '미래']
      },
      {
        title: '무지개 다리',
        content: `비가 그치고 나면
하늘에 무지개가 뜬다

폭풍 후의 고요함
절망 후의 희망

무지개는 다리다
현재와 미래를 잇는
절망과 희망을 잇는

그 다리를 건너
새로운 세상으로 가자`,
        date: '2024.11.18',
        views: 512,
        likes: 74,
        tags: ['무지개', '희망', '연결']
      },
      {
        title: '별자리의 이야기',
        content: `어둠이 깊을수록
별이 더 밝게 빛난다

수많은 별들이 모여
하나의 이야기를 만든다

나도 작은 별이 되어
누군가의 밤하늘을 밝히고 싶다

혼자서는 작지만
함께하면 큰 빛이 되는
별자리처럼`,
        date: '2024.11.12',
        views: 445,
        likes: 67,
        tags: ['별', '함께', '빛']
      },
      {
        title: '봄이 오는 소리',
        content: `아직 추위가 매섭지만
봄이 오는 소리가 들린다

나무 가지 끝에서
새싹이 꿈틀거리고
땅 속에서 꽃이 기지개를 펴고
새들이 노래를 연습한다

기다림의 끝에는
언제나 새로운 시작이 있다

겨울이 아무리 길어도
봄은 반드시 온다`,
        date: '2024.11.05',
        views: 567,
        likes: 81,
        tags: ['봄', '기다림', '새로움']
      },
      {
        title: '꿈꾸는 자의 노래',
        content: `꿈을 꾸는 자는 망하지 않는다
현실이 아무리 힘들어도
꿈은 날개를 달아준다

높이 날아올라
멀리 바라볼 수 있게 해준다

꿈은 나침반이다
어디로 가야 할지 알려주는

꿈을 잃지 말자
그것이 우리를 살아가게 하는
가장 큰 힘이니까`,
        date: '2024.10.28',
        views: 634,
        likes: 95,
        tags: ['꿈', '희망', '삶']
      }
    ]
  }

  const featuredPoems = [
    {
      title: '설화',
      excerpt: '눈처럼 내리는 말들이 있다 / 마음 속 깊은 곳에서 피어나...',
      date: '2024.12.18',
      category: '자연',
      views: 892,
      likes: 67
    },
    {
      title: '구름의 속삭임',
      excerpt: '하늘을 떠다니는 구름들이 / 속삭이는 이야기를 들었다...',
      date: '2024.12.15',
      category: '자연',
      views: 654,
      likes: 89
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '자연': return Leaf
      case '감정': return Heart
      case '시간': return Clock
      case '희망': return Sun
      default: return BookOpen
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-primary">Stories</h1>
          <p className="text-xl text-muted-foreground mb-4">이야기 속</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            마음에서 피어나는 시들의 정원. 
            각각의 시는 작은 씨앗이 되어 당신의 마음에 새로운 감정을 심습니다.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="featured">추천</TabsTrigger>
            <TabsTrigger value="category">주제별</TabsTrigger>
            <TabsTrigger value="recent">최신</TabsTrigger>
            <TabsTrigger value="notes">창작노트</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            {/* Featured Poems Preview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredPoems.map((poem, index) => (
                <Card key={index} className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-1">
                    <div className="bg-white rounded-lg">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-primary">추천</Badge>
                          <Badge variant="outline">{poem.category}</Badge>
                        </div>
                        <h3 className="text-2xl mb-2">{poem.title}</h3>
                        <CardDescription className="text-base leading-relaxed italic">
                          {poem.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{poem.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{poem.likes}</span>
                            </div>
                            <span>{poem.date}</span>
                          </div>
                          <Button size="sm">읽기</Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* All Featured Poems */}
            <div className="space-y-8">
              <h2 className="text-2xl text-center">모든 시 보기</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {Object.values(poemsByCategory).flat().slice(0, 6).map((poem, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl">{poem.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Eye className="w-4 h-4" />
                          <span>{poem.views}</span>
                          <Heart className="w-4 h-4" />
                          <span>{poem.likes}</span>
                        </div>
                      </div>
                      <CardDescription>{poem.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm max-w-none mb-4">
                        <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground font-sans">
                          {poem.content}
                        </pre>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {poem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="category" className="space-y-8">
            {Object.entries(poemsByCategory).map(([category, poems]) => {
              const IconComponent = getCategoryIcon(category)
              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl">{category}</h2>
                    <Badge variant="outline">{poems.length}편</Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    {poems.map((poem, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl">{poem.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Eye className="w-4 h-4" />
                              <span>{poem.views}</span>
                              <Heart className="w-4 h-4" />
                              <span>{poem.likes}</span>
                            </div>
                          </div>
                          <CardDescription>{poem.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm max-w-none mb-4">
                            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground font-sans">
                              {poem.content}
                            </pre>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {poem.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {Object.values(poemsByCategory).flat()
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((poem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl">{poem.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        <span>{poem.views}</span>
                        <Heart className="w-4 h-4" />
                        <span>{poem.likes}</span>
                      </div>
                    </div>
                    <CardDescription>{poem.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none mb-4">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground font-sans line-clamp-4">
                        {poem.content}
                      </pre>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {poem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-lg">시 창작 철학</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed mb-4">
                  시는 마음의 언어입니다. 복잡한 감정과 순간들을 단순하고 아름다운 말로 담아내려 합니다. 
                  완벽한 운율보다는 진실한 감정을, 화려한 수사보다는 마음에 닿는 표현을 추구합니다.
                </p>
                <p className="leading-relaxed">
                  모든 시는 독자와의 만남에서 완성됩니다. 
                  제가 심은 감정의 씨앗이 여러분의 마음에서 어떤 꽃을 피울지 기대하며 글을 씁니다.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg">시상의 원천</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-primary" />
                      <span>자연의 변화와 계절의 흐름</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span>일상 속 작은 감정들</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-primary" />
                      <span>꿈과 상상의 세계</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg">창작 과정</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>• 감정의 순간을 포착하기</div>
                    <div>• 이미지와 은유로 표현하기</div>
                    <div>• 불필요한 장식 제거하기</div>
                    <div>• 독자의 마음에 닿는지 확인하기</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}