import React from 'react';
import { useTranslations } from 'next-intl';

interface IUnselectedSector {}

export const UnselectedSector: React.FC<IUnselectedSector> = (props) => {
  const t = useTranslations();

  return (
    <div className={'flex flex-col space-y-5 justify-center items-center w-full min-h-[600px]'}>
      <div className="text-base-light-gray max-w-[250px] md:max-w-[300px] text-center">
        {t('Вы не выбрали ни одного сектора')}
      </div>
    </div>
  );
};
