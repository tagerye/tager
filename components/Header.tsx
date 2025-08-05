'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, User, Plus, Bell, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* شريط التطبيقات العلوي */}
      <div className="bg-orange-400 py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 text-white text-sm">
            <span>قسم الإعلانات في منصة حراج يتم تشغيله بواسطة</span>
            <span className="font-bold">Deal</span>
            <span>رخصة هيئة الاتصالات والتقنية رقم 1200006871</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <img src="https://via.placeholder.com/120x40/000000/FFFFFF?text=App+Store" alt="App Store" className="h-8" />
            <img src="https://via.placeholder.com/120x40/000000/FFFFFF?text=Google+Play" alt="Google Play" className="h-8" />
            <img src="https://via.placeholder.com/120x40/000000/FFFFFF?text=Huawei" alt="Huawei" className="h-8" />
          </div>
        </div>
      </div>

      {/* الهيدر الرئيسي */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* اللوجو */}
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-bold text-blue-600">تاجر</div>
          </Link>

          {/* شريط البحث */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="ابحث عن أي شيء..."
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* القائمة العلوية */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              أضف إعلان
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              تسجيل الدخول
            </Button>
          </div>
        </div>

        {/* القائمة السفلية */}
        <nav className="mt-4 border-t pt-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <Link href="/categories/cars" className="custom-link font-medium">السيارات</Link>
            <Link href="/categories/real-estate" className="custom-link font-medium">العقارات</Link>
            <Link href="/categories/electronics" className="custom-link font-medium">الإلكترونيات</Link>
            <Link href="/categories/jobs" className="custom-link font-medium">الوظائف</Link>
            <Link href="/categories/services" className="custom-link font-medium">الخدمات</Link>
            <Link href="/categories/animals" className="custom-link font-medium">الحيوانات</Link>
            <Link href="/categories/fashion" className="custom-link font-medium">الأزياء</Link>
            <Link href="/categories/sports" className="custom-link font-medium">الرياضة</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}