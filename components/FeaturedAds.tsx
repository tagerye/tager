'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

const featuredAds = [
  {
    id: 1,
    title: 'تويوتا كامري 2020 فل كامل',
    price: '18,000,000 ريال',
    location: 'صنعاء',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'سيارات',
    featured: true,
    views: 1250,
    timeAgo: 'منذ ساعتين'
  },
  {
    id: 2,
    title: 'شقة للإيجار في حي الصافية',
    price: '350,000 ريال شهرياً',
    location: 'عدن',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'عقارات',
    featured: true,
    views: 890,
    timeAgo: 'منذ 4 ساعات'
  },
  {
    id: 3,
    title: 'آيفون 14 برو ماكس 256 جيجا',
    price: '1,200,000 ريال',
    location: 'تعز',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'إلكترونيات',
    featured: false,
    views: 2100,
    timeAgo: 'منذ يوم'
  },
  {
    id: 4,
    title: 'مطلوب مهندس برمجيات',
    price: '500,000 ريال شهرياً',
    location: 'الحديدة',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'وظائف',
    featured: false,
    views: 567,
    timeAgo: 'منذ 3 أيام'
  },
  {
    id: 5,
    title: 'جهاز لابتوب ديل XPS 13',
    price: '950,000 ريال',
    location: 'إب',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'إلكترونيات',
    featured: true,
    views: 445,
    timeAgo: 'منذ 6 ساعات'
  },
  {
    id: 6,
    title: 'قطة شيرازي للبيع',
    price: '80,000 ريال',
    location: 'ذمار',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'حيوانات',
    featured: false,
    views: 234,
    timeAgo: 'منذ يومين'
  }
];

export default function FeaturedAds() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">الإعلانات المميزة</h2>
          <p className="text-lg text-gray-600">أحدث الإعلانات المضافة في الموقع</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAds.map((ad) => (
            <Link key={ad.id} href={`/ads/${ad.id}`}>
              <Card className="hover-scale cursor-pointer overflow-hidden border-2 hover:border-blue-300 transition-all duration-200">
                <div className="relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-48 object-cover"
                  />
                  {ad.featured && (
                    <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600">
                      مميز
                    </Badge>
                  )}
                  <button className="absolute top-3 left-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {ad.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                    {ad.title}
                  </h3>
                  
                  <div className="text-2xl font-bold text-blue-600 mb-3">
                    {ad.price}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {ad.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {ad.timeAgo}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                    <Eye className="w-4 h-4" />
                    {ad.views.toLocaleString()} مشاهدة
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/ads" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            عرض جميع الإعلانات
          </Link>
        </div>
      </div>
    </section>
  );
}