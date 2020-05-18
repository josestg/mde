import { Box, Flex, useColorMode } from "@chakra-ui/core"
import styled from "@emotion/styled"
import React, { useContext } from "react"
import { DocumentContext } from "../mde/DocumentProvider"
import { parseToHtml } from "./engine/parser"
import MdViewThemeProvider from "./MdViewThemeProvider"

interface MdViewProps {}

const MdView: React.FC<MdViewProps> = () => {
  const { colorMode } = useColorMode()
  const { value } = useContext(DocumentContext)

  return (
    <Flex
      as={SlideFromLeft}
      flex={1}
      height="600px"
      flexDirection="column"
      border="2px"
      borderLeft="0"
      borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <MdViewThemeProvider colorMode={colorMode}>
        <Box
          wordBreak="break-word"
          width="100%"
          px="4"
          dangerouslySetInnerHTML={{ __html: parseToHtml(value) }}
        />
      </MdViewThemeProvider>
    </Flex>
  )
}

const SlideFromLeft = styled.div`
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-50%);
      flex: 0;
    }
    100% {
      transform: translateX(0);
      flex: 1;
    }
  }

  animation: 0.7s ease 0s slideInFromLeft;
`

export default MdView
