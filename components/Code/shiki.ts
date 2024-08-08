import {
  createHighlighter,
  makeSingletonHighlighter,
  Highlighter,
} from "shiki";
import { bundledLanguages, type BundledLanguage } from "shiki/bundle/web";

interface CodeToHtmlParams {
  code: string;
  language: BundledLanguage;
}

const getHighlighter = makeSingletonHighlighter(createHighlighter);

export const codeToHtml = async ({
  code,
  language,
}: CodeToHtmlParams): Promise<string> => {
  const highlighter: Highlighter = await getHighlighter({
    themes: ["houston"],
    langs: [...Object.keys(bundledLanguages)],
  });

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      dark: "houston",
      light: "houston",
    },
  });
};
