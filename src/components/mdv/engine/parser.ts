import unified from "unified"
import markdownParser from "remark-parse"
import math from "remark-math"
import katex from "rehype-katex"
import remark2rehype from "remark-rehype"
import breaks from "remark-breaks"
import prims from "mdx-prism"
import stringify from "rehype-stringify"

export function parseToHtml(md: string) {
  try {
    const html = unified()
      .use([
        markdownParser,
        breaks,
        math,
        remark2rehype,
        prims,
        katex,
        stringify,
      ])
      .processSync(md)
    return html.toString()
  } catch (error) {
    return error.message
  }
}
