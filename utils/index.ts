import { dsaBlogConfig, languages } from "@/constants";
import { BlogsConfigType, LanguageType } from "@/types";

export const isLanguage = (language: LanguageType): boolean => {
  return languages.includes(language);
};

export const getDsaBlogConfig = (language: LanguageType): BlogsConfigType => {
  if (!isLanguage(language)) throw Error("Not language found!");
  return dsaBlogConfig[language];
};
