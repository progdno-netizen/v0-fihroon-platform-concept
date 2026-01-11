import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Grid3x3, Box, Eye, Share2, Award, Sparkles, Camera, Globe, Zap, Heart } from "lucide-react"

export default function DigitalMuseumPage() {
  const exhibitions = [
    {
      title: "المشاريع الهندسية",
      description: "نماذج ثلاثية الأبعاد للتصاميم والابتكارات الهندسية",
      items: 450,
      views: "125K",
      image: "/engineering-3d-models.jpg",
    },
    {
      title: "الفنون الإبداعية",
      description: "معرض رقمي للوحات والأعمال الفنية الطلابية",
      items: 320,
      views: "98K",
      image: "/digital-art-gallery.png",
    },
    {
      title: "البحوث العلمية",
      description: "عرض تفاعلي للأبحاث والتجارب العلمية",
      items: 280,
      views: "87K",
      image: "/scientific-research-visualization.png",
    },
    {
      title: "التصاميم الرقمية",
      description: "بورتفوليو رقمي لأفضل التصاميم الجرافيكية",
      items: 560,
      views: "156K",
      image: "/graphic-design-portfolio.jpg",
    },
    {
      title: "الابتكارات التقنية",
      description: "مشاريع البرمجة وتطبيقات الذكاء الاصطناعي",
      items: 380,
      views: "112K",
      image: "/tech-innovation-projects.jpg",
    },
    {
      title: "التراث والثقافة",
      description: "عروض تفاعلية للتراث السعودي والثقافة العربية",
      items: 220,
      views: "94K",
      image: "/saudi-heritage-culture.jpg",
    },
  ]

  const features = [
    {
      icon: Box,
      title: "عرض ثلاثي الأبعاد",
      description: "تجول في المعارض بتقنية 3D التفاعلية",
    },
    {
      icon: Camera,
      title: "التصوير الشامل",
      description: "التقط صوراً من جميع الزوايا",
    },
    {
      icon: Share2,
      title: "المشاركة السهلة",
      description: "شارك أعمالك مع العالم بنقرة واحدة",
    },
    {
      icon: Eye,
      title: "واقع افتراضي",
      description: "تجربة غامرة مع نظارات VR",
    },
    {
      icon: Award,
      title: "المسابقات",
      description: "شارك في مسابقات شهرية ونافس",
    },
    {
      icon: Globe,
      title: "عرض عالمي",
      description: "اعرض مشاريعك لجمهور عالمي",
    },
  ]

  const stats = [
    { value: "2,500+", label: "مشروع معروض" },
    { value: "800K+", label: "زائر شهرياً" },
    { value: "150+", label: "معرض نشط" },
    { value: "95%", label: "تقييم المستخدمين" },
  ]

  const benefits = [
    "عرض احترافي لمشاريعك",
    "تفاعل مباشر مع الزوار",
    "تعليقات ومراجعات بناءة",
    "فرص للتعاون والشراكات",
    "بناء سمعة أكاديمية",
    "أرشفة رقمية لأعمالك",
    "إحصائيات مفصلة للزوار",
    "شهادات للمشاركة",
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
              <Grid3x3 className="ml-2 h-4 w-4" />
              المتحف الرقمي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              اعرض مشاريعك <span className="text-primary">بتقنية 3D</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              متحف رقمي تفاعلي لعرض مشاريعك وابتكاراتك بتقنية ثلاثية الأبعاد. شارك أعمالك مع العالم واحصل على تقييمات
              وتعليقات من خبراء ومهتمين
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Box className="ml-2 h-5 w-5" />
                اعرض مشروعك
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                تجول في المتحف
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

      {/* Exhibitions Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">المعارض النشطة</h2>
            <p className="text-lg text-muted-foreground">استكشف المشاريع والابتكارات المعروضة</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exhibitions.map((exhibition, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={exhibition.image || "/placeholder.svg"}
                    alt={exhibition.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute right-3 top-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {exhibition.items} مشروع
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{exhibition.title}</CardTitle>
                  <CardDescription>{exhibition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>{exhibition.views} مشاهدة</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                    >
                      استكشف
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              المميزات التفاعلية
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">تجربة متحف لا مثيل لها</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 text-center transition-all hover:border-primary hover:shadow-lg animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">لماذا تعرض في المتحف الرقمي؟</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary hover:shadow-md animate-in fade-in slide-in-from-bottom-3 duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium">{benefit}</span>
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز لعرض مشروعك؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                انضم لآلاف الطلاب والباحثين واعرض ابتكاراتك للعالم
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 pb-8 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <Zap className="ml-2 h-5 w-5" />
                ارفع مشروعك الآن
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                <Heart className="ml-2 h-5 w-5" />
                استكشف المعارض
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
