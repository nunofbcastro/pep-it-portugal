import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

// Default to dark or system preference if in browser
const getInitialTheme = (): Theme => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as Theme;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light'; // Default to light if no preference
};

export const themeStore = atom<Theme>(getInitialTheme());

export function toggleTheme() {
    const currentTheme = themeStore.get();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    themeStore.set(newTheme);

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', newTheme);
    }

    if (typeof document !== 'undefined') {
        const root = document.documentElement;
        if (newTheme === 'dark') {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }
    }
}
