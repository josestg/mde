import React, { useCallback, useState } from "react"

export const FullWindowContext = React.createContext({
  fullWindow: false,
  toggleFullWindow: () => {},
})

const FullWindowProvider: React.FC = ({ children }) => {
  const [state, setstate] = useState(false)

  const toggleFullWindow = useCallback(() => setstate((p) => !p), [])

  return (
    <FullWindowContext.Provider
      value={{
        fullWindow: state,
        toggleFullWindow,
      }}
    >
      {children}
    </FullWindowContext.Provider>
  )
}

export default FullWindowProvider
