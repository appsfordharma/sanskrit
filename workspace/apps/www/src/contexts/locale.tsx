import { createContext, Dispatch, SetStateAction } from "react";
import { ENUM_LOCALE } from "../constants/enums";
// import langSchema from "../lang/en.json";
// import { FromSchema } from "json-schema-to-ts";

// type TypeLangSchema = FromSchema<typeof langSchema>;

export const LocaleContext = createContext<{
  locales?: ENUM_LOCALE[];
  locale: ENUM_LOCALE;
  setLocale?: Dispatch<SetStateAction<ENUM_LOCALE>>;
  // content?: TypeLangSchema;
  content?: any;
}>({
  locale: ENUM_LOCALE.EN,
});
