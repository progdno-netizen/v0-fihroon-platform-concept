import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Globe, Languages, Users, Video, BookOpen, Trophy, Sparkles } from "lucide-react"

export default function GlobalCommunityPage() {
  const features = [
    {
      icon: Languages,
      title: "تواصل متعدد اللغات",
      description: "ترجمة فورية لأكثر من 50 لغة",
    },
    {
      icon: Video,
      title: "لقاءات افتراضية",
      description: "جلسات فيديو مع طلاب من العالم",
    },
    {
      icon: BookOpen,
      title: "تبادل ثقافي",
      description: "تعلم عن ثقافات مختلفة",
    },
    {
      icon: Trophy,
      title: "مشاريع دولية",
      description: "تعاون في مشاريع عالمية",
    },
  ]

  const regions = [
    { name: "السعودية والخليج", members: "350K+", flag: "🇸🇦" },
    { name: "الشرق الأوسط", members: "180K+", flag: "🌍" },
    { name: "شمال أفريقيا", members: "120K+", flag: "🌍" },
    { name: "آسيا", members: "95K+", flag: "🌏" },
    { name: "أوروبا", members: "75K+", flag: "🇪🇺" },
    { name: "الأمريكتين", members: "60K+", flag: "🌎" },
  ]

  const stats = [
    { value: "150+", label: "دولة" },
    { value: "50+", label: "لغة" },
    { value: "880K+", label: "عضو عالمي" },
    { value: "24/7", label: "نشاط مستمر" },
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
              <Globe className="ml-2 h-4 w-4" />
              المجتمع العالمي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              تواصل مع <span className="text-primary">العالم كله</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              انضم لمجتمع عالمي يضم طلاب ومعلمين من أكثر من 150 دولة. تعلم لغات جديدة، اكتشف ثقافات مختلفة، وشارك في
              مشاريع دولية مع ترجمة فورية ودعم متعدد اللغات
            </p>
            <Button size="lg" className="transition-all hover:scale-105">
              <Users className="ml-2 h-5 w-5" />
              انضم للمجتمع العالمي
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

      {/* Regions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">أعضاؤنا حول العالم</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 text-5xl">{region.flag}</div>
                  <CardTitle className="text-xl">{region.name}</CardTitle>
                  <CardDescription className="text-lg font-bold text-primary">{region.members}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات المجتمع العالمي</h2>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">ابدأ رحلتك العالمية</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                تواصل مع متعلمين من جميع أنحاء العالم اليوم
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                انضم الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
