// https://docs.google.com/spreadsheets/d/1_ga2Im1JWIJ-KjmE520JPjsv0Z6wJEYv50cwc9gG2wU/edit#gid=0
// https://www.liquid-technologies.com/online-json-to-schema-converter

import en from "./en.json";
import hi from "./hi.json";

export const langList = {
  en: {
    name: "English",
    nativeName: "English",
    locale: "en",
  },
  hi: {
    name: "Hindi",
    nativeName: "हिंदी",
    locale: "hi",
  },
  ar: {
    name: "Arabic",
    nativeName: "العربية",
    locale: "ar",
    rtl: true,
  },
  sa: {
    name: "Sanskrit",
    nativeName: "संस्कृतम्",
    locale: "sa",
  },
};

export function getDirection(locale: string) {
  return langList[locale].rtl ? "rtl" : "ltr";
}

export const languages = {
  en,
  hi,
};

export default languages;
