'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import BrandsSection from '@/components/BrandsSection';
import Footer from '@/components/Footer';
import FeaturedAds from '@/components/FeaturedAds';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 rtl-grid">
      <Header />
      <SearchSection />
      <CategoriesGrid />
      <BrandsSection />
      <FeaturedAds />
      <Footer />
    </div>
  );
}