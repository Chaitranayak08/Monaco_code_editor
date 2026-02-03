import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import { registerIntellisense } from "../intellisense";

const CodeEditor = () => {
  const editorRef = useRef(null);

  const [value, setValue] = useState(CODE_SNIPPETS["python"]);
  const [language, setLanguage] = useState("python");

  // When editor loads
  const onMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.focus();

    window.monaco = monaco;

    registerIntellisense(monaco, language);
  };

  // When language changes from dropdown
  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);

    if (window.monaco) {
      registerIntellisense(window.monaco, lang);
    }
  };

  // Re-register suggestions if language state changes
  useEffect(() => {
    if (window.monaco) {
      registerIntellisense(window.monaco, language);
    }
  }, [language]);

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />

          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            value={value}
            onMount={onMount}
            onChange={(val) => setValue(val)}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              suggestOnTriggerCharacters: true,
               quickSuggestions: {
                        other: true,
                        comments: false,
                        strings: false,
                        },

                parameterHints: { enabled: true },
                 autoClosingBrackets: "always",
                autoClosingQuotes: "always",
                autoIndent: "advanced",
                formatOnType: true,
            wordBasedSuggestions: "allDocuments",
            scrollBeyondLastLine: false,

            }}
          />
        </Box>

        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
