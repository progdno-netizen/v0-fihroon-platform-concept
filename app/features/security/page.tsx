import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Lock, Eye, Key, FileCheck, UserCheck, CheckCircle2, Sparkles } from "lucide-react"

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "تشفير كامل",
      description: "تشفير من الطرف للطرف لجميع بياناتك",
    },
    {
      icon: Key,
      title: "مصادقة ثنائية",
      description: "حماية إضافية لحسابك",
    },
    {
      icon: Eye,
      title: "التحكم في الخصوصية",
      description: "تحكم كامل في من يرى معلوماتك",
    },
    {
      icon: FileCheck,
      title: "نسخ احتياطي آمن",
      description: "نسخ احتياطي مشفر لبياناتك",
    },
  ]

  const privacyControls = [
    "إخفاء الملف الشخصي",
    "التحكم في المشاركات",
    "إدارة المتابعين",
    "حظر المستخدمين",
    "حذف البيانات",
    "تصدير البيانات",
    "سجل النشاط",
    "جلسات النشطة",
  ]

  const certifications = [
    { name: "ISO 27001", description: "إدارة أمن المعلومات" },
    { name: "GDPR", description: "حماية البيانات الأوروبية" },
    { name: "SOC 2", description: "أمن البيانات" },
    { name: "PDPL", description: "نظام حماية البيانات السعودي" },
  ]

  const stats = [
    { value: "256-bit", label: "تشفير" },
    { value: "99.9%", label: "وقت التشغيل" },
    { value: "24/7", label: "مراقبة" },
    { value: "صفر", label: "اختراق" },
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
              <Shield className="ml-2 h-4 w-4" />
              الخصوصية والأمان
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              بياناتك <span className="text-primary">في أمان تام</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              نحمي خصوصيتك وبياناتك بأعلى معايير الأمان العالمية. تشفير كامل، مصادقة ثنائية، والتزام كامل بقوانين حماية
              البيانات
            </p>
            <Button size="lg" className="transition-all hover:scale-105">
              <UserCheck className="ml-2 h-5 w-5" />
              تعرف على إجراءاتنا الأمنية
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

      {/* Security Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات الأمان</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
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

      {/* Privacy Controls */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">التحكم في الخصوصية</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {privacyControls.map((control, index) => (
                <Card
                  key={index}
                  className="transition-all hover:shadow-md animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{control}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              الشهادات والامتثال
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">معايير عالمية</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:shadow-lg animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 flex h-16 w-16 items-center justify-center mx-auto rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">بياناتك في أمان</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                نحن ملتزمون بحماية خصوصيتك وأمان بياناتك بأعلى المعايير
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                اقرأ سياسة الخصوصية
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
