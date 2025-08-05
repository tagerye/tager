'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات الموقع */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">تاجر</div>
            <p className="text-gray-300 mb-4">
              موقع الإعلانات المبوبة الأول في اليمن. اكتشف أفضل الصفقات واعثر على ما تبحث عنه.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">عن تاجر</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">كيف يعمل الموقع</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">الأسعار</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-white transition-colors">نصائح الأمان</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* الأقسام الرئيسية */}
          <div>
            <h3 className="text-lg font-semibold mb-4">الأقسام الرئيسية</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/cars" className="text-gray-300 hover:text-white transition-colors">السيارات</Link></li>
              <li><Link href="/categories/real-estate" className="text-gray-300 hover:text-white transition-colors">العقارات</Link></li>
              <li><Link href="/categories/electronics" className="text-gray-300 hover:text-white transition-colors">الإلكترونيات</Link></li>
              <li><Link href="/categories/jobs" className="text-gray-300 hover:text-white transition-colors">الوظائف</Link></li>
              <li><Link href="/categories/services" className="text-gray-300 hover:text-white transition-colors">الخدمات</Link></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات الاتصال</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@tager.ye</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+967 1 234567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">صنعاء، اليمن</span>
              </div>
            </div>
          </div>
        </div>

        {/* الخط السفلي */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 تاجر. جميع الحقوق محفوظة.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">شروط الاستخدام</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">سياسة ملفات تعريف الارتباط</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}