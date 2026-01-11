"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  BookOpen,
  Brain,
  Palette,
  Users,
  ShoppingBag,
  Globe,
  Shield,
  Sparkles,
  Link2,
  Wrench,
  FlaskConical,
  Bot,
  BarChart3,
  Grid3x3,
  Gamepad2,
  Award,
} from "lucide-react"

const features = [
  {
    title: "التعليم والتعلم",
    items: [
      { icon: Link2, title: "الربط مع المنصات", href: "/features/platform-integration" },
      { icon: BookOpen, title: "المناهج التعليمية", href: "/features/curriculum" },
      { icon: Brain, title: "الذكاء الاصطناعي", href: "/features/ai-learning" },
      { icon: Gamepad2, title: "التعلم بالألعاب", href: "/features/gamification" },
    ],
  },
  {
    title: "البحث والإبداع",
    items: [
      { icon: FlaskConical, title: "البحث العلمي", href: "/features/research" },
      { icon: Grid3x3, title: "المتحف الرقمي", href: "/features/digital-museum" },
      { icon: Palette, title: "المهارات والهوايات", href: "/features/skills" },
      { icon: Wrench, title: "الأدوات الإبداعية", href: "/features/creative-tools" },
    ],
  },
  {
    title: "الأدوات والإدارة",
    items: [
      { icon: Bot, title: "المساعد الذكي", href: "/features/smart-assistant" },
      { icon: BarChart3, title: "لوحة التحكم", href: "/features/dashboard" },
      { icon: Award, title: "البورتفوليو الذكي", href: "/features/portfolio" },
      { icon: Sparkles, title: "الصحة الذهنية", href: "/features/mental-health" },
    ],
  },
  {
    title: "المجتمع والأمان",
    items: [
      { icon: Users, title: "المجتمع التعليمي", href: "/features/community" },
      { icon: Globe, title: "مجتمع عالمي", href: "/features/global-community" },
      { icon: ShoppingBag, title: "المتجر الرقمي", href: "/features/marketplace" },
      { icon: Shield, title: "الخصوصية والأمان", href: "/features/security" },
    ],
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-all hover:scale-105">
          <img src="/images/image.png" alt="Fihroon" className="h-10 w-auto" />
          <span className="text-xl font-bold">فِهرون</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  الرئيسية
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>الخصائص</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-3 p-4 md:grid-cols-2">
                  {features.map((category, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-sm font-semibold text-primary">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-md p-3 text-sm transition-colors hover:bg-accent"
                            >
                              <item.icon className="mt-0.5 h-5 w-5 text-primary" />
                              <div>
                                <div className="font-medium group-hover:text-primary">{item.title}</div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  عن المنصة
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm">
            تسجيل الدخول
          </Button>
          <Button size="sm">ابدأ الآن</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img src="/images/image.png" alt="Fihroon" className="h-8 w-auto" />
                فِهرون
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>

              {features.map((category, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="px-3 text-sm font-semibold text-primary">{category.title}</h4>
                  {category.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="space-y-2 border-t pt-4">
                <Button variant="ghost" className="w-full" onClick={() => setIsOpen(false)}>
                  تسجيل الدخول
                </Button>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
