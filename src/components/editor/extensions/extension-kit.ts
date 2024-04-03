import {  
  StarterKit,
  Document,
  Columns, 
  Column, 
  Selection, 
  Heading, 
  HorizontalRule, 
  TaskList, 
  TaskItem,
  CodeBlockLowlight,
  TextStyle,
  FontSize,
  FontFamily,
  Color,
  TrailingNode,
  Link,
  Highlight,
  Underline,
  CharacterCount,
  FileHandler,
  Emoji,
  emojiSuggestion,
  TextAlign,
  Subscript,
  Superscript
} from '.'

import {common, createLowlight} from 'lowlight'

const lowlight = createLowlight(common)

export const ExtensionKit = () => [
  Document,
  Columns, 
  Column, 
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Selection, 
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }), 
  HorizontalRule, 
  StarterKit.configure({
    document: false,
    dropcursor: false,
    heading: false,
    horizontalRule: false,
    blockquote: false,
    history: false,
    codeBlock: false,
  }),
  CodeBlockLowlight.configure({
    lowlight,
    defaultLanguage: null
  }),
  TextStyle,
  FontSize, 
  FontFamily,
  Color, 
  TrailingNode, 
  Link.configure({
    openOnClick: false,
  }),
  Highlight.configure({ multicolor: true }),
  Underline, 
  CharacterCount.configure({ limit: 50000 }),
  FileHandler.configure({
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    onDrop: (currentEditor, files, pos) => {
      // files.forEach(async () => {
      //   const url = await API.uploadImage()

      //   currentEditor.chain().setImageBlockAt({ pos, src: url }).focus().run()
      // })
    },
    onPaste: (currentEditor, files) => {
      // files.forEach(async () => {
      //   const url = await API.uploadImage()

      //   return currentEditor
      //     .chain()
      //     .setImageBlockAt({ pos: currentEditor.state.selection.anchor, src: url })
      //     .focus()
      //     .run()
      // })
    },
  }),
  Emoji.configure({
    enableEmoticons: true,
  }),
  TextAlign.extend({
    addKeyboardShortcuts() {
      return {}
    },
  }).configure({
    types: ['heading', 'paragraph'],
  }), 
  Subscript,
  Superscript

]

export default ExtensionKit
