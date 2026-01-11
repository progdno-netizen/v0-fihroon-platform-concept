import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveCard } from "@/components/interactive-card"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "مستقبل التعليم الرقمي في المملكة",
      excerpt: "استكشف كيف تشكل التقنية والذكاء الاصطناعي مستقبل التعليم في المملكة العربية السعودية",
      image: "/digital-education-classroom.jpg",
      author: "د. سارة أحمد",
      date: "2026-01-05",
      category: "تعليم",
      readTime: "5 دقائق",
    },
    {
      id: 2,
      title: "دليلك الشامل للذكاء الاصطناعي",
      excerpt: "تعرف على أساسيات الذكاء الاصطناعي وكيف يمكنك الاستفادة منه في رحلتك التعليمية",
      image: "/artificial-intelligence-brain.jpg",
      author: "م. خالد العتيبي",
      date: "2026-01-03",
      category: "تقنية",
      readTime: "8 دقائق",
    },
    {
      id: 3,
      title: "المهارات الأكثر طلباً في 2026",
      excerpt: "اكتشف المهارات التي يحتاجها سوق العمل السعودي وكيف تطورها",
      image: "/professional-skills-development.jpg",
      author: "أ. منى الغامدي",
      date: "2026-01-01",
      category: "مهارات",
      readTime: "6 دقائق",
    },
    {
      id: 4,
      title: "البحث العلمي: من الفكرة إلى النشر",
      excerpt: "خطوات عملية لتحويل فكرتك البحثية إلى بحث علمي منشور",
      image: "/scientific-research-laboratory.jpg",
      author: "د. عبدالله محمد",
      date: "2025-12-28",
      category: "بحث",
      readTime: "10 دقائق",
    },
    {
      id: 5,
      title: "التعلم الذاتي: استراتيجيات فعالة",
      excerpt: "أفضل الاستراتيجيات والأدوات للتعلم الذاتي المنظم والفعال",
      image: "/self-learning-study-books.jpg",
      author: "أ. نورة السعيد",
      date: "2025-12-25",
      category: "تعليم",
      readTime: "7 دقائق",
    },
    {
      id: 6,
      title: "الصحة الذهنية للطلاب",
      excerpt: "نصائح وإرشادات للحفاظ على صحتك الذهنية أثناء الدراسة",
      image: "/mental-health-wellbeing-meditation.jpg",
      author: "د. ريم الشمري",
      date: "2025-12-22",
      category: "صحة",
      readTime: "5 دقائق",
    },
  ]

  const categories = ["الكل", "تعليم", "تقنية", "مهارات", "بحث", "صحة"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <ScrollReveal animation="slide-down">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="text-primary">المدونة</span> التعليمية
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              مقالات وموارد تعليمية لمساعدتك في رحلتك التعليمية والمهنية
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute right-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input type="search" placeholder="ابحث عن مقالات..." className="h-14 pr-12 text-lg bg-card border-2" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 pb-8">
        <ScrollReveal animation="slide-up" delay={100}>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {categories.map((cat, idx) => (
              <Button key={idx} variant={cat === "الكل" ? "default" : "outline"} size="sm" className="rounded-full">
                {cat}
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.id} animation="scale" delay={idx * 100}>
              <InteractiveCard>
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">{post.category}</Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            تحميل المزيد
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
