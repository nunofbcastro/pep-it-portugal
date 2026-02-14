import { languages, defaultLang, ui } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang && lang in languages) return lang as keyof typeof languages;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
