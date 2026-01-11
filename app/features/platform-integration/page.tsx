import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Link2,
  School,
  GraduationCap,
  BookOpen,
  Shield,
  Zap,
  RefreshCw,
  CheckCircle2,
  Sparkles,
  Bell,
} from "lucide-react"

export default function PlatformIntegrationPage() {
  const platforms = [
    {
      name: "منصة مدرستي",
      icon: School,
      description: "الوصول المباشر لواجباتك وجدولك الدراسي",
      features: ["الواجبات المنزلية", "الجدول الدراسي", "الدرجات والتقييم", "المحادثات مع المعلمين"],
      status: "متصل",
      users: "5M+",
    },
    {
      name: "نظام نور",
      icon: GraduationCap,
      description: "متابعة السجل الأكاديمي والنتائج",
      features: ["النتائج الدراسية", "التقارير الأكاديمية", "الحضور والغياب", "بيانات الطلاب"],
      status: "متصل",
      users: "8M+",
    },
    {
      name: "نظام فارس",
      icon: BookOpen,
      description: "للمعلمين والإداريين",
      features: ["الخدمات الذاتية", "الإجازات", "الرواتب", "التقارير الإدارية"],
      status: "متصل",
      users: "500K+",
    },
    {
      name: "الجامعات السعودية",
      icon: GraduationCap,
      description: "التكامل مع أنظمة الجامعات",
      features: ["التسجيل الأكاديمي", "النتائج الفصلية", "الجداول الدراسية", "المكتبة الرقمية"],
      status: "متصل",
      users: "2M+",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "وصول سريع",
      description: "ادخل لجميع منصاتك من مكان واحد",
    },
    {
      icon: RefreshCw,
      title: "تحديث تلقائي",
      description: "بيانات محدثة لحظياً من جميع المصادر",
    },
    {
      icon: Bell,
      title: "تنبيهات ذكية",
      description: "احصل على إشعارات بالمواعيد والواجبات",
    },
    {
      icon: Shield,
      title: "أمان عالي",
      description: "حماية كاملة لبياناتك وخصوصيتك",
    },
  ]

  const integrationSteps = [
    {
      step: "01",
      title: "اختر المنصة",
      description: "حدد المنصة التي تريد ربطها",
    },
    {
      step: "02",
      title: "أدخل البيانات",
      description: "قم بتسجيل الدخول ببياناتك",
    },
    {
      step: "03",
      title: "اسمح بالوصول",
      description: "وافق على الربط الآمن",
    },
    {
      step: "04",
      title: "ابدأ الاستخدام",
      description: "استمتع بالوصول الموحد",
    },
  ]

  const stats = [
    { value: "20+", label: "منصة مدمجة" },
    { value: "15M+", label: "مستخدم نشط" },
    { value: "99.9%", label: "وقت التشغيل" },
    { value: "آمن", label: "تشفير كامل" },
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
              <Link2 className="ml-2 h-4 w-4" />
              الربط مع المنصات
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              كل منصاتك التعليمية <span className="text-primary">في مكان واحد</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              اربط حساباتك من مدرستي، نور، فارس، والجامعات السعودية واحصل على وصول موحد وسريع لجميع بياناتك التعليمية مع
              حماية كاملة لخصوصيتك
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Link2 className="ml-2 h-5 w-5" />
                ابدأ الربط الآن
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                شاهد العرض التوضيحي
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

      {/* Platforms Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">المنصات المدعومة</h2>
            <p className="text-lg text-muted-foreground">اربط جميع حساباتك التعليمية بسهولة</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                        <platform.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{platform.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {platform.users} مستخدم
                        </Badge>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">{platform.status}</Badge>
                  </div>
                  <CardDescription className="text-base">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="mt-4 w-full transition-all hover:scale-105">اربط الآن</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              خطوات الربط
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">كيف تربط حساباتك؟</h2>
            <p className="text-lg text-muted-foreground">عملية بسيطة وآمنة في 4 خطوات</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {integrationSteps.map((item, index) => (
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

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">لماذا الربط مع فِهرون؟</h2>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لتوحيد منصاتك التعليمية؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                ابدأ الآن واحصل على وصول سهل وآمن لجميع حساباتك التعليمية
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                ابدأ الربط مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
