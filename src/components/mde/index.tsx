import { Flex, Textarea, useColorMode } from "@chakra-ui/core"
import React, { useContext, useEffect, useRef } from "react"
import { DocumentContext } from "./DocumentProvider"
import EditorThemeProvider from "./EditorThemeProvider"
import CodeMirror, { EditorKeymaps } from "./engine/CodeMirror"

const Editor: React.FunctionComponent = () => {
  const { colorMode } = useColorMode()
  const { updateValue, defaultValue } = useContext(DocumentContext)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const _editor = new CodeMirror(textareaRef.current, {
      lineNumbers: true,
      lineWrapping: true,
      scrollbarStyle: "null",
      theme: "twc",
    })
    _editor.setKeyMaps(KEY_MAPS)
    _editor.setDefaultValue(defaultValue)
    _editor.onValueChange((doc) => updateValue(doc))
  }, [updateValue, defaultValue])

  return (
    <Flex
      flex={1}
      height="600px"
      width="50%"
      flexDirection="column"
      zIndex={10}
    >
      <EditorThemeProvider colorMode={colorMode}>
        <Textarea ref={textareaRef} />
      </EditorThemeProvider>
    </Flex>
  )
}

const KEY_MAPS: EditorKeymaps = [
  { key: "Ctrl-B", cmd: "bold" },
  { key: "Ctrl-I", cmd: "italic" },
  { key: "Ctrl-Q", cmd: "quote" },
  { key: "Ctrl-`", cmd: "code" },
  { key: "Shift-Ctrl-1", cmd: "image" },
  { key: "Shift-Ctrl-4", cmd: "math" },
  { key: "Shift-Ctrl-\\", cmd: "table" },
]

export default React.memo(Editor)
