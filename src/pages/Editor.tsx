import { Flex, IconButton, Stack, Tooltip, useColorMode } from "@chakra-ui/core"
import React, { useContext, useState } from "react"
import MdEditor from "../components/mde"
import { DocumentContext } from "../components/mde/DocumentProvider"
import MdView from "../components/mdv"
import { FullWindowContext } from "../providers/FullWindow"

const EditorPage: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [freeze, setFreeze] = useState(false)
  const { defaultValue, updateValue } = useContext(DocumentContext)
  const { fullWindow } = useContext(FullWindowContext)

  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width={fullWindow ? "100%" : "54rem"}
        height={fullWindow ? "100%" : "90vh"}
        position="relative"
      >
        <Stack position="absolute" right="15px" bottom="5" zIndex={100}>
          <Tooltip
            position="relative"
            hasArrow
            placement="left"
            aria-label="toggle mdview"
            label={`${freeze ? "Open" : "Close"} live preview.`}
            zIndex={100}
          >
            <IconButton
              mb="2"
              flexBasis="flex-start"
              aria-label="toggle view"
              icon={freeze ? "view" : "view-off"}
              size="sm"
              variantColor={"cyan"}
              variant="outline"
              onClick={() => setFreeze((prev) => !prev)}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            placement="left"
            aria-label="toggle theme"
            label={`Change theme to ${
              colorMode === "dark" ? "light" : "dark"
            } mode`}
            zIndex={100}
          >
            <IconButton
              flexBasis="flex-start"
              aria-label="toggle theme"
              size="sm"
              icon={colorMode === "dark" ? "sun" : "moon"}
              variantColor={"cyan"}
              variant="outline"
              onClick={toggleColorMode}
            />
          </Tooltip>
        </Stack>
        <MdEditor defaultValue={defaultValue} updateValue={updateValue} />
        {!freeze && <MdView />}
      </Flex>
    </Flex>
  )
}

export default EditorPage
