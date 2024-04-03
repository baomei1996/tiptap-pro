import "iframe-resizer/js/iframeResizer.contentWindow";
import { EditorContent, useEditor } from "@tiptap/react";
import { useRef } from "react";
import "./styles/index.css";
import "./styles/editor.css";
import ExtensionKit from "./extensions/extension-kit";
import { ContentItemMenu, LinkMenu, TextMenu } from "./components/menus";
import { ColumnsMenu } from "./components/menus/ColumnsMenu";
import TableRowMenu from "./components/menus/TableRow";
import TableColumnMenu from "./components/menus/TableColumn";
import ImageBlockMenu from "./extensions/ImageBlock/components/ImageBlockMenu";

export const initialContent = {
    type: "doc",
    content: [
        {
            type: "heading",
            attrs: {
                textAlign: "left",
                level: 1,
            },
            content: [
                {
                    type: "emoji",
                    attrs: {
                        name: "fire",
                    },
                },
                {
                    type: "text",
                    text: " Next.js + Tiptap Block Editor Template",
                },
            ],
        },
    ],
};

export const BlockEditor = () => {
    const menuContainerRef = useRef(null);
    const editorRef = useRef(null);

    const editor = useEditor({
        autofocus: true,
        extensions: [...ExtensionKit()],
        onCreate: ({ editor }) => {
            editor.commands.setContent(initialContent);
        },
        editorProps: {
            attributes: {
                autocomplete: "off",
                autocorrect: "off",
                autocapitalize: "off",
                class: "min-h-full",
            },
        },
    });

    return (
        <div ref={menuContainerRef} style={{ display: "flex", height: "100%" }}>
            {editor && (
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        height: "100%",
                        overflow: "hidden",
                    }}
                >
                    <EditorContent
                        editor={editor}
                        ref={editorRef}
                        style={{ flex: 1, overflowY: "auto" }}
                    />
                    <ContentItemMenu editor={editor} />
                    <LinkMenu editor={editor} appendTo={menuContainerRef} />
                    <TextMenu editor={editor} />
                    <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
                    <TableRowMenu editor={editor} appendTo={menuContainerRef} />
                    <TableColumnMenu
                        editor={editor}
                        appendTo={menuContainerRef}
                    />
                    <ImageBlockMenu
                        editor={editor}
                        appendTo={menuContainerRef}
                    />
                </div>
            )}
        </div>
    );
};

export default BlockEditor;
