import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, MessageSquare, Heart, Star, BookOpen, Share2, Trophy, Sparkles, UserPlus } from "lucide-react"

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: MessageSquare,
      title: "المنتديات التعليمية",
      description: "ناقش وتعلم مع الطلاب والمعلمين",
      features: ["منتديات حسب المواد", "أسئلة وأجوبة", "مناقشات مفتوحة", "إشراف نشط"],
    },
    {
      icon: Users,
      title: "المجموعات الدراسية",
      description: "انضم أو أنشئ مجموعات دراسية",
      features: ["مجموعات خاصة وعامة", "غرف دراسة افتراضية", "مشاركة الموارد", "تنسيق المواعيد"],
    },
    {
      icon: BookOpen,
      title: "مشاركة المحتوى",
      description: "شارك ملخصاتك وملاحظاتك",
      features: ["تحميل الملفات", "تقييم المحتوى", "تعليقات ومراجعات", "مكتبة مشتركة"],
    },
    {
      icon: Trophy,
      title: "المسابقات",
      description: "شارك في مسابقات علمية وثقافية",
      features: ["مسابقات شهرية", "جوائز وشهادات", "لوحة صدارة", "تحديات جماعية"],
    },
    {
      icon: Star,
      title: "المتابعة والتواصل",
      description: "تابع الخبراء والزملاء المميزين",
      features: ["ملفات شخصية", "نظام متابعة", "رسائل خاصة", "إشعارات ذكية"],
    },
    {
      icon: Heart,
      title: "الدعم والمساعدة",
      description: "احصل على مساعدة من المجتمع",
      features: ["طلب المساعدة", "تقديم الدعم", "خدمة تطوعية", "مكافآت للمساهمين"],
    },
  ]

  const stats = [
    { value: "500K+", label: "عضو نشط" },
    { value: "1M+", label: "نقاش يومي" },
    { value: "50K+", label: "مجموعة دراسية" },
    { value: "100K+", label: "محتوى مشترك" },
  ]

  const memberTypes = [
    { title: "طلاب", count: "450K+", icon: Users },
    { title: "معلمون", count: "35K+", icon: BookOpen },
    { title: "باحثون", count: "12K+", icon: Star },
    { title: "خبراء", count: "3K+", icon: Trophy },
  ]

  const benefits = [
    "تعلم من تجارب الآخرين",
    "احصل على إجابات سريعة لأسئلتك",
    "بناء شبكة علاقات مهنية",
    "مشاركة معرفتك ومساعدة الآخرين",
    "الوصول لموارد تعليمية مجانية",
    "تحفيز مستمر من المجتمع",
    "فرص للتعاون في المشاريع",
    "تطوير مهارات التواصل",
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
              <Users className="ml-2 h-4 w-4" />
              المجتمع التعليمي
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              تعلم وشارك <span className="text-primary">مع مجتمع نشط</span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              انضم لمجتمع تعليمي يضم أكثر من نصف مليون طالب ومعلم وباحث. شارك معرفتك، اطرح أسئلتك، وتعاون مع زملاء من
              جميع أنحاء المملكة والعالم العربي
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="transition-all hover:scale-105">
                <UserPlus className="ml-2 h-5 w-5" />
                انضم للمجتمع
              </Button>
              <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                استكشف المنتديات
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

      {/* Community Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مميزات المجتمع</h2>
            <p className="text-lg text-muted-foreground">كل ما تحتاجه للتواصل والتعلم مع الآخرين</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityFeatures.map((feature, index) => (
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

      {/* Member Types */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              أعضاء المجتمع
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">من في المجتمع؟</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {memberTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:shadow-lg animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-lg font-bold text-primary">{type.count}</CardDescription>
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">لماذا تنضم للمجتمع؟</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary hover:shadow-md animate-in fade-in zoom-in duration-500"
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
              <CardTitle className="text-3xl font-bold md:text-4xl">جاهز للانضمام؟</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                كن جزءاً من مجتمع تعليمي نشط وداعم يساعدك على النجاح
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="transition-all hover:scale-105">
                <Share2 className="ml-2 h-5 w-5" />
                انضم الآن مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
