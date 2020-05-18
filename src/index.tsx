import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from "@chakra-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import DocumentProvider from "./components/mde/DocumentProvider"
import FullWindowProvider from "./providers/FullWindow"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <CSSReset />
        <DocumentProvider>
          <FullWindowProvider>
            <App />
          </FullWindowProvider>
        </DocumentProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
