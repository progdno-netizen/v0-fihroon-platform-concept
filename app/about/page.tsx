import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Lightbulb, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-block mb-4">
            <Image
              src="/images/image.png"
              alt="Fihroon Logo"
              width={120}
              height={120}
              className="mx-auto animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            عن منصة <span className="text-primary">فِهرون</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            منصة تعليمية سعودية شاملة تجمع التعليم والبحث والأدوات والمهارات والهوايات في مكان واحد
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">رؤيتنا</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              أن نكون المنصة التعليمية الرائدة في المملكة العربية السعودية والعالم العربي، نوفر بيئة تعليمية متكاملة
              تجمع بين التعليم الأكاديمي والمهارات العملية والبحث العلمي في فضاء رقمي واحد يخدم جميع فئات المجتمع.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">مهمتنا</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              تمكين المتعلمين والباحثين والمبدعين من خلال توفير أدوات وموارد تعليمية متطورة، ودعم الذكاء الاصطناعي،
              وبيئة مجتمعية تفاعلية تساعدهم على تحقيق أهدافهم التعليمية والمهنية والإبداعية.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">قيمنا الأساسية</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "المجتمع", desc: "بناء مجتمع تعليمي تفاعلي ومترابط" },
              { icon: Target, title: "التميز", desc: "السعي للتميز في جميع خدماتنا" },
              { icon: Globe, title: "الشمولية", desc: "منصة شاملة لجميع احتياجاتك التعليمية" },
              { icon: Lightbulb, title: "الابتكار", desc: "استخدام أحدث التقنيات والذكاء الاصطناعي" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6 text-center">قصتنا</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              بدأت فكرة فِهرون من حاجة ملحة لتوحيد المصادر التعليمية المتفرقة في منصة واحدة شاملة. كنا نلاحظ أن الطلاب
              والباحثين يضطرون للتنقل بين عشرات المنصات للحصول على احتياجاتهم التعليمية والبحثية.
            </p>
            <p>
              من هنا ولدت فِهرون - منصة متكاملة تجمع التعليم الأكاديمي، البحث العلمي، الأدوات الإبداعية، المهارات
              العملية، والمحتوى الثقافي في مكان واحد. نسعى لتوفير تجربة تعليمية سلسة ومتكاملة تلبي جميع احتياجات المتعلم
              السعودي والعربي.
            </p>
            <p>
              اليوم، فِهرون ليست مجرد منصة تعليمية، بل هي بيئة متكاملة تدعم رحلتك التعليمية من البداية حتى الاحتراف، مع
              دعم الذكاء الاصطناعي، وأدوات متطورة، ومجتمع تفاعلي يساعدك على تحقيق أحلامك.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-4xl font-bold">انضم إلى مجتمع فِهرون</h2>
          <p className="text-xl text-muted-foreground">ابدأ رحلتك التعليمية اليوم واستكشف عالماً من المعرفة والإبداع</p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg" asChild>
              <Link href="/auth/register">
                سجل الآن
                <ArrowRight className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
