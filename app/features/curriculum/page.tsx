import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  Calculator,
  Brain,
  FileText,
  Award,
  CheckCircle2,
  ArrowRight,
  Book,
  Lightbulb,
} from "lucide-react"

export default function CurriculumPage() {
  const subjects = [
    {
      icon: Calculator,
      name: "الرياضيات",
      grades: "جميع المراحل",
      topics: 450,
    },
    {
      icon: Brain,
      name: "العلوم",
      grades: "ابتدائي - ثانوي",
      topics: 380,
    },
    {
      icon: Book,
      name: "اللغة العربية",
      grades: "جميع المراحل",
      topics: 520,
    },
    {
      icon: BookOpen,
      name: "اللغة الإنجليزية",
      grades: "جميع المراحل",
      topics: 410,
    },
    {
      icon: Lightbulb,
      name: "الفيزياء",
      grades: "ثانوي",
      topics: 280,
    },
    {
      icon: FileText,
      name: "الكيمياء",
      grades: "ثانوي",
      topics: 260,
    },
  ]

  const testPrep = [
    {
      title: "القدرات العامة",
      description: "تدريبات شاملة للقسم الكمي واللفظي",
      tests: 150,
      questions: 4500,
    },
    {
      title: "التحصيلي",
      description: "كل مواد التحصيلي مع اختبارات تجريبية",
      tests: 120,
      questions: 3800,
    },
    {
      title: "القدرة المعرفية",
      description: "تدريب متخصص للاختبار المعرفي",
      tests: 80,
      questions: 2400,
    },
  ]

  const features = [
    {
      icon: CheckCircle2,
      title: "منهج سعودي كامل",
      description: "جميع المواد من الابتدائي حتى الثانوي",
    },
    {
      icon: Award,
      title: "اختبارات تفاعلية",
      description: "آلاف الأسئلة مع تصحيح فوري",
    },
    {
      icon: Brain,
      title: "شرح مبسط",
      description: "فيديوهات وشروح لكل درس",
    },
    {
      icon: GraduationCap,
      title: "تتبع التقدم",
      description: "راقب مستواك وحدد نقاط التحسين",
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
              <BookOpen className="ml-2 h-4 w-4" />
              المناهج التعليمية
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              المنهج السعودي <span className="text-primary">كاملاً بين يديك</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              جميع مواد المنهج السعودي من الصف الأول الابتدائي حتى الثالث الثانوي، مع شروح تفاعلية واختبارات ذكية لضمان
              التفوق الدراسي
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                ابدأ التعلم الآن
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                جرب اختباراً تجريبياً
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
              { value: "12", label: "مرحلة دراسية" },
              { value: "30+", label: "مادة تعليمية" },
              { value: "5000+", label: "درس تفاعلي" },
              { value: "15000+", label: "سؤال وتمرين" },
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

      {/* Subjects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">المواد الدراسية</h2>
            <p className="text-lg text-muted-foreground">اختر المادة وابدأ رحلتك التعليمية</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                    <subject.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{subject.name}</CardTitle>
                  <CardDescription>{subject.grades}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {subject.topics} موضوع تعليمي
                  </div>
                  <Button className="w-full group-hover:bg-primary bg-transparent" variant="outline">
                    ابدأ الآن
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Prep Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              الاستعداد للاختبارات
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">القدرات والتحصيلي</h2>
            <p className="text-lg text-muted-foreground">استعد لاختباراتك بثقة مع آلاف الأسئلة التدريبية</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testPrep.map((test, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{test.title}</CardTitle>
                  <CardDescription className="text-base">{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                    <span className="text-sm text-muted-foreground">اختبارات تجريبية</span>
                    <span className="font-bold text-primary">{test.tests}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                    <span className="text-sm text-muted-foreground">أسئلة تدريبية</span>
                    <span className="font-bold text-primary">{test.questions}+</span>
                  </div>
                  <Button className="w-full transition-all hover:scale-105">ابدأ التدريب</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات المنصة التعليمية</h2>
          </div>

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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لتحقيق التفوق الدراسي؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                ابدأ رحلتك التعليمية اليوم واحصل على دعم كامل في جميع المواد الدراسية
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <GraduationCap className="ml-2 h-5 w-5" />
                ابدأ الآن مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
