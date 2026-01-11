import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Gamepad2,
  Trophy,
  Award,
  Star,
  Zap,
  Target,
  Users,
  TrendingUp,
  Sparkles,
  Medal,
  Crown,
  Flame,
} from "lucide-react"

export default function GamificationPage() {
  const gameElements = [
    {
      icon: Trophy,
      title: "نظام النقاط",
      description: "اكسب نقاطاً مع كل نشاط تعليمي تكمله",
      points: "10-100 نقطة",
    },
    {
      icon: Award,
      title: "الشارات",
      description: "احصل على شارات مميزة عند تحقيق إنجازات خاصة",
      points: "50+ شارة",
    },
    {
      icon: Medal,
      title: "المستويات",
      description: "تقدم عبر 20 مستوى من المبتدئ للخبير",
      points: "20 مستوى",
    },
    {
      icon: Crown,
      title: "لوحة الصدارة",
      description: "نافس أصدقاءك وزملائك على المراكز الأولى",
      points: "تحديث يومي",
    },
    {
      icon: Target,
      title: "التحديات اليومية",
      description: "تحديات جديدة كل يوم مع مكافآت خاصة",
      points: "100+ تحدي",
    },
    {
      icon: Flame,
      title: "سلسلة الإنجازات",
      description: "حافظ على سلسلة تعلمك اليومية لمكافآت إضافية",
      points: "مكافآت مضاعفة",
    },
  ]

  const challenges = [
    {
      title: "تحدي الأسبوع",
      description: "أكمل 5 دروس في مادة واحدة",
      reward: "500 نقطة + شارة ذهبية",
      participants: 12450,
    },
    {
      title: "ماراثون البرمجة",
      description: "اكتب 100 سطر كود في يوم واحد",
      reward: "750 نقطة + شارة المبرمج",
      participants: 8320,
    },
    {
      title: "التفوق الدراسي",
      description: "احصل على 100% في 3 اختبارات متتالية",
      reward: "1000 نقطة + شارة التفوق",
      participants: 15680,
    },
  ]

  const leaderboard = [
    { rank: 1, name: "أحمد محمد", points: 15420, badge: "🥇", level: 18 },
    { rank: 2, name: "فاطمة علي", points: 14890, badge: "🥈", level: 17 },
    { rank: 3, name: "خالد السعيد", points: 13750, badge: "🥉", level: 17 },
    { rank: 4, name: "نورة العتيبي", points: 12980, badge: "⭐", level: 16 },
    { rank: 5, name: "عبدالله الغامدي", points: 12340, badge: "⭐", level: 16 },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "تحفيز مستمر",
      description: "نظام المكافآت يبقيك متحمساً للتعلم",
    },
    {
      icon: Users,
      title: "منافسة صحية",
      description: "تنافس مع أصدقائك بطريقة ممتعة",
    },
    {
      icon: TrendingUp,
      title: "تتبع التقدم",
      description: "راقب تطورك وإنجازاتك بوضوح",
    },
    {
      icon: Star,
      title: "مكافآت حقيقية",
      description: "احصل على خصومات وجوائز فعلية",
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
              <Gamepad2 className="ml-2 h-4 w-4" />
              التعلم بالألعاب
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              تعلم <span className="text-primary">بطريقة ممتعة</span> ومحفزة
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              حول رحلتك التعليمية إلى مغامرة مثيرة مع نظام النقاط، الشارات، التحديات، ولوحة الصدارة. تعلم وتنافس واكسب
              مكافآت حقيقية
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Trophy className="ml-2 h-5 w-5" />
                ابدأ اللعب والتعلم
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                شاهد لوحة الصدارة
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
              { value: "1M+", label: "نقطة موزعة" },
              { value: "50+", label: "شارة مميزة" },
              { value: "100+", label: "تحدي نشط" },
              { value: "50K+", label: "لاعب متنافس" },
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

      {/* Game Elements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">عناصر اللعب</h2>
            <p className="text-lg text-muted-foreground">اكتشف كيف نجعل التعلم أكثر متعة وتحفيزاً</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gameElements.map((element, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                    <element.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{element.title}</CardTitle>
                  <CardDescription className="text-base">{element.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-sm">
                    {element.points}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Active Challenges */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              التحديات النشطة
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">تحديات هذا الأسبوع</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <div className="mb-1 text-sm font-semibold text-primary">المكافأة</div>
                    <div className="text-sm">{challenge.reward}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{challenge.participants.toLocaleString()} مشارك</span>
                  </div>
                  <Button className="w-full transition-all hover:scale-105">شارك الآن</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">لوحة الصدارة</h2>
            <p className="text-lg text-muted-foreground">أفضل المتعلمين هذا الشهر</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="border-2">
              <CardContent className="p-0">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b p-4 last:border-b-0 transition-all hover:bg-muted/50 animate-in fade-in slide-in-from-right-4 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center text-2xl font-bold">{user.badge}</div>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-muted-foreground">المستوى {user.level}</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-primary">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">نقطة</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">لماذا التعلم بالألعاب؟</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لبدء المنافسة؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                انضم لآلاف المتعلمين واكسب النقاط والشارات أثناء تعلمك
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                ابدأ اللعب الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
