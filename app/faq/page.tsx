import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "عام",
      questions: [
        {
          q: "ما هي منصة فِهرون؟",
          a: "فِهرون هي منصة تعليمية سعودية شاملة تجمع التعليم والبحث والأدوات والمهارات والهوايات في مكان واحد، مع دعم الذكاء الاصطناعي وأدوات متطورة.",
        },
        {
          q: "هل المنصة مجانية؟",
          a: "نعم، توفر فِهرون خدمات مجانية أساسية، بالإضافة إلى خطط اشتراك مدفوعة توفر ميزات إضافية ومحتوى حصري.",
        },
        {
          q: "من يمكنه استخدام المنصة؟",
          a: "فِهرون مصممة للجميع - الطلاب، المعلمين، الباحثين، المبدعين، والمهتمين بالتعلم المستمر من جميع الأعمار والمستويات.",
        },
      ],
    },
    {
      category: "التعليم",
      questions: [
        {
          q: "ما المناهج المتوفرة على المنصة؟",
          a: "نوفر جميع المناهج السعودية لجميع المراحل الدراسية، بالإضافة إلى دورات تعليمية في مختلف المجالات العلمية والأدبية والتقنية.",
        },
        {
          q: "كيف يساعدني المساعد الذكي في التعلم؟",
          a: "المساعد الذكي يوفر شروحات مخصصة، يجيب على أسئلتك، يساعدك في حل الواجبات، ويقترح مصادر تعليمية مناسبة لمستواك.",
        },
        {
          q: "هل يمكنني الحصول على شهادات معتمدة؟",
          a: "نعم، نوفر شهادات معتمدة عند إكمال الدورات والبرامج التعليمية المختلفة على المنصة.",
        },
      ],
    },
    {
      category: "البحث والأدوات",
      questions: [
        {
          q: "ما الأدوات البحثية المتوفرة؟",
          a: "نوفر أدوات متقدمة للبحث العلمي، تشمل الوصول لقواعد البيانات الأكاديمية، أدوات التحليل، وأدوات لإدارة المراجع والاقتباسات.",
        },
        {
          q: "كيف يمكنني استخدام الأدوات الإبداعية؟",
          a: "توفر المنصة أدوات متنوعة للتصميم، البرمجة، تحرير الفيديو، والمونتاج، يمكن الوصول إليها مباشرة من لوحة التحكم الخاصة بك.",
        },
      ],
    },
    {
      category: "المجتمع والتفاعل",
      questions: [
        {
          q: "كيف يمكنني التواصل مع متعلمين آخرين؟",
          a: "يمكنك الانضمام للمجتمع التعليمي، المشاركة في المنتديات، الانضمام لمجموعات الدراسة، والتفاعل مع المتعلمين من خلال التعليقات والمشاركات.",
        },
        {
          q: "هل يمكنني عرض أعمالي على المنصة؟",
          a: "بالتأكيد! يمكنك إنشاء بورتفوليو شخصي لعرض مشاريعك وأعمالك، ومشاركتها مع المجتمع أو أصحاب العمل.",
        },
      ],
    },
    {
      category: "الحساب والخصوصية",
      questions: [
        {
          q: "كيف أحمي خصوصيتي على المنصة؟",
          a: "نطبق أعلى معايير الأمان والخصوصية، يمكنك التحكم في إعدادات الخصوصية الخاصة بك، ونحن لا نشارك بياناتك مع أطراف ثالثة بدون إذنك.",
        },
        {
          q: "كيف أحدث معلومات حسابي؟",
          a: 'يمكنك تحديث معلوماتك الشخصية من خلال لوحة التحكم، في قسم "الإعدادات" ثم "الملف الشخصي".',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            الأسئلة <span className="text-primary">الشائعة</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول منصة فِهرون وخدماتها
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-primary/30">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${idx}-${qIdx}`}
                    className="bg-card border border-border rounded-xl px-6 hover:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary text-right py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h2>
          <p className="text-muted-foreground mb-6 text-lg">فريق الدعم لدينا جاهز لمساعدتك في أي وقت</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </section>
    </div>
  )
}
