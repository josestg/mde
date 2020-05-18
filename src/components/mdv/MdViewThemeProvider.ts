import { theme } from "@chakra-ui/core"
import styled from "@emotion/styled"
import { prismDarkTheme, prismLightTheme } from "./theme/prism"

interface MdViewProps {
  colorMode: "light" | "dark"
}

const THEME = {
  bg: {
    dark: theme.colors.gray[700],
    light: theme.colors.gray[200],
  },
  color: {
    dark: theme.colors.gray[300],
    light: theme.colors.gray[700],
  },
}

const MdViewThemeProvider = styled.div<MdViewProps>`
  ${({ colorMode }) =>
    colorMode === "dark" ? prismDarkTheme : prismLightTheme}
  * {
    color: ${(props) => THEME.color[props.colorMode]};
  }

  hr {
    margin: 16px 0;
  }

  br {
    height: 24px;
  }

  p {
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.tall};
    color: ${(props) => THEME.color[props.colorMode]};
    letter-spacing: ${theme.letterSpacings.wide};
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  h1 {
    font-size: ${theme.fontSizes["4xl"]};
    letter-spacing: ${theme.letterSpacings.tight};
    font-weight: ${theme.fontWeights.bold};
    margin-top: 24px;
    margin-bottom: 8px;
  }

  h1,
  h2,
  h3 {
    color: ${({ colorMode }) =>
      colorMode === "dark" ? theme.colors.gray[100] : theme.colors.gray[700]};
  }

  h2,
  h3 {
    margin-bottom: 1em;
    margin-top: 2em;
    font-weight: ${theme.fontWeights.bold};
  }

  h2 {
    font-size: ${theme.fontSizes.lg};
  }

  h3 {
    font-size: ${theme.fontSizes.md};
  }

  img {
    max-width: 100%;
    margin: 16px auto;
    padding: 36px 0;
  }

  ul,
  ol {
    margin-bottom: 16px;
    margin-top: 16px;
    margin-left: 32px;
    position: relative;
  }

  .task-list-item {
    list-style: none;
  }

  blockquote {
    color: ${({ colorMode }) => THEME.color[colorMode]};
    position: relative;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? theme.colors.gray[700] : theme.colors.purple[50]};
    border-radius: 5px;
    padding: 4px 0;
    margin: 16px 0;
    width: 98%;

    p {
      font-size: ${theme.fontSizes.sm};
      margin: auto 0;
      padding: 0 !important;
      align-items: center;
      margin-left: 15px;
    }

    ::before {
      content: "";
      background: ${({ colorMode }) =>
        colorMode === "dark"
          ? theme.colors.gray[400]
          : theme.colors.facebook[300]};
      border-radius: 15px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 5px;
    }
  }

  table {
    color: ${({ colorMode }) => THEME.color[colorMode]};
    position: relative;
    max-width: 100%;

    border-collapse: collapse;
    border-spacing: 0;
    margin: 36px auto;
    min-width: 80%;

    th {
      background-color: ${({ colorMode }) =>
        colorMode === "dark" ? theme.colors.gray[700] : theme.colors.gray[50]};
    }

    td,
    th {
      padding: 8px 12px;
      word-break: break-all;
      border: 1.8px solid
        ${({ colorMode }) =>
          colorMode === "dark"
            ? theme.colors.gray[600]
            : theme.colors.gray[300]};
    }
  }

  a {
    color: ${theme.colors.blue[500]};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    width: 100%;
    display: block;
  }

  code {
    padding: 2px 4px;
    border-radius: 2px;
    font-size: ${theme.fontSizes.xs};
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? theme.colors.gray[700] : theme.colors.gray[100]};
  }

  .math-display {
    padding: 24px 16px;
  }
`

export default MdViewThemeProvider
