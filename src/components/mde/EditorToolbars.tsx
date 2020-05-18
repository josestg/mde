import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core"
import React, { useContext } from "react"
import { FaHeading } from "react-icons/fa"
import { GoMarkdown, GoScreenFull, GoScreenNormal } from "react-icons/go"
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFunctions,
  MdHelp,
  MdImage,
  MdLink,
  MdStrikethroughS,
  MdViewModule,
} from "react-icons/md"
import { FullWindowContext } from "../../providers/FullWindow"
import { MdTypes } from "./engine/CodeMirror"

const EditorToolbarsTheme = {
  bg: {
    dark: "gray.700",
    light: "gray.200",
  },
  color: {
    dark: "gray.400",
    light: "gray.700",
  },
}

interface EditorToolbarsProps {
  handleCmd: (cmd: MdTypes) => void
}

const EditorToolbars: React.FC<EditorToolbarsProps> = ({ handleCmd }) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { toggleFullWindow, fullWindow } = useContext(FullWindowContext)

  return (
    <Stack
      isInline
      p="1"
      pr="2"
      spacing="3"
      fontSize="lg"
      display="flex"
      alignItems="center"
      bg={EditorToolbarsTheme.bg[colorMode]}
      color={EditorToolbarsTheme.color[colorMode]}
    >
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Help</DrawerHeader>

          <DrawerBody>
            <Text>Something...</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Box as={GoMarkdown} mx={2} />
      <Box
        as={FaHeading}
        fontSize="sm"
        onClick={() => handleCmd("h1")}
        cursor="pointer"
      />

      <Box
        as={MdFormatBold}
        onClick={() => handleCmd("bold")}
        cursor="pointer"
      />
      <Box
        as={MdFormatItalic}
        onClick={() => handleCmd("italic")}
        cursor="pointer"
      />

      <Box
        as={MdStrikethroughS}
        onClick={() => handleCmd("strikethrough")}
        cursor="pointer"
      />
      <Box
        as={MdFormatQuote}
        onClick={() => handleCmd("quote")}
        cursor="pointer"
      />
      <Box
        as={MdFormatListNumbered}
        onClick={() => handleCmd("list-ol")}
        cursor="pointer"
      />
      <Box as={MdLink} onClick={() => handleCmd("link")} cursor="pointer" />
      <Box
        as={MdViewModule}
        onClick={() => handleCmd("table")}
        cursor="pointer"
      />
      <Box
        as={MdFunctions}
        onClick={() => handleCmd("math")}
        cursor="pointer"
      />
      <Box as={MdCode} onClick={() => handleCmd("code")} cursor="pointer" />
      <Box as={MdImage} cursor="pointer" onClick={() => handleCmd("image")} />

      <Box ml="auto" as={MdHelp} onClick={onOpen} cursor="pointer" />
      <Box
        as={fullWindow ? GoScreenNormal : GoScreenFull}
        onClick={toggleFullWindow}
        cursor="pointer"
      />
    </Stack>
  )
}

export default EditorToolbars
