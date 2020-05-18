import { Box, Flex, useColorMode } from "@chakra-ui/core"
import styled from "@emotion/styled"
import React, { useContext, useEffect, useRef, useState } from "react"
import { DocumentContext } from "../mde/DocumentProvider"
import { parseToHtml } from "./engine/parser"
import MdViewThemeProvider from "./MdViewThemeProvider"

interface MdViewProps {}

const MdView: React.FC<MdViewProps> = () => {
  const { colorMode } = useColorMode()
  const { value } = useContext(DocumentContext)
  const [content, setContent] = useState("")
  const firstRender = useRef(true)

  useEffect(() => {
    const content = parseToHtml(value)
    if (firstRender.current) {
      // 0.1s before animation end
      setTimeout(() => setContent(content), 600)
      firstRender.current = false
    } else {
      setContent(content)
    }
  }, [value])

  return (
    <Flex
      as={SlideFromLeft}
      flex={1}
      flexDirection="column"
      border="2px"
      borderLeft="0"
      overflowY="auto"
      position="relative"
      borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <MdViewThemeProvider colorMode={colorMode}>
        <Box
          wordBreak="break-word"
          width="100%"
          px="4"
          dangerouslySetInnerHTML={{ __html: content }}
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
  &::-webkit-scrollbar {
    display: none; // hide scroll-bar
  }
`

export default MdView
