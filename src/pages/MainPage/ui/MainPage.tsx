import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <section>
            {t('Главная страница')}
        </section>
    );
};

export default MainPage;
