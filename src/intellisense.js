import { KEYWORDS } from "./keywords";
import { SNIPPETS } from "./snippets";

export function registerIntellisense(monaco, language) {
  monaco.languages.registerCompletionItemProvider(language, {
    provideCompletionItems: () => {
      const words = (KEYWORDS[language] || []).map((w) => ({
        label: w,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: w,
        sortText: "2",
      }));

      const snippets = (SNIPPETS[language] || []).map((s) => ({
        label: s.label,
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: s.insertText,
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          sortText: "1",
      }));

      return { suggestions: [...words, ...snippets] };
    },
  });
}
