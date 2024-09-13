import { useContext, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';
import { Theme } from '../../const/theme';
import { ThemeContext } from '../context/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme || Theme.LIGHT;
    }, [theme]);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
