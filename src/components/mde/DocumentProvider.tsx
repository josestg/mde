import React, { useState, useCallback } from "react"

const defaultValue = "# Mardown Editor"

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
