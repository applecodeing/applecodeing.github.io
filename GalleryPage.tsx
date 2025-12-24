import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Calendar, Palette, Eye, Heart, Download } from 'lucide-react'

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const artworks = [
    {
      id: 1,
      title: '겨울 숲의 달빛',
      description: '달빛이 눈 덮인 숲을 은빛으로 물들이는 고요한 순간',
      image: 'https://images.unsplash.com/photo-1638985787285-46f05ff063f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBtb29ubGlnaHR8ZW58MXx8fHwxNzU1ODM4OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      medium: '디지털 페인팅',
      date: '2024.12.15',
      tags: ['자연', '겨울', '달빛'],
      views: 856,
      likes: 92,
      featured: true
    },
    {
      id: 2,
      title: '에테리얼 광선',
      description: '구름 사이로 스며드는 신비로운 빛의 움직임',
      image: 'https://images.unsplash.com/photo-1676404454995-c83c3c453e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmVhbCUyMGxpZ2h0JTIwcmF5cyUyMGNsb3Vkc3xlbnwxfHx8fDE3NTU4Mzg5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      medium: '포토 콜라주',
      date: '2024.12.12',
      tags: ['추상', '빛', '구름'],
      views: 672,
      likes: 78,
      featured: false
    },
    {
      id: 3,
      title: '순백의 고요',
      description: '미니멀한 설경이 전하는 평온함과 순수함',
      image: 'https://images.unsplash.com/photo-1611005971075-f9ef682ccd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc25vdyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTU4Mzg5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      medium: '사진',
      date: '2024.12.10',
      tags: ['미니멀', '설경', '순수'],
      views: 543,
      likes: 65,
      featured: false
    },
    {
      id: 4,
      title: '연못의 성찰',
      description: '연꽃과 물의 반영이 만드는 명상적 공간',
      image: 'https://images.unsplash.com/photo-1752835488686-3c6e566206b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3R1cyUyMHBvbmQlMjByZWZsZWN0aW9ufGVufDF8fHx8MTc1NTgzODk5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      medium: '수채화',
      date: '2024.12.08',
      tags: ['연꽃', '물', '반영'],
      views: 734,
      likes: 89,
      featured: false
    }
  ]

  const collections = [
    {
      title: '계절의 기억',
      description: '사계절의 변화와 감정을 담은 시리즈',
      imageCount: 12,
      coverImage: 'https://images.unsplash.com/photo-1638985787285-46f05ff063f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmb3Jlc3QlMjBtb29ubGlnaHR8ZW58MXx8fHwxNzU1ODM4OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: '빛의 언어',
      description: '다양한 조명과 그림자의 표현 실험',
      imageCount: 8,
      coverImage: 'https://images.unsplash.com/photo-1676404454995-c83c3c453e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmVhbCUyMGxpZ2h0JTIwcmF5cyUyMGNsb3Vkc3xlbnwxfHx8fDE3NTU4Mzg5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ]

  const sketches = [
    {
      title: '구름 연구',
      description: '다양한 구름 형태와 움직임에 대한 스케치',
      date: '2024.12.18'
    },
    {
      title: '인물 표정 연구',
      description: '감정 표현을 위한 얼굴 구조와 표정 변화 분석',
      date: '2024.12.15'
    },
    {
      title: '자연 텍스처',
      description: '나무껍질, 돌, 물의 질감 표현 연습',
      date: '2024.12.12'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 text-primary">Gallery</h1>
          <p className="text-xl text-muted-foreground mb-4">빛과 그림자</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            그림, 일러스트, 시각적 상상력의 기록. 
            빛과 그림자가 만드는 아름다움을 탐구합니다.
          </p>
        </div>

        <Tabs defaultValue="artworks" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="artworks">작품</TabsTrigger>
            <TabsTrigger value="collections">컬렉션</TabsTrigger>
            <TabsTrigger value="sketches">스케치</TabsTrigger>
          </TabsList>

          <TabsContent value="artworks" className="space-y-8">
            {/* Featured Artwork */}
            {artworks.filter(art => art.featured).map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden border-primary/20 shadow-lg">
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-1">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="aspect-[21/9] relative">
                      <ImageWithFallback
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage(artwork)}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary">추천작</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <h3 className="text-2xl mb-2">{artwork.title}</h3>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {artwork.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Palette className="w-4 h-4" />
                            <span>{artwork.medium}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{artwork.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{artwork.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{artwork.likes}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {artwork.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </div>
                </div>
              </Card>
            ))}

            {/* Other Artworks */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.filter(art => !art.featured).map((artwork) => (
                <Card key={artwork.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-square relative">
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(artwork)}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-lg mb-1">{artwork.title}</h3>
                    <CardDescription className="text-sm line-clamp-2">
                      {artwork.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{artwork.medium}</span>
                      <span>{artwork.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{artwork.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{artwork.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {artwork.tags.map((tag) => (
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

          <TabsContent value="collections" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] relative">
                    <ImageWithFallback
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {collection.imageCount}개 작품
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl mb-2">{collection.title}</h3>
                    <CardDescription className="leading-relaxed">
                      {collection.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      컬렉션 보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sketches" className="space-y-6">
            <div className="space-y-4">
              {sketches.map((sketch, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg">{sketch.title}</h3>
                      <span className="text-sm text-muted-foreground">{sketch.date}</span>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {sketch.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="text-lg">창작 과정</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  모든 작품은 수많은 스케치와 실험에서 시작됩니다. 
                  완성된 작품 뒤에는 무수한 시행착오와 탐구의 과정이 있으며, 
                  이러한 과정 자체도 소중한 창작의 일부입니다. 
                  실패를 두려워하지 않고 끊임없이 시도하며 
                  새로운 표현 방법을 찾아갑니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedImage.title}</DialogTitle>
                  <DialogDescription>
                    {selectedImage.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Palette className="w-4 h-4" />
                      <span>{selectedImage.medium}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedImage.date}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    다운로드
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}