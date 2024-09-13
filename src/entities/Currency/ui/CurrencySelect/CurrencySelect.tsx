import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    /* return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    ); */

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Валюта')}
            label={t('Валюта')}
            items={options}
            readonly={readonly}
            direction="top right"
        />
    );
});
