import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

export const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <section>
            {t('О сайте')}
        </section>
    );
};
