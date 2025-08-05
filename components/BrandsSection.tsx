'use client';

import { Card, CardContent } from '@/components/ui/card';

const carBrands = [
  // الصف الأول
  [
    { name: 'Ferrari', logo: '🏎️' },
    { name: 'FAW', logo: '🚗' },
    { name: 'Daihatsu', logo: '🚘' }
  ],
  // الصف الثاني
  [
    { name: 'Geely', logo: '🚙' },
    { name: 'Mazda', logo: '🚗' },
    { name: 'Fiat', logo: '🚘' }
  ],
  // الصف الثالث
  [
    { name: 'Geovw', logo: '🚗' },
    { name: 'Great Wall', logo: '🚙' },
    { name: 'Renault', logo: '🚘' }
  ],
  // الصف الرابع
  [
    { name: 'Mercury', logo: '🚗' },
    { name: 'Lamborghini', logo: '🏎️' },
    { name: 'Jaguar', logo: '🚘' }
  ],
  // الصف الخامس
  [
    { name: 'Opel', logo: '🚗' },
    { name: 'MG', logo: '🚘' },
    { name: 'Maserati', logo: '🏎️' }
  ],
  // الصف السادس
  [
    { name: 'Volkswagen', logo: '🚗' },
    { name: 'Land Rover', logo: '🚙' },
    { name: 'Honda', logo: '🚘' }
  ],
  // الصف السابع
  [
    { name: 'Hyundai', logo: '🚗' },
    { name: 'Mitsubishi', logo: '🚘' },
    { name: 'Mazda', logo: '🚙' }
  ],
  // الصف الثامن
  [
    { name: 'Suzuki', logo: '🚗' },
    { name: 'Infiniti', logo: '🚘' },
    { name: 'Jeep', logo: '🚙' }
  ],
  // الصف التاسع
  [
    { name: 'Porsche', logo: '🏎️' },
    { name: 'Chrysler', logo: '🚗' },
    { name: 'KIA', logo: '🚘' }
  ],
  // الصف العاشر
  [
    { name: 'Changan', logo: '🚗' },
    { name: 'Buick', logo: '🚘' },
    { name: 'Aston Martin', logo: '🏎️' }
  ],
  // الصف الحادي عشر
  [
    { name: 'Daewoo', logo: '🚗' },
    { name: 'Citroën', logo: '🚘' },
    { name: 'Chery', logo: '🚙' }
  ]
];

const techBrands = [
  { name: 'Canon', logo: '📷' },
  { name: 'Samsung', logo: '📱' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Nokia', logo: '📱' },
  { name: 'Microsoft', logo: '💻' },
  { name: 'Sony', logo: '🎮' },
  { name: 'LG', logo: '📺' }
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* قسم العلامات التجارية للتقنية */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">العلامات التجارية المميزة</h3>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-6">
            {techBrands.map((brand, index) => (
              <Card key={index} className="hover-scale cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{brand.logo}</div>
                  <div className="text-sm font-medium text-gray-700">{brand.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* قسم علامات السيارات */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">علامات السيارات</h3>
          <div className="space-y-4">
            {carBrands.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-6">
                {row.map((brand, brandIndex) => (
                  <Card key={brandIndex} className="hover-scale cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{brand.logo}</div>
                      <div className="text-sm font-medium text-gray-700">{brand.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* أقسام الحيوانات */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">أقسام الحيوانات</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'شقق للإيجار', icon: '🐕' },
              { name: 'أراضي للبيع', icon: '🐎' },
              { name: 'تجارة البيع', icon: '🐪' },
              { name: 'هلل للإيجار', icon: '🐐' },
              { name: 'هلل للبيع', icon: '🐓' },
              { name: 'شقق للبيع', icon: '🐱' },
              { name: 'محلات للإيجار', icon: '🦅' },
              { name: 'محلات للتنفيذ', icon: '🐑' },
              { name: 'عماره للإيجار', icon: '🐄' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
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