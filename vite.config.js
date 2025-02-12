import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from 'path'

export default defineConfig({
  "plugins": [react()],
  "define": {
    'process.env': {}
  },
  "compilerOptions": {
    "baseUrl": "./src",  // Adiciona baseUrl para a pasta 'src'
    "paths": {
      "@/*": ["*"]  // Mapeia o alias '@' para qualquer coisa dentro de 'src'
    }
  }
})

