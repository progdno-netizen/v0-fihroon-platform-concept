import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Wrench, Palette, Video, FileText, ImageIcon, Sparkles, Download, Cloud } from "lucide-react"

export default function CreativeToolsPage() {
  const toolCategories = [
    {
      icon: Palette,
      title: "أدوات التصميم",
      description: "أدوات احترافية للتصميم الجرافيكي",
      tools: [
        { name: "محرر الصور", icon: ImageIcon, features: "فلاتر، طبقات، تأثيرات" },
        { name: "تصميم الشعارات", icon: ImageIcon, features: "قوالب جاهزة وتخصيص كامل" },
        { name: "البوسترات", icon: ImageIcon, features: "تصاميم للطباعة والنشر" },
      ],
    },
    {
      icon: Video,
      title: "المونتاج والفيديو",
      description: "احترف مونتاج الفيديو وإنتاج المحتوى",
      tools: [
        { name: "محرر الفيديو", icon: Video, features: "قص، دمج، تأثيرات" },
        { name: "الموشن جرافيك", icon: ImageIcon, features: "رسوم متحركة وانتقالات" },
        { name: "قص الفيديو", icon: ImageIcon, features: "أداة سريعة للقص والتقطيع" },
      ],
    },
    {
      icon: FileText,
      title: "معالجة النصوص",
      description: "كل ما تحتاجه لكتابة وتحرير المستندات",
      tools: [
        { name: "محرر المستندات", icon: FileText, features: "Word-like محرر شامل" },
        { name: "العروض التقديمية", icon: ImageIcon, features: "قوالب احترافية للعروض" },
        { name: "الجداول", icon: ImageIcon, features: "إنشاء وتحرير الجداول" },
      ],
    },
  ]

  const features = [
    {
      icon: Cloud,
      title: "حفظ سحابي",
      description: "احفظ أعمالك على السحابة بأمان",
    },
    {
      icon: Download,
      title: "تصدير متعدد",
      description: "صدر بصيغ مختلفة PDF, PNG, MP4",
    },
    {
      icon: ImageIcon,
      title: "ذكاء اصطناعي",
      description: "أدوات ذكية لتحسين أعمالك",
    },
    {
      icon: Sparkles,
      title: "قوالب جاهزة",
      description: "مئات القوالب الاحترافية",
    },
  ]

  const stats = [
    { value: "50+", label: "أداة إبداعية" },
    { value: "1000+", label: "قالب جاهز" },
    { value: "500K+", label: "مستخدم نشط" },
    { value: "مجاني", label: "للطلاب" },
  ]

  const useCases = [
    "تصميم الواجبات والمشاريع",
    "إنشاء العروض التقديمية",
    "مونتاج مقاطع الفيديو التعليمية",
    "تحرير الصور والرسومات",
    "إنشاء الإنفوجرافيك",
    "تصميم البوسترات",
    "كتابة الأبحاث والتقارير",
    "إنشاء المحتوى الإبداعي",
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
              <Wrench className="ml-2 h-4 w-4" />
              الأدوات الإبداعية
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              كل أدوات الإبداع <span className="text-primary">في مكان واحد</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              من التصميم والمونتاج إلى تحرير المستندات - مجموعة شاملة من الأدوات الاحترافية لإنجاز مشاريعك وإطلاق إبداعك
              بدون الحاجة لتطبيقات خارجية
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Sparkles className="ml-2 h-5 w-5" />
                ابدأ الإبداع الآن
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                استكشف الأدوات
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

      {/* Tool Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">فئات الأدوات</h2>
            <p className="text-lg text-muted-foreground">اختر الأداة المناسبة لمشروعك</p>
          </div>

          <div className="space-y-8">
            {toolCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {category.tools.map((tool, idx) => (
                      <Card key={idx} className="group transition-all hover:shadow-md">
                        <CardHeader>
                          <div className="mb-2 flex items-center gap-2">
                            <tool.icon className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">{tool.name}</CardTitle>
                          </div>
                          <CardDescription className="text-sm">{tool.features}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                          >
                            فتح الأداة
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">ماذا يمكنك أن تنجز؟</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary hover:shadow-md animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium">{useCase}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات إضافية</h2>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لإطلاق إبداعك؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                احصل على وصول فوري لجميع الأدوات الإبداعية التي تحتاجها
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <ImageIcon className="ml-2 h-5 w-5" />
                ابدأ الإبداع مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
