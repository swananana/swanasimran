import { funk, system } from '@theme-ui/presets'
export default {
  
    "config": {
      "useCustomProperties": true,
      "initialColorMode": "system"
    },
    // Custom classes import as variant : "card.name"
    "ProjectCards":{
      "color1": "#244F75",
      "color2": "#60BFBF",
      "color3": "#8C4B7E",
      "color4": "#F8BB44",
      "color5": "F24B4B",

          },
    

    "colors": {
      // "text": "#000",
      // "background": "#fff",
      // "primary": "#6D0000",
      // "secondary": "#119",
      // "muted": "#f6f6f6",
      // "highlight": "#7f8fa6",
      // "gray": "#777",
      // "accent": "#609",
      "text": "#000",
      "background": "#fff",
      "primary": "#FF6584",
      "secondary": "#ABE8E6",
      "muted": "#F0D7D9",
      "highlight": "#41B5AF",
      "gray": "#A16AE8",
      "accent": "#76D4EA",
      "modes": {
        "dark": {
          "text": "#fff",
          "background": "#060606",
          "primary": "#3cf",
          "secondary": "#e0f",
          "muted": "#191919",
          "highlight": "#29112c",
          "gray": "#999",
          "accent": "#c0f"
        },
        "deep": {
          "text": "hsl(210, 50%, 96%)",
          "background": "hsl(230, 25%, 18%)",
          "primary": "hsl(260, 100%, 80%)",
          "secondary": "hsl(290, 100%, 80%)",
          "highlight": "hsl(260, 20%, 40%)",
          "accent": "hsl(290, 100%, 80%)",
          "muted": "hsla(230, 20%, 0%, 20%)",
          "gray": "hsl(210, 50%, 60%)"
        },
        "swiss": {
          "text": "hsl(10, 20%, 20%)",
          "background": "hsl(10, 10%, 98%)",
          "primary": "hsl(10, 80%, 50%)",
          "secondary": "hsl(10, 60%, 50%)",
          "highlight": "hsl(10, 40%, 90%)",
          "accent": "hsl(250, 60%, 30%)",
          "muted": "hsl(10, 20%, 94%)",
          "gray": "hsl(10, 20%, 50%)"
        }
      }
    },
    "fonts": {
      "body": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
      "heading": "inherit",
      "monospace": "Menlo, monospace"
    },
    "fontSizes": [
      12,
      14,
      16,
      20,
      24,
      32,
      48,
      64,
      72
    ],
    "fontWeights": {
      "body": 400,
      "heading": 700,
      "display": 900
    },
    "lineHeights": {
      "body": 1.5,
      "heading": 1.25
    },
    "textStyles": {
      "heading": {
        "fontFamily": "heading",
        "fontWeight": "heading",
        "lineHeight": "heading"
      },
      "display": {
        "variant": "textStyles.heading",
        "fontSize": [
          5,
          6
        ],
        "fontWeight": "display",
        "letterSpacing": "-0.03em",
        "mt": 3
      }
    },
    "styles": {
      "Container": {
        "p": 3,
        "maxWidth": 1024
      },
      "root": {
        "fontFamily": "body",
        "lineHeight": "body",
        "fontWeight": "body"
      },
      "h1": {
        "variant": "textStyles.display"
      },
      "h2": {
        "variant": "textStyles.heading",
        "fontSize": 5
      },
      "h3": {
        "variant": "textStyles.heading",
        "fontSize": 4
      },
      "h4": {
        "variant": "textStyles.heading",
        "fontSize": 3
      },
      "h5": {
        "variant": "textStyles.heading",
        "fontSize": 2
      },
      "h6": {
        "variant": "textStyles.heading",
        "fontSize": 1
      },
      "a": {
        "color": "primary",
        "&:hover": {
          "color": "secondary",
          "borderBottom": "2px solid red"
        }
      },
      "pre": {
        "fontFamily": "monospace",
        "fontSize": 1,
        "p": 3,
        "color": "text",
        "bg": "muted",
        "overflow": "auto",
        "code": {
          "color": "inherit"
        }
      },
      "code": {
        "fontFamily": "monospace",
        "fontSize": 1
      },
      "inlineCode": {
        "fontFamily": "monospace",
        "color": "secondary",
        "bg": "muted"
      },
      "table": {
        "width": "100%",
        "my": 4,
        "borderCollapse": "separate",
        "borderSpacing": 0,
        "th,td": {
          "textAlign": "left",
          "py": "4px",
          "pr": "4px",
          "pl": 0,
          "borderColor": "muted",
          "borderBottomStyle": "solid"
        }
      },
      "th": {
        "verticalAlign": "bottom",
        "borderBottomWidth": "2px"
      },
      "td": {
        "verticalAlign": "top",
        "borderBottomWidth": "1px"
      },
      "hr": {
        "border": 0,
        "borderBottom": "1px solid",
        "borderColor": "muted"
      }
    }
  }
