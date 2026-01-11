import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, FileText, Trophy, Star, Download, Share2, Eye, Sparkles } from "lucide-react"

export default function PortfolioPage() {
  const features = [
    {
      icon: Award,
      title: "الشهادات",
      description: "اجمع جميع شهاداتك في مكان واحد",
    },
    {
      icon: Trophy,
      title: "الإنجازات",
      description: "أبرز مهاراتك وإنجازاتك",
    },
    {
      icon: FileText,
      title: "المشاريع",
      description: "اعرض مشاريعك بطريقة احترافية",
    },
    {
      icon: Star,
      title: "التقييمات",
      description: "احصل على تقييمات من معلمين وزملاء",
    },
  ]

  const sections = [
    "المعلومات الشخصية",
    "الشهادات الأكاديمية",
    "الدورات التدريبية",
    "المهارات والكفاءات",
    "المشاريع والأعمال",
    "الخبرات التطوعية",
    "التكريمات والجوائز",
    "التوصيات",
  ]

  const stats = [
    { value: "100K+", label: "بورتفوليو نشط" },
    { value: "500K+", label: "شهادة مضافة" },
    { value: "2M+", label: "مشاهدة شهرياً" },
    { value: "مجاني", label: "بالكامل" },
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
              <Award className="ml-2 h-4 w-4" />
              البورتفوليو الذكي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              اجمع إنجازاتك <span className="text-primary">في ملف احترافي</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              بورتفوليو رقمي ذكي لجمع شهاداتك، إنجازاتك، ومشاريعك في ملف واحد احترافي. شاركه مع الجامعات وأصحاب العمل
              بنقرة واحدة
            </p>
            <Button size="lg" className="transition-all hover:scale-105">
              <Sparkles className="ml-2 h-5 w-5" />
              أنشئ بورتفوليوك
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

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات البورتفوليو</h2>
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

      {/* Sections */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">أقسام البورتفوليو</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {sections.map((section, index) => (
                <Card
                  key={index}
                  className="transition-all hover:shadow-md animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <span className="font-medium">{section}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">شارك بورتفوليوك</h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { icon: Share2, title: "مشاركة سهلة", desc: "شارك رابط بورتفوليوك" },
              { icon: Download, title: "تحميل PDF", desc: "احفظه كملف PDF" },
              { icon: Eye, title: "معاينة", desc: "اعرضه بشكل احترافي" },
            ].map((action, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:shadow-lg animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <action.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{action.title}</CardTitle>
                  <CardDescription>{action.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold md:text-4xl">ابدأ بناء بورتفوليوك الآن</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                اجمع إنجازاتك في ملف احترافي واحد مجاناً
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Trophy className="ml-2 h-5 w-5" />
                أنشئ بورتفوليو مجاني
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
