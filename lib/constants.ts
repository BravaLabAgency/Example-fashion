export const contactEmail = "bravalabagency@gmail.com";
export const mailtoHref = `mailto:${contactEmail}`;

export const languages = [
  { code: "ca", label: "Català", short: "CA" },
  { code: "es", label: "Castellano", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" }
] as const;

export type Language = (typeof languages)[number]["code"];

export const defaultLang: Language = "es";

export function isLanguage(value: string): value is Language {
  return languages.some((language) => language.code === value);
}
