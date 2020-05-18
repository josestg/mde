export type formatter = (src: string) => string
export type EditorKeymaps = Array<{ key: string; cmd: MdTypes }>
export type MdTypes =
  | "h1"
  | "h2"
  | "h3"
  | "bold"
  | "italic"
  | "strikethrough"
  | "quote"
  | "list-ol"
  | "list-ul"
  | "table"
  | "link"
  | "code"
  | "image"
  | "math"

export interface EditorOptions {
  lineNumbers: true
  theme?: string
  lineWrapping?: boolean
  scrollbarStyle?: string
}

export default class CodeMirror {
  private core: any

  constructor(ref: HTMLTextAreaElement | null, options: EditorOptions) {
    // @ts-ignore
    const { CodeMirror: cm } = window
    this.core = cm.fromTextArea(ref, options)
  }

  onValueChange(handler: (param: any) => void) {
    if (!this.core) return
    this.core.on("change", ({ doc }: { doc: { getValue: () => string } }) =>
      handler(doc.getValue())
    )
  }

  setDefaultValue(value: string) {
    this.core.setValue(value)
  }

  setKeyMaps(keyMaps: EditorKeymaps) {
    const mapper = {}
    for (const { key, cmd } of keyMaps) {
      // @ts-ignore
      mapper[key] = () => {
        const formatter = transform(cmd)
        if (formatter) {
          const selections = this.core.getSelections()
          this.core.replaceSelections(selections.map(formatter))
        }
      }
    }
    this.core.setOption("extraKeys", mapper)
  }
}

const transform = (type: MdTypes): formatter | false => {
  switch (type) {
    case "h1":
      return (src: string) => `# ${src}`
    case "h2":
      return (src: string) => `## ${src}`
    case "h3":
      return (src: string) => `### ${src}`
    case "bold":
      return (src: string) => `__${src || "Bold"}__`
    case "italic":
      return (src: string) => `_${src || "Italic"}_`
    case "strikethrough":
      return (src: string) => `~~${src || "Strikethrought"}~~`
    case "quote":
      return (src: string) => `> ${src || "Quote"}`
    case "list-ol":
      return (src: string) => `1. ${src}`
    case "list-ul":
      return (src: string) => `* ${src}`
    case "table":
      return () =>
        `| Column A | Column B|\n|:---|:---:|\n|Align Left|Aligin Center|`
    case "link":
      return (src: string) => `[${src}](https://)`
    case "image":
      return (src: string) => `![Image Alt](${src})`
    case "code":
      return (src: string) => `\n\`\`\`js\n${src}\n\`\`\`\n`
    case "math":
      return (src: string) => `\n$$\n${src}\n$$\n`
    default:
      return false
  }
}
