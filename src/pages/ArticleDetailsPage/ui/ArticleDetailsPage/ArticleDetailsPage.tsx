import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useCallback } from 'react';
import { AddCommentForm } from 'features/AddComentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <AddCommentForm onSendComment={onSendComment} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};
