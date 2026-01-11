import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ShoppingBag, FileText, BookOpen, Video, Award, DollarSign, Shield, TrendingUp } from "lucide-react"

export default function MarketplacePage() {
  const categories = [
    {
      icon: FileText,
      title: "الملخصات والملاحظات",
      description: "ملخصات عالية الجودة لجميع المواد",
      items: "25K+",
      avgPrice: "15 ر.س",
    },
    {
      icon: BookOpen,
      title: "الأبحاث والدراسات",
      description: "أبحاث أكاديمية محكمة",
      items: "8K+",
      avgPrice: "45 ر.س",
    },
    {
      icon: Video,
      title: "الدورات التعليمية",
      description: "دورات شاملة من خبراء",
      items: "5K+",
      avgPrice: "120 ر.س",
    },
    {
      icon: Award,
      title: "الشهادات والكورسات",
      description: "شهادات معتمدة ومعترف بها",
      items: "3K+",
      avgPrice: "200 ر.س",
    },
  ]

  const sellerBenefits = [
    "احصل على دخل إضافي",
    "شارك معرفتك مع الآخرين",
    "بناء سمعة أكاديمية",
    "دعم فني كامل",
    "عمولة تنافسية",
    "حماية حقوق الملكية",
  ]

  const buyerBenefits = [
    "محتوى عالي الجودة",
    "أسعار تنافسية",
    "دفع آمن",
    "ضمان الاسترجاع",
    "تقييمات موثوقة",
    "دعم العملاء",
  ]

  const stats = [
    { value: "40K+", label: "منتج متاح" },
    { value: "150K+", label: "عملية بيع" },
    { value: "8K+", label: "بائع نشط" },
    { value: "95%", label: "رضا العملاء" },
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
              <ShoppingBag className="ml-2 h-4 w-4" />
              المتجر الرقمي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              اشترِ واب<span className="text-primary">يع المحتوى التعليمي</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              متجر رقمي آمن لبيع وشراء الملخصات، الأبحاث، والدورات التعليمية. احصل على محتوى عالي الجودة أو شارك معرفتك
              واحصل على دخل إضافي
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                تصفح المتجر
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                ابدأ البيع
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

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">فئات المنتجات</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group transition-all hover:shadow-lg hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                    <category.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">المنتجات</span>
                      <span className="font-semibold">{category.items}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">متوسط السعر</span>
                      <span className="font-semibold text-primary">{category.avgPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">
                  للبائعين
                </Badge>
                <h2 className="mb-4 text-3xl font-bold">لماذا تبيع معنا؟</h2>
              </div>
              <div className="space-y-3">
                {sellerBenefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="animate-in fade-in slide-in-from-left-4 duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="flex items-center gap-3 p-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span className="font-medium">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">
                  للمشترين
                </Badge>
                <h2 className="mb-4 text-3xl font-bold">لماذا تشتري معنا؟</h2>
              </div>
              <div className="space-y-3">
                {buyerBenefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="animate-in fade-in slide-in-from-right-4 duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="flex items-center gap-3 p-4">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-medium">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز للبدء؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                اشترِ محتوى عالي الجودة أو ابدأ البيع وحقق دخلاً إضافياً
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 pb-8 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <ShoppingBag className="ml-2 h-5 w-5" />
                تصفح المتجر
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                <TrendingUp className="ml-2 h-5 w-5" />
                ابدأ البيع الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
