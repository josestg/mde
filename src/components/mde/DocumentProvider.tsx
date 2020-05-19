import React, { useCallback, useState } from "react"

const defaultValue = `
# Markdown Editor

Lorem ipsum dolor sit __amet__, _consectetur_ ~~adipiscing~~ elit. Curabitur tincidunt.

## Code Highlighting
\`\`\`jsx{2}
ReactDOM.render(
	<App />,
  document.getElementById("root")
)
\`\`\`

## Latex

$$$
\\int_0^1{\\frac{1}{x} \\ dx}
$$$

## Table
| Column A | Column B|
|:---|:---:|
|Align Left|Aligin Center|

`

export const DocumentContext = React.createContext({
  defaultValue: defaultValue,
  value: "",

  updateValue: (_: string) => {},
})

const DocumentProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState(defaultValue)

  const updateValue = useCallback((value: string) => {
    setValue(value)
  }, [])

  return (
    <DocumentContext.Provider
      value={{
        value,
        defaultValue,
        updateValue,
      }}
    >
      {children}
    </DocumentContext.Provider>
  )
}

export default DocumentProvider
