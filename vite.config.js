import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MonacoEditorPlugin from 'vite-plugin-monaco-editor'

export default defineConfig({
  plugins: [
    react(),
    MonacoEditorPlugin.default({
      languageWorkers: ['editorWorkerService', 'typescript', 'json']
    })
  ]
})
