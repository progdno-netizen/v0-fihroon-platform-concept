import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Palette,
  Camera,
  Music,
  Pen,
  Video,
  Code,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Users,
} from "lucide-react"

export default function SkillsPage() {
  const categories = [
    {
      icon: Palette,
      title: "الرسم والتصميم",
      skills: ["الرسم الرقمي", "تصميم الجرافيك", "تصميم UI/UX", "الخط العربي"],
      courses: 45,
      students: 12000,
    },
    {
      icon: Pen,
      title: "الكتابة الإبداعية",
      skills: ["كتابة القصص", "الشعر", "كتابة المحتوى", "التدوين"],
      courses: 32,
      students: 8500,
    },
    {
      icon: Code,
      title: "البرمجة",
      skills: ["تطوير الويب", "تطوير التطبيقات", "البرمجة بالبايثون", "تصميم الألعاب"],
      courses: 68,
      students: 25000,
    },
    {
      icon: Camera,
      title: "التصوير",
      skills: ["التصوير الفوتوغرافي", "تحرير الصور", "تصوير الفيديو", "تصوير المنتجات"],
      courses: 38,
      students: 9800,
    },
    {
      icon: Video,
      title: "المونتاج والإنتاج",
      skills: ["مونتاج الفيديو", "الموشن جرافيك", "الإنتاج السمعي", "صناعة المحتوى"],
      courses: 42,
      students: 11200,
    },
    {
      icon: Music,
      title: "الموسيقى",
      skills: ["العزف على الآلات", "الإنتاج الموسيقي", "النظريات الموسيقية", "الغناء"],
      courses: 28,
      students: 7600,
    },
  ]

  const learningPath = [
    {
      step: "01",
      title: "اختر مهارتك",
      description: "ابدأ بتحديد المهارة التي تريد تطويرها",
    },
    {
      step: "02",
      title: "تعلم من الخبراء",
      description: "دورات عالية الجودة من محترفين في المجال",
    },
    {
      step: "03",
      title: "مارس وطبق",
      description: "مشاريع عملية لتطبيق ما تعلمته",
    },
    {
      step: "04",
      title: "احصل على الشهادة",
      description: "شهادات معتمدة تضيفها لبورتفوليو",
    },
  ]

  const features = [
    {
      icon: Trophy,
      title: "معلمون محترفون",
      description: "تعلم من خبراء في كل مجال",
    },
    {
      icon: Sparkles,
      title: "محتوى عالي الجودة",
      description: "دروس وشروح تفصيلية ومفيدة",
    },
    {
      icon: Users,
      title: "مجتمع نشط",
      description: "تواصل مع متعلمين من حول العالم",
    },
    {
      icon: CheckCircle2,
      title: "تعلم بالممارسة",
      description: "مشاريع عملية وتطبيقية",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/image.png" alt="Fihroon" className="h-10 w-auto" />
          </Link>
          <Button asChild>
            <Link href="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="secondary" className="mb-4">
              <Palette className="ml-2 h-4 w-4" />
              المهارات والهوايات
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              طور <span className="text-primary">مهاراتك الإبداعية</span> اليوم
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              من الرسم والتصميم إلى البرمجة والتصوير، اكتشف شغفك وطور مهاراتك مع دورات تفاعلية ومشاريع عملية من خبراء في
              كل مجال
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                استكشف الدورات
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                شاهد الأعمال المميزة
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "250+", label: "دورة تدريبية" },
              { value: "70,000+", label: "متعلم نشط" },
              { value: "50+", label: "مجال ومهارة" },
              { value: "98%", label: "نسبة الرضا" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">المجالات المتاحة</h2>
            <p className="text-lg text-muted-foreground">اختر مجالك المفضل وابدأ رحلة التعلم</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                    <category.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {category.courses} دورة • {category.students.toLocaleString()} متعلم
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary bg-transparent" variant="outline">
                    استكشف الدورات
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              مسار التعلم
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">كيف تبدأ رحلتك؟</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {learningPath.map((item, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لتطوير مهاراتك؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                ابدأ رحلتك في تعلم مهارة جديدة اليوم وحول شغفك إلى احتراف
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                ابدأ التعلم الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
