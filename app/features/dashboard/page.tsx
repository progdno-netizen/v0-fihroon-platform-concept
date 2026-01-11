import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CheckSquare,
  FileText,
  TrendingUp,
  Clock,
  Target,
  Activity,
  Zap,
  PieChart,
  LineChart,
  BarChart,
} from "lucide-react"

export default function DashboardPage() {
  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "الإحصائيات الشاملة",
      description: "تتبع تقدمك في جميع المجالات",
      features: ["رسوم بيانية تفاعلية", "تقارير أسبوعية", "مقارنة الأداء", "تحليل التقدم"],
    },
    {
      icon: Calendar,
      title: "المنظم الذكي",
      description: "جدول واضح لكل مهامك ومواعيدك",
      features: ["تقويم تفاعلي", "تنبيهات ذكية", "مزامنة تلقائية", "عرض متعدد"],
    },
    {
      icon: CheckSquare,
      title: "إدارة المهام",
      description: "نظم مهامك وتتبع إنجازاتك",
      features: ["قوائم المهام", "الأولويات", "تتبع التقدم", "مهام فرعية"],
    },
    {
      icon: FileText,
      title: "المشاريع",
      description: "إدارة متكاملة لجميع مشاريعك",
      features: ["لوحة المشاريع", "التعاون الجماعي", "المواعيد النهائية", "المستندات"],
    },
    {
      icon: TrendingUp,
      title: "التقدم الأكاديمي",
      description: "راقب مستواك الدراسي",
      features: ["الدرجات", "معدل التحصيل", "نقاط القوة", "فرص التحسين"],
    },
    {
      icon: Target,
      title: "الأهداف",
      description: "حدد وحقق أهدافك التعليمية",
      features: ["تحديد الأهداف", "تتبع التقدم", "إنجازات", "تحفيز ذكي"],
    },
  ]

  const widgets = [
    {
      icon: Activity,
      title: "النشاط اليومي",
      value: "4.5 ساعات",
      change: "+12%",
      trend: "up",
    },
    {
      icon: CheckSquare,
      title: "المهام المكتملة",
      value: "23/30",
      change: "77%",
      trend: "up",
    },
    {
      icon: Clock,
      title: "الوقت المستثمر",
      value: "127 ساعة",
      change: "+8%",
      trend: "up",
    },
    {
      icon: Target,
      title: "الأهداف المحققة",
      value: "18/25",
      change: "72%",
      trend: "up",
    },
  ]

  const insights = [
    {
      icon: PieChart,
      title: "توزيع الوقت",
      description: "تحليل كيفية قضاء وقتك",
    },
    {
      icon: LineChart,
      title: "منحنى التقدم",
      description: "تتبع تحسنك عبر الزمن",
    },
    {
      icon: BarChart,
      title: "مقارنة الأداء",
      description: "قارن أداءك بالأسابيع السابقة",
    },
    {
      icon: Zap,
      title: "اقتراحات ذكية",
      description: "توصيات لتحسين إنتاجيتك",
    },
  ]

  const stats = [
    { value: "شامل", label: "عرض موحد" },
    { value: "مباشر", label: "تحديث فوري" },
    { value: "ذكي", label: "تحليل تلقائي" },
    { value: "مخصص", label: "حسب احتياجك" },
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
              <BarChart3 className="ml-2 h-4 w-4" />
              لوحة التحكم
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              تحكم كامل <span className="text-primary">في رحلتك التعليمية</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              لوحة تحكم شاملة لإدارة مهامك، مشاريعك، جدولك، وتتبع تقدمك الأكاديمي. كل ما تحتاجه لتنظيم حياتك التعليمية
              في مكان واحد مع تحليلات ذكية ورؤى مفيدة
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Activity className="ml-2 h-5 w-5" />
                افتح لوحة التحكم
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                جرب النسخة التجريبية
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

      {/* Dashboard Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مكونات لوحة التحكم</h2>
            <p className="text-lg text-muted-foreground">كل ما تحتاجه لإدارة حياتك التعليمية</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dashboardFeatures.map((feature, index) => (
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
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Widgets Preview */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              الإحصائيات الحية
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">تتبع أدائك لحظياً</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {widgets.map((widget, index) => (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <widget.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="text-xs text-green-700 dark:text-green-400">
                      {widget.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-1 text-3xl font-bold">{widget.value}</div>
                  <div className="text-sm text-muted-foreground">{widget.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">رؤى وتحليلات ذكية</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <insight.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{insight.title}</h3>
                <p className="text-muted-foreground">{insight.description}</p>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لتنظيم حياتك التعليمية؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                احصل على لوحة تحكم شاملة لإدارة كل جوانب رحلتك التعليمية
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Zap className="ml-2 h-5 w-5" />
                ابدأ الآن مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
