import { Flex, IconButton, Stack, useColorMode } from "@chakra-ui/core"
import React, { useContext, useState } from "react"
import Editor from "./components/mde"
import { DocumentContext } from "./components/mde/DocumentProvider"
import MdView from "./components/mdv"

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [freeze, setFreeze] = useState(false)
  const { defaultValue, updateValue } = useContext(DocumentContext)
  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="54rem" position="relative">
        <Stack position="absolute" left="-80px" top="0">
          <IconButton
            flexBasis="flex-start"
            aria-label="toggle theme"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={toggleColorMode}
          />
          <IconButton
            flexBasis="flex-start"
            aria-label="toggle view"
            icon="view"
            onClick={() => setFreeze((prev) => !prev)}
          />
        </Stack>
        <Editor defaultValue={defaultValue} updateValue={updateValue} />
        {freeze && <MdView />}
      </Flex>
    </Flex>
  )
}

export default App
