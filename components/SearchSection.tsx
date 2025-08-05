'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin } from 'lucide-react';

export default function SearchSection() {
  const yemeniGovernorates = [
    'صنعاء', 'عدن', 'تعز', 'الحديدة', 'إب', 'ذمار', 'حضرموت', 'أبين',
    'الجوف', 'مأرب', 'البيضاء', 'لحج', 'شبوة', 'المحويت', 'حجة',
    'صعدة', 'عمران', 'الضالع', 'ريمة', 'المهرة', 'سقطرى'
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            اكتشف أفضل الصفقات في اليمن
          </h1>
          <p className="text-xl text-gray-600">
            آلاف الإعلانات في جميع المحافظات اليمنية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="جميع الأقسام" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cars">السيارات</SelectItem>
                  <SelectItem value="real-estate">العقارات</SelectItem>
                  <SelectItem value="electronics">الإلكترونيات</SelectItem>
                  <SelectItem value="jobs">الوظائف</SelectItem>
                  <SelectItem value="services">الخدمات</SelectItem>
                  <SelectItem value="animals">الحيوانات</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="جميع المحافظات" />
                </SelectTrigger>
                <SelectContent>
                  {yemeniGovernorates.map((gov) => (
                    <SelectItem key={gov} value={gov}>{gov}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="نوع الإعلان" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sell">للبيع</SelectItem>
                  <SelectItem value="buy">مطلوب شراء</SelectItem>
                  <SelectItem value="rent">للإيجار</SelectItem>
                  <SelectItem value="job">وظائف</SelectItem>
                </SelectContent>
              </Select>

              <Button className="h-12 haraj-blue text-white hover:bg-blue-700">
                بحث متقدم
              </Button>
            </div>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50,000+</div>
            <div className="text-gray-600">إعلان نشط</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">15,000+</div>
            <div className="text-gray-600">مستخدم مسجل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">21</div>
            <div className="text-gray-600">محافظة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-gray-600">إعلان يومياً</div>
          </div>
        </div>
      </div>
    </section>
  );
}