import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <section>
            {t('О сайте')}
        </section>
    );
};
