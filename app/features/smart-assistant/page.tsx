import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Bot,
  Calendar,
  Bell,
  Lightbulb,
  Sparkles,
  MessageSquare,
  Brain,
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

export default function SmartAssistantPage() {
  const assistantFeatures = [
    {
      icon: Calendar,
      title: "التنظيم الذكي",
      description: "جدولة تلقائية للمهام والمواعيد",
      capabilities: ["تنظيم الجدول اليومي", "اقتراح أوقات الدراسة المثلى", "توزيع المهام بذكاء", "تنبيهات استباقية"],
    },
    {
      icon: Lightbulb,
      title: "الاقتراحات الذكية",
      description: "توصيات مخصصة بناءً على نشاطك",
      capabilities: ["محتوى تعليمي موصى به", "مسارات تعلم مقترحة", "فرص تطوير المهارات", "موارد إضافية مفيدة"],
    },
    {
      icon: MessageSquare,
      title: "المساعد الصوتي",
      description: "تفاعل طبيعي بالصوت والنص",
      capabilities: ["أوامر صوتية", "إجابات فورية", "دعم متعدد اللغات", "محادثة طبيعية"],
    },
    {
      icon: Brain,
      title: "التحليل الذكي",
      description: "فهم عميق لنمط تعلمك",
      capabilities: ["تحليل نقاط القوة", "تحديد فرص التحسين", "توقع الأداء", "تخصيص التجربة"],
    },
    {
      icon: Bell,
      title: "التنبيهات الذكية",
      description: "إشعارات في الوقت المناسب",
      capabilities: ["تذكير بالمواعيد", "تنبيهات المهام", "اقتراحات الراحة", "تحديثات مهمة"],
    },
    {
      icon: Target,
      title: "تتبع الأهداف",
      description: "مساعدة في تحقيق أهدافك",
      capabilities: ["خطط عمل مخصصة", "تتبع التقدم", "تحفيز مستمر", "احتفال بالإنجازات"],
    },
  ]

  const useCases = [
    {
      title: "تنظيم اليوم الدراسي",
      description: "يساعدك على بناء جدول دراسي متوازن ومنتج",
      icon: Calendar,
    },
    {
      title: "إدارة الواجبات",
      description: "يذكرك بالواجبات ويقترح أوقات إنجازها",
      icon: CheckCircle2,
    },
    {
      title: "تحسين الأداء",
      description: "يحلل أداءك ويقدم نصائح للتحسين",
      icon: TrendingUp,
    },
    {
      title: "اكتشاف المحتوى",
      description: "يقترح موارد تعليمية مناسبة لاهتماماتك",
      icon: Lightbulb,
    },
  ]

  const stats = [
    { value: "24/7", label: "متاح دائماً" },
    { value: "عربي", label: "يتحدث العربية" },
    { value: "ذكي", label: "يتعلم منك" },
    { value: "مجاني", label: "للجميع" },
  ]

  const benefits = [
    "توفير الوقت والجهد",
    "تحسين الإنتاجية",
    "تخصيص كامل للتجربة",
    "دعم مستمر على مدار الساعة",
    "تحليلات عميقة ومفيدة",
    "تكامل مع جميع الأدوات",
    "تعلم مستمر من سلوكك",
    "خصوصية وأمان محفوظان",
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
              <Bot className="ml-2 h-4 w-4" />
              المساعد الذكي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              مساعدك الشخصي <span className="text-primary">لرحلة تعليمية منظمة</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              مساعد ذكي مدعوم بالذكاء الاصطناعي ينظم جدولك، يذكرك بمهامك، يقترح محتوى مناسباً، ويساعدك على تحقيق أهدافك
              التعليمية بكفاءة وذكاء
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                فعّل المساعد الآن
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                جرب المحادثة
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
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

      {/* Assistant Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">قدرات المساعد الذكي</h2>
            <p className="text-lg text-muted-foreground">كيف يساعدك المساعد الذكي في رحلتك التعليمية</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assistantFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              حالات الاستخدام
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">كيف يساعدك في حياتك اليومية؟</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">فوائد استخدام المساعد الذكي</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary hover:shadow-md animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لمقابلة مساعدك الذكي؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                ابدأ اليوم واحصل على مساعد شخصي ذكي يرافقك في رحلتك التعليمية
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Zap className="ml-2 h-5 w-5" />
                فعّل المساعد مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
