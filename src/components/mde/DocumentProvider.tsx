import React, { useState } from "react"

const defaultValue = "# Mardown Editor"

export const DocumentContext = React.createContext({
  defaultValue: defaultValue,
  value: "",

  updateValue: (_: string) => {},
})

const DocumentProvider: React.FC = ({ children }) => {
  const [value, updateValue] = useState(defaultValue)

  return (
    <DocumentContext.Provider
      value={{
        value,
        defaultValue: defaultValue,
        updateValue,
      }}
    >
      {children}
    </DocumentContext.Provider>
  )
}

export default DocumentProvider
