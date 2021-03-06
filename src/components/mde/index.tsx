import { Flex, Textarea, useColorMode } from "@chakra-ui/core"
import React, { useCallback, useEffect, useRef, useState } from "react"
import EditorThemeProvider from "./EditorThemeProvider"
import EditorToolbars from "./EditorToolbars"
import CodeMirror, { EditorKeymaps } from "./engine/CodeMirror"

interface EditorProps {
  defaultValue: string
  updateValue: (_: string) => void
}

const Editor: React.FunctionComponent<EditorProps> = ({
  updateValue,
  defaultValue,
}) => {
  const { colorMode } = useColorMode()
  const [editor, setEditor] = useState<CodeMirror>()
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
    setEditor(_editor)
  }, [defaultValue])

  useEffect(() => {
    if (editor) editor.onValueChange(updateValue)
  }, [updateValue, editor])

  const handleCmd = useCallback(
    (cmd) => {
      if (!editor) return
      return editor.updateSelections(cmd)
    },
    [editor]
  )

  return (
    <Flex flex={1} width="50%" flexDirection="column" zIndex={10}>
      <EditorThemeProvider colorMode={colorMode}>
        <EditorToolbars handleCmd={handleCmd} />
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
