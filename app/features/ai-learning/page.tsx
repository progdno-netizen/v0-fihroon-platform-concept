import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Brain,
  Code,
  BarChart3,
  Bot,
  Cpu,
  Sparkles,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Database,
  Network,
} from "lucide-react"

export default function AILearningPage() {
  const courses = [
    {
      icon: Code,
      title: "برمجة الذكاء الاصطناعي",
      level: "من المبتدئ للمحترف",
      duration: "12 أسبوع",
      projects: 15,
      description: "تعلم Python وTensorFlow وPyTorch",
    },
    {
      icon: BarChart3,
      title: "تحليل البيانات",
      level: "متوسط",
      duration: "10 أسابيع",
      projects: 12,
      description: "إتقان Pandas وNumPy والتصور البياني",
    },
    {
      icon: Bot,
      title: "التعلم الآلي",
      level: "متقدم",
      duration: "14 أسبوع",
      projects: 18,
      description: "خوارزميات متقدمة ونماذج ذكية",
    },
    {
      icon: Network,
      title: "الشبكات العصبية",
      level: "متقدم",
      duration: "16 أسبوع",
      projects: 20,
      description: "Deep Learning وCNN وRNN",
    },
    {
      icon: Database,
      title: "معالجة اللغة الطبيعية",
      level: "متقدم",
      duration: "12 أسبوع",
      projects: 14,
      description: "NLP وTransformers ونماذج اللغة",
    },
    {
      icon: Cpu,
      title: "رؤية الحاسوب",
      level: "متقدم",
      duration: "14 أسبوع",
      projects: 16,
      description: "معالجة الصور والتعرف على الأنماط",
    },
  ]

  const skills = [
    "Python Programming",
    "TensorFlow & PyTorch",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
  ]

  const features = [
    {
      icon: Sparkles,
      title: "مشاريع عملية",
      description: "بناء تطبيقات ذكاء اصطناعي حقيقية",
    },
    {
      icon: Zap,
      title: "تعلم تفاعلي",
      description: "كود تفاعلي واختبارات فورية",
    },
    {
      icon: Rocket,
      title: "مسار وظيفي",
      description: "إعداد كامل لسوق العمل",
    },
    {
      icon: CheckCircle2,
      title: "شهادات معتمدة",
      description: "شهادات احترافية لكل دورة",
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
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="secondary" className="mb-4">
              <Brain className="ml-2 h-4 w-4" />
              الذكاء الاصطناعي والتعلم الآلي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              احترف <span className="text-primary">الذكاء الاصطناعي</span> من الصفر
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              تعلم البرمجة، تحليل البيانات، التعلم الآلي، والشبكات العصبية مع مشاريع عملية ومسار وظيفي واضح في أحد أهم
              مجالات المستقبل
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Rocket className="ml-2 h-5 w-5" />
                ابدأ رحلتك في الذكاء الاصطناعي
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                شاهد عرض توضيحي
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
              { value: "50+", label: "دورة تدريبية" },
              { value: "200+", label: "ساعة محتوى" },
              { value: "100+", label: "مشروع عملي" },
              { value: "95%", label: "نسبة رضا المتعلمين" },
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

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">المسارات التعليمية</h2>
            <p className="text-lg text-muted-foreground">اختر المسار المناسب لك وابدأ التعلم</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                    <course.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">المستوى</span>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">المدة</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">المشاريع</span>
                      <span className="font-semibold">{course.projects} مشروع</span>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary bg-transparent" variant="outline">
                    ابدأ الدورة
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              المهارات التي ستكتسبها
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">أتقن أحدث التقنيات</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-6 py-3 text-base transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لدخول عالم الذكاء الاصطناعي؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                انضم لآلاف المتعلمين واحترف أحد أهم مجالات المستقبل
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Brain className="ml-2 h-5 w-5" />
                ابدأ التعلم مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
