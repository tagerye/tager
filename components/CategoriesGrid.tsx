'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  Car, Home, Smartphone, Briefcase, Wrench, 
  Heart, Shirt, Gamepad2, BookOpen, Sofa,
  Bike, Watch, Baby, Utensils, Plane,
  Music, Camera, Dumbbell, Gift, Users
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'cars', name: 'السيارات', icon: Car, count: '12,450', color: 'bg-red-500' },
  { id: 'real-estate', name: 'العقارات', icon: Home, count: '8,230', color: 'bg-green-500' },
  { id: 'electronics', name: 'الإلكترونيات', icon: Smartphone, count: '15,680', color: 'bg-blue-500' },
  { id: 'jobs', name: 'الوظائف', icon: Briefcase, count: '3,420', color: 'bg-purple-500' },
  { id: 'services', name: 'الخدمات', icon: Wrench, count: '5,670', color: 'bg-orange-500' },
  { id: 'animals', name: 'الحيوانات', icon: Heart, count: '2,340', color: 'bg-pink-500' },
  { id: 'fashion', name: 'الأزياء', icon: Shirt, count: '7,890', color: 'bg-indigo-500' },
  { id: 'sports', name: 'الرياضة', icon: Gamepad2, count: '4,560', color: 'bg-teal-500' },
  { id: 'books', name: 'الكتب', icon: BookOpen, count: '1,230', color: 'bg-yellow-500' },
  { id: 'furniture', name: 'الأثاث', icon: Sofa, count: '6,780', color: 'bg-gray-500' },
  { id: 'bikes', name: 'الدراجات', icon: Bike, count: '980', color: 'bg-lime-500' },
  { id: 'watches', name: 'الساعات', icon: Watch, count: '2,100', color: 'bg-amber-500' },
  { id: 'baby', name: 'مستلزمات الأطفال', icon: Baby, count: '3,450', color: 'bg-rose-500' },
  { id: 'food', name: 'الطعام', icon: Utensils, count: '1,890', color: 'bg-emerald-500' },
  { id: 'travel', name: 'السفر', icon: Plane, count: '650', color: 'bg-sky-500' },
  { id: 'music', name: 'الموسيقى', icon: Music, count: '1,450', color: 'bg-violet-500' },
  { id: 'photography', name: 'التصوير', icon: Camera, count: '2,780', color: 'bg-cyan-500' },
  { id: 'fitness', name: 'اللياقة', icon: Dumbbell, count: '1,670', color: 'bg-red-600' },
  { id: 'gifts', name: 'الهدايا', icon: Gift, count: '890', color: 'bg-pink-600' },
  { id: 'social', name: 'العلاقات الاجتماعية', icon: Users, count: '1,200', color: 'bg-blue-600' }
];

export default function CategoriesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">تصفح الأقسام</h2>
          <p className="text-lg text-gray-600">اختر القسم المناسب للعثور على ما تبحث عنه</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <Card className="hover-scale cursor-pointer border-2 hover:border-blue-300 transition-all duration-200">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} إعلان</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* قسم الحيوانات المميز */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">قسم الحيوانات</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'شقق للإيجار', icon: '🏠' },
              { name: 'أراضي للبيع', icon: '🏞️' },
              { name: 'تجارة البيع', icon: '🏪' },
              { name: 'هلل للإيجار', icon: '🏘️' },
              { name: 'هلل للبيع', icon: '🏡' },
              { name: 'شقق للبيع', icon: '🏢' },
              { name: 'محلات للإيجار', icon: '🏬' },
              { name: 'محلات للتنفيذ', icon: '🔨' },
              { name: 'عماره للإيجار', icon: '🏛️' },
              { name: 'استراحات للبيع', icon: '🏖️' },
              { name: 'بيوت للإيجار', icon: '🏠' },
              { name: 'مزارع للبيع', icon: '🌾' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-gray-700">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}