
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedSection from '@/components/home/FeaturedSection';
import PromoSection from '@/components/home/PromoSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <PromoSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
