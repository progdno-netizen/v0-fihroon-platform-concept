import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Sparkles, Brain, Heart, Moon, Sun, Music, Wind, Smile } from "lucide-react"

export default function MentalHealthPage() {
  const tools = [
    {
      icon: Brain,
      title: "تمارين التركيز",
      description: "تقنيات لتحسين التركيز والانتباه",
    },
    {
      icon: Wind,
      title: "تمارين التنفس",
      description: "تقنيات تنفس للاسترخاء",
    },
    {
      icon: Moon,
      title: "تحسين النوم",
      description: "نصائح لنوم صحي ومريح",
    },
    {
      icon: Music,
      title: "موسيقى هادئة",
      description: "مكتبة موسيقية للاسترخاء",
    },
  ]

  const features = [
    "تمارين يومية للصحة النفسية",
    "تتبع المزاج والمشاعر",
    "نصائح من خبراء نفسيين",
    "مجتمع داعم وسري",
    "تذكيرات للراحة",
    "جلسات تأمل موجهة",
    "تقنيات إدارة الضغط",
    "موارد تعليمية",
  ]

  const stats = [
    { value: "50+", label: "تمرين يومي" },
    { value: "24/7", label: "دعم متواصل" },
    { value: "سري", label: "خصوصية تامة" },
    { value: "مجاني", label: "للجميع" },
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge variant="secondary" className="mb-4">
              <Heart className="ml-2 h-4 w-4" />
              الصحة الذهنية
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              اهتم <span className="text-primary">بصحتك النفسية</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              أدوات وتمارين لتحسين تركيزك، تقليل الضغط، وتحقيق التوازن النفسي. اعتنِ بصحتك الذهنية لتحقيق أفضل أداء دراسي
            </p>
            <Button size="lg" className="transition-all hover:scale-105">
              <Smile className="ml-2 h-5 w-5" />
              ابدأ رحلة الصحة النفسية
            </Button>
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

      {/* Tools */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">أدوات الصحة النفسية</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <tool.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{tool.title}</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">ما نقدمه لك</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="transition-all hover:shadow-md animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium">{feature}</span>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">ابدأ الاعتناء بنفسك اليوم</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                صحتك النفسية مهمة. ابدأ رحلتك نحو توازن أفضل
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sun className="ml-2 h-5 w-5" />
                ابدأ الآن مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
