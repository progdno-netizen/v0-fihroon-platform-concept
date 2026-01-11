"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, Settings } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-card border border-border rounded-3xl p-8 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-32 h-32 border-4 border-primary/20">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="text-3xl">أح</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-right">
                <h1 className="text-3xl font-bold mb-2">أحمد محمد</h1>
                <p className="text-muted-foreground mb-4">طالب في المرحلة الثانوية - الرياض</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">طالب متميز</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">عضو نشط</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Settings className="ml-2 h-4 w-4" />
                  الإعدادات
                </Button>
                <Button size="sm" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "حفظ" : "تعديل الملف"}
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <Tabs defaultValue="info" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-card border border-border h-12">
              <TabsTrigger value="info" className="gap-2">
                <User className="h-4 w-4" />
                المعلومات
              </TabsTrigger>
              <TabsTrigger value="education" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                التعليم
              </TabsTrigger>
              <TabsTrigger value="achievements" className="gap-2">
                <Award className="h-4 w-4" />
                الإنجازات
              </TabsTrigger>
              <TabsTrigger value="activity" className="gap-2">
                <Briefcase className="h-4 w-4" />
                النشاط
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                  <CardDescription>معلوماتك الأساسية وبيانات الاتصال</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullname">الاسم الكامل</Label>
                      <div className="relative">
                        <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="fullname" defaultValue="أحمد محمد" className="pr-10" disabled={!isEditing} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          defaultValue="ahmed@example.com"
                          className="pr-10"
                          dir="ltr"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" defaultValue="0501234567" className="pr-10" dir="ltr" disabled={!isEditing} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">الموقع</Label>
                      <div className="relative">
                        <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="location" defaultValue="الرياض، السعودية" className="pr-10" disabled={!isEditing} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">نبذة عني</Label>
                    <Textarea
                      id="bio"
                      defaultValue="طالب متحمس للتعلم، أهتم بالعلوم والتقنية والبرمجة"
                      className="min-h-[100px]"
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>المسار التعليمي</CardTitle>
                  <CardDescription>الدورات والشهادات التي أكملتها</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "البرمجة بلغة Python", progress: 85, badge: "جاري الإنجاز" },
                      { title: "مقدمة في الذكاء الاصطناعي", progress: 100, badge: "مكتمل" },
                      { title: "التصميم الجرافيكي", progress: 60, badge: "جاري الإنجاز" },
                    ].map((course, idx) => (
                      <div key={idx} className="border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{course.title}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              course.progress === 100
                                ? "bg-green-500/10 text-green-500"
                                : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {course.badge}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{course.progress}% مكتمل</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "متعلم نشط", desc: "أكمل 5 دورات", icon: "🎓" },
                  { title: "باحث متميز", desc: "نشر 3 أبحاث", icon: "🔬" },
                  { title: "مبدع محترف", desc: "شارك 10 مشاريع", icon: "🎨" },
                  { title: "عضو فعال", desc: "ساعد 50 متعلم", icon: "🤝" },
                  { title: "مستكشف", desc: "جرب 15 أداة", icon: "🚀" },
                  { title: "متفوق", desc: "حقق أعلى الدرجات", icon: "⭐" },
                ].map((achievement, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                      <div className="text-5xl mb-3">{achievement.icon}</div>
                      <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>النشاط الأخير</CardTitle>
                  <CardDescription>أحدث أنشطتك على المنصة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "أكمل درس", item: "مقدمة في البرمجة", time: "منذ ساعتين" },
                      { action: "شارك مشروع", item: "تطبيق حاسبة بسيط", time: "منذ 5 ساعات" },
                      { action: "حصل على شهادة", item: "الذكاء الاصطناعي", time: "أمس" },
                      { action: "انضم لمجموعة", item: "مطورو Python", time: "منذ يومين" },
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-4 pb-4 border-b border-border last:border-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {activity.action} <span className="text-primary">{activity.item}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
