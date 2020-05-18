import { Flex, IconButton, useColorMode } from "@chakra-ui/core"
import React from "react"
import Editor from "./components/mde"

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="48rem" position="relative">
        <IconButton
          flexBasis="flex-start"
          aria-label="toggle theme"
          icon={colorMode === "dark" ? "sun" : "moon"}
          position="absolute"
          right="-80px"
          top="0"
          onClick={toggleColorMode}
        />
        <Editor />
      </Flex>
    </Flex>
  )
}

export default App
