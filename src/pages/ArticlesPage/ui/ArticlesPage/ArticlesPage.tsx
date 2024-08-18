import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

export const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.SMALL}
                articles={[]}
            />
        </div>
    );
});
