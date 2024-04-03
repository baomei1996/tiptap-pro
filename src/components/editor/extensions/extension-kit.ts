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
    TextAlign,
    Subscript,
    Superscript,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    Typography,
    Placeholder,
    TableOfContents,
    ImageUpload,
    ImageBlock,
    SlashCommand,
    Focus,
    Figcaption,
    BlockquoteFigure,
    Dropcursor,
    emojiSuggestion,
} from ".";

import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);

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
        defaultLanguage: null,
    }),
    TableOfContents,
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
    ImageUpload,
    ImageBlock,
    FileHandler.configure({
        allowedMimeTypes: [
            "image/png",
            "image/jpeg",
            "image/gif",
            "image/webp",
        ],
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
        suggestion: emojiSuggestion,
    }),
    TextAlign.extend({
        addKeyboardShortcuts() {
            return {};
        },
    }).configure({
        types: ["heading", "paragraph"],
    }),
    Subscript,
    Superscript,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    Typography,
    Placeholder.configure({
        includeChildren: true,
        showOnlyCurrent: false,
        placeholder: () => "",
    }),
    SlashCommand,
    Focus,
    Figcaption,
    BlockquoteFigure,
    Dropcursor.configure({
        width: 2,
        class: "ProseMirror-dropcursor border-black",
    }),
];

export default ExtensionKit;
