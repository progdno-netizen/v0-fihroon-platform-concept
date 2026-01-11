import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  FlaskConical,
  BookOpen,
  Database,
  Search,
  FileText,
  Library,
  GraduationCap,
  Globe,
  Download,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export default function ResearchPage() {
  const resources = [
    {
      icon: BookOpen,
      title: "المعاجم والقواميس",
      count: "50+",
      description: "معاجم عربية وإنجليزية شاملة",
      items: ["لسان العرب", "المعجم الوسيط", "Oxford Dictionary", "Cambridge Dictionary"],
    },
    {
      icon: Library,
      title: "الموسوعات",
      count: "30+",
      description: "موسوعات علمية وثقافية",
      items: ["موسوعة بريتانيكا", "ويكيبيديا الأكاديمية", "موسوعة الإعجاز العلمي", "Encyclopedia Britannica"],
    },
    {
      icon: Database,
      title: "قواعد البيانات",
      count: "100K+",
      description: "أبحاث ودراسات علمية محكمة",
      items: ["PubMed", "IEEE Xplore", "JSTOR", "Google Scholar"],
    },
    {
      icon: FileText,
      title: "المجلات العلمية",
      count: "500+",
      description: "مجلات بحثية محكمة",
      items: ["Nature", "Science", "مجلة جامعة الملك سعود", "المجلة العربية للعلوم"],
    },
    {
      icon: GraduationCap,
      title: "الرسائل الجامعية",
      count: "50K+",
      description: "رسائل ماجستير ودكتوراه",
      items: ["من جامعات سعودية", "جامعات عربية", "جامعات عالمية", "متاحة للتحميل"],
    },
    {
      icon: Globe,
      title: "المكتبات الرقمية",
      count: "20+",
      description: "مكتبات عالمية وعربية",
      items: ["مكتبة الملك فهد", "المكتبة الرقمية السعودية", "مكتبة الإسكندرية", "Internet Archive"],
    },
  ]

  const researchTools = [
    {
      icon: Search,
      title: "محرك بحث ذكي",
      description: "ابحث في ملايين المصادر بلحظات",
    },
    {
      icon: FileText,
      title: "إدارة المراجع",
      description: "نظم مراجعك بصيغ APA وMLA وغيرها",
    },
    {
      icon: Download,
      title: "تحميل سريع",
      description: "حمل الأبحاث والمقالات مباشرة",
    },
    {
      icon: Sparkles,
      title: "اقتراحات ذكية",
      description: "احصل على اقتراحات لأبحاث ذات صلة",
    },
  ]

  const stats = [
    { value: "10M+", label: "مصدر علمي" },
    { value: "500K+", label: "بحث محكم" },
    { value: "50+", label: "قاعدة بيانات" },
    { value: "24/7", label: "إتاحة دائمة" },
  ]

  const features = [
    "بحث متقدم في جميع المصادر",
    "حفظ وتنظيم المراجع",
    "توليد الاستشهادات تلقائياً",
    "مشاركة البحث مع الفريق",
    "تنبيهات للأبحاث الجديدة",
    "ترجمة فورية للمصادر",
    "تحليل النصوص البحثية",
    "إحصائيات الاستشهادات",
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
              <FlaskConical className="ml-2 h-4 w-4" />
              البحث العلمي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              مكتبتك البحثية <span className="text-primary">الشاملة</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              وصول غير محدود لملايين المصادر العلمية - معاجم، موسوعات، قواعد بيانات، ومجلات علمية محكمة من أفضل الجامعات
              والمؤسسات البحثية في العالم
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Search className="ml-2 h-5 w-5" />
                ابدأ البحث الآن
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                استكشف المصادر
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

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">المصادر البحثية</h2>
            <p className="text-lg text-muted-foreground">مكتبة شاملة من أهم المصادر العلمية والأكاديمية</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="group border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                      <resource.icon className="h-7 w-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-sm font-bold">
                      {resource.count}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Tools */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              أدوات البحث
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">أدوات لتسهيل بحثك</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {researchTools.map((tool, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all hover:scale-110">
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

      {/* Features List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات إضافية</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary hover:shadow-md animate-in fade-in slide-in-from-bottom-3 duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لبدء بحثك العلمي؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                احصل على وصول فوري لملايين المصادر العلمية والأكاديمية
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <TrendingUp className="ml-2 h-5 w-5" />
                ابدأ البحث مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
