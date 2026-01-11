import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Video } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveCard } from "@/components/interactive-card"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "ورشة: البرمجة بلغة Python للمبتدئين",
      description: "ورشة تفاعلية لتعلم أساسيات البرمجة بلغة بايثون من الصفر",
      date: "2026-01-15",
      time: "18:00 - 20:00",
      location: "عبر الإنترنت",
      type: "online",
      attendees: 145,
      category: "برمجة",
      status: "upcoming",
    },
    {
      id: 2,
      title: "ندوة: مستقبل الذكاء الاصطناعي في التعليم",
      description: "نقاش مع خبراء حول تأثير الذكاء الاصطناعي على التعليم",
      date: "2026-01-20",
      time: "19:00 - 21:00",
      location: "الرياض - مركز الملك عبدالله المالي",
      type: "inperson",
      attendees: 89,
      category: "تقنية",
      status: "upcoming",
    },
    {
      id: 3,
      title: "هاكاثون فِهرون 2026",
      description: "مسابقة برمجية لبناء حلول تعليمية مبتكرة",
      date: "2026-01-25",
      time: "09:00 - 18:00",
      location: "جدة - واحة جدة للعلوم والتقنية",
      type: "inperson",
      attendees: 250,
      category: "مسابقة",
      status: "upcoming",
    },
    {
      id: 4,
      title: "دورة: التصميم الجرافيكي المتقدم",
      description: "دورة متخصصة في التصميم باستخدام أدوبي فوتوشوب وإليستريتور",
      date: "2026-02-01",
      time: "17:00 - 19:00",
      location: "عبر الإنترنت",
      type: "online",
      attendees: 178,
      category: "تصميم",
      status: "upcoming",
    },
    {
      id: 5,
      title: "لقاء: كيف تبني بورتفوليو احترافي",
      description: "نصائح عملية لبناء سيرة ذاتية ومعرض أعمال يجذب أصحاب العمل",
      date: "2026-02-10",
      time: "20:00 - 21:30",
      location: "عبر الإنترنت",
      type: "online",
      attendees: 320,
      category: "مهارات",
      status: "upcoming",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <ScrollReveal animation="slide-down">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">الفعاليات القادمة</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="text-primary">فعاليات</span> وورش عمل
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              انضم إلى ورش العمل والفعاليات التعليمية وتواصل مع المجتمع
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Events List */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto space-y-6">
          {events.map((event, idx) => (
            <ScrollReveal key={event.id} animation="slide-right" delay={idx * 100}>
              <InteractiveCard>
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Date Box */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-center min-w-[120px]">
                        <div className="text-primary-foreground">
                          <div className="text-4xl font-bold">{new Date(event.date).getDate()}</div>
                          <div className="text-lg mt-1">
                            {new Date(event.date).toLocaleDateString("ar-SA", { month: "short" })}
                          </div>
                          <div className="text-sm opacity-90 mt-1">{new Date(event.date).getFullYear()}</div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary">{event.category}</Badge>
                        <Badge variant={event.type === "online" ? "default" : "outline"}>
                          {event.type === "online" ? (
                            <>
                              <Video className="ml-1 h-3 w-3" />
                              عبر الإنترنت
                            </>
                          ) : (
                            <>
                              <MapPin className="ml-1 h-3 w-3" />
                              حضوري
                            </>
                          )}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} مسجل</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button className="gap-2">
                          سجل الآن
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
