import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveCard } from "@/components/interactive-card"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "فِهرون تطلق ميزة المساعد الذكي المتقدم",
      excerpt: "تقنية ذكاء اصطناعي جديدة تساعد الطلاب على التعلم بشكل أكثر فعالية",
      image: "/ai-assistant-technology.jpg",
      date: "2026-01-08",
      category: "إطلاق جديد",
      featured: true,
    },
    {
      id: 2,
      title: "شراكة استراتيجية مع جامعة الملك سعود",
      excerpt: "توفير محتوى تعليمي أكاديمي حصري لطلاب المنصة",
      image: "/university-partnership-handshake.jpg",
      date: "2026-01-06",
      category: "شراكات",
      featured: false,
    },
    {
      id: 3,
      title: "وصول عدد المستخدمين إلى 100 ألف متعلم",
      excerpt: "إنجاز جديد يعكس الثقة المتزايدة في المنصة التعليمية",
      image: "/celebration-achievement-milestone.jpg",
      date: "2026-01-04",
      category: "إنجاز",
      featured: false,
    },
    {
      id: 4,
      title: "إضافة 50 دورة تدريبية جديدة",
      excerpt: "دورات متخصصة في البرمجة، التصميم، والتسويق الرقمي",
      image: "/online-courses-learning.jpg",
      date: "2026-01-02",
      category: "محتوى جديد",
      featured: false,
    },
    {
      id: 5,
      title: "المتحف الرقمي يضيف 500 عمل فني جديد",
      excerpt: "توسعة كبيرة في مكتبة الأعمال الفنية والتراثية",
      image: "/digital-museum-art-gallery.jpg",
      date: "2025-12-30",
      category: "تحديث",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <ScrollReveal animation="slide-down">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">آخر الأخبار</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              أخبار <span className="text-primary">فِهرون</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              تابع آخر التحديثات والإطلاقات والشراكات الجديدة للمنصة
            </p>
          </div>
        </ScrollReveal>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Featured News */}
          {news
            .filter((item) => item.featured)
            .map((item, idx) => (
              <ScrollReveal key={item.id} animation="scale" delay={idx * 100}>
                <InteractiveCard>
                  <Link href={`/news/${item.id}`}>
                    <div className="bg-card border-2 border-primary/30 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative h-80 lg:h-auto">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-6 right-6 bg-primary text-lg px-4 py-2">{item.category}</Badge>
                        </div>
                        <div className="p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar className="h-5 w-5" />
                            <span className="text-lg">{new Date(item.date).toLocaleDateString("ar-SA")}</span>
                          </div>
                          <h2 className="text-4xl font-bold mb-4 hover:text-primary transition-colors">{item.title}</h2>
                          <p className="text-xl text-muted-foreground leading-relaxed">{item.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </InteractiveCard>
              </ScrollReveal>
            ))}

          {/* Regular News Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {news
              .filter((item) => !item.featured)
              .map((item, idx) => (
                <ScrollReveal key={item.id} animation="slide-up" delay={idx * 100}>
                  <InteractiveCard>
                    <Link href={`/news/${item.id}`}>
                      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                        <div className="relative h-56">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(item.date).toLocaleDateString("ar-SA")}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </InteractiveCard>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
