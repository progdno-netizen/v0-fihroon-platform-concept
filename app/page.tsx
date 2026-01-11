import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BookOpen,
  Brain,
  Palette,
  Users,
  ShoppingBag,
  Trophy,
  Globe,
  Shield,
  Sparkles,
  Link2,
  Wrench,
  FlaskConical,
  Bot,
  BarChart3,
  Grid3x3,
  Gamepad2,
  Award,
} from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: Link2,
      title: "الربط مع المنصات",
      description: "ربط سلس مع مدرستي، نور، فارس، والجامعات في مكان واحد",
      href: "/features/platform-integration",
    },
    {
      icon: Wrench,
      title: "الأدوات الإبداعية",
      description: "تصميم، مونتاج، تحرير مستندات - كل ما تحتاجه للإبداع",
      href: "/features/creative-tools",
    },
    {
      icon: BookOpen,
      title: "المناهج التعليمية",
      description: "المنهج السعودي كامل مع القدرات والتحصيلي",
      href: "/features/curriculum",
    },
    {
      icon: FlaskConical,
      title: "البحث العلمي",
      description: "معاجم، موسوعات، وقاعدة بيانات متكاملة للأبحاث",
      href: "/features/research",
    },
    {
      icon: Brain,
      title: "الذكاء الاصطناعي",
      description: "تعلم البرمجة، تحليل البيانات، ومشاريع تقنية متقدمة",
      href: "/features/ai-learning",
    },
    {
      icon: Palette,
      title: "المهارات والهوايات",
      description: "طور مهاراتك في الرسم، الكتابة، البرمجة، والتصوير",
      href: "/features/skills",
    },
    {
      icon: Users,
      title: "المجتمع التعليمي",
      description: "تواصل مع الطلاب، المعلمين، والباحثين حول العالم",
      href: "/features/community",
    },
    {
      icon: Grid3x3,
      title: "المتحف الرقمي",
      description: "عرض تفاعلي ثلاثي الأبعاد للمشاريع والابتكارات",
      href: "/features/digital-museum",
    },
    {
      icon: Bot,
      title: "المساعد الذكي",
      description: "تنظيم ذكي لجداولك ومهامك مع اقتراحات مخصصة",
      href: "/features/smart-assistant",
    },
    {
      icon: BarChart3,
      title: "لوحة التحكم",
      description: "إدارة كاملة لأدواتك ومشاريعك من مكان واحد",
      href: "/features/dashboard",
    },
    {
      icon: Gamepad2,
      title: "التعلم بالألعاب",
      description: "نظام نقاط وشارات ومسابقات لتحفيز التعلم",
      href: "/features/gamification",
    },
    {
      icon: Globe,
      title: "مجتمع عالمي",
      description: "تواصل دولي متعدد اللغات مع ثقافات مختلفة",
      href: "/features/global-community",
    },
    {
      icon: ShoppingBag,
      title: "المتجر الرقمي",
      description: "بيع وشراء الملخصات، الأبحاث، والدورات التعليمية",
      href: "/features/marketplace",
    },
    {
      icon: Award,
      title: "البورتفوليو الذكي",
      description: "اجمع شهاداتك وإنجازاتك في ملف احترافي واحد",
      href: "/features/portfolio",
    },
    {
      icon: Sparkles,
      title: "الصحة الذهنية",
      description: "أدوات لتحسين التركيز والتوازن النفسي",
      href: "/features/mental-health",
    },
    {
      icon: Shield,
      title: "الخصوصية والأمان",
      description: "تشفير كامل وحماية متقدمة لبياناتك",
      href: "/features/security",
    },
  ]

  const stats = [
    { value: "18", label: "خدمة شاملة", desc: "في منصة واحدة" },
    { value: "100٪", label: "متكاملة", desc: "مع منصاتك الحالية" },
    { value: "عالمية", label: "شراكات", desc: "مع كبرى المنصات" },
    { value: "آمنة", label: "حماية", desc: "لبياناتك" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex justify-center animate-in fade-in zoom-in duration-700">
              <img src="/images/image.png" alt="Fihroon Logo" className="h-auto w-32 md:w-48" />
            </div>

            <Badge
              variant="secondary"
              className="mb-6 text-sm md:text-base animate-in slide-in-from-bottom-3 duration-700 delay-100"
            >
              <Sparkles className="ml-2 h-4 w-4" />
              المكتب الرقمي الذكي الموحد
            </Badge>

            <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              مستقبل التعليم <span className="text-primary">في منصة واحدة</span>
            </h1>

            <p className="mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              منصة فِهرون - تجربة تعليمية متكاملة تجمع التعليم، البحث العلمي، الأدوات التقنية، المهارات، والهوايات في
              بيئة رقمية واحدة آمنة ومبتكرة
            </p>

            <div className="flex flex-col gap-4 sm:flex-row animate-in slide-in-from-bottom-5 duration-700 delay-500">
              <Button size="lg" className="text-base md:text-lg transition-all hover:scale-105">
                ابدأ رحلتك المعرفية
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg bg-transparent transition-all hover:scale-105"
              >
                اكتشف المزيد
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 text-3xl font-bold text-primary md:text-4xl transition-all hover:scale-110">
                  {stat.value}
                </div>
                <div className="mb-1 font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">ننهي تشتتك بين المنصات</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              هل سئمت التنقل بين عشرات المنصات والتطبيقات؟ فِهرون يوحد كل ما تحتاجه - من منصات التعليم الرسمية إلى
              الأدوات الإبداعية، من البحث العلمي إلى تطوير المهارات - كل شيء في مكان واحد آمن ومنظم
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Badge variant="outline" className="mb-4">
              الخصائص الرئيسية
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">منصة شاملة لكل احتياجاتك</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card
                  className="h-full border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 animate-in fade-in zoom-in duration-700">
            <CardHeader className="text-center">
              <CardTitle className="text-balance text-3xl font-bold md:text-4xl">
                جاهز لتحويل تجربتك التعليمية؟
              </CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-pretty text-base md:text-lg">
                انضم إلى آلاف المستخدمين الذين اختاروا فِهرون كمكتبهم الرقمي الموحد. ابدأ رحلتك نحو تعليم أذكى وأكثر
                تنظيماً اليوم
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 pb-8 sm:flex-row sm:justify-center">
              <Button size="lg" className="w-full sm:w-auto transition-all hover:scale-105">
                <Trophy className="ml-2 h-5 w-5" />
                ابدأ مجاناً
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent transition-all hover:scale-105"
              >
                تواصل معنا
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center animate-in fade-in duration-700">
            <img src="/images/image.png" alt="Fihroon" className="mb-4 h-auto w-20 transition-all hover:scale-110" />
            <h3 className="mb-2 text-xl font-bold">فِهرون</h3>
            <p className="mb-6 max-w-md text-sm text-muted-foreground">
              المكتب الرقمي الذكي الموحد - تجربة تعليمية عالمية المستوى
            </p>
            <div className="text-sm text-muted-foreground">© 2025 فِهرون. جميع الحقوق محفوظة.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
