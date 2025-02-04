import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      {/* <h1>{t('greeting', { name: 'Алекс' })}</h1>
      <p>{t('welcome')}</p> */}
    </div>
  );
}



