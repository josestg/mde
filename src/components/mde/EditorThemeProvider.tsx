import React from "react"
import EditorTheme from "./EditorTheme"
import { twcDarkTheme, twcLightTheme } from "./theme/twcTheme"
import { SyntaxTheme } from "./theme/types"

interface EditorThemeProviderProps {
  colorMode: "dark" | "light"
  syntaxDarkTheme?: SyntaxTheme
  syntaxLightTheme?: SyntaxTheme
}

export const EditorThemeProvider: React.FC<EditorThemeProviderProps> = ({
  children,
  colorMode,
  syntaxLightTheme,
  syntaxDarkTheme,
}) => {
  const syntaxTheme = {
    light: syntaxLightTheme || twcLightTheme,
    dark: syntaxDarkTheme || twcDarkTheme,
  }

  return (
    <EditorTheme colorMode={colorMode} syntaxTheme={syntaxTheme}>
      {children}
    </EditorTheme>
  )
}

export default EditorThemeProvider
