import { useTranslation } from 'react-i18next';

export default function Categories() {
  const { t } = useTranslation();

  const categories = [
    { name: t('vegetable') },
    { name: t('fruit') },
    { name: t('herb') },
    { name: t('rootCrop') },
  ];

  return categories;
}
