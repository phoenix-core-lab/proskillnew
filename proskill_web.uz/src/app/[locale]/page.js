import AdvantagesCardsBlock from '@/components/advantagesCardsBlock';
import MainBlockSlider from '@/components/mainBlock';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className='homePage'>
      <div className='container'>
         <MainBlockSlider/>
         <AdvantagesCardsBlock/>
      </div>
    </div>
  );
}



