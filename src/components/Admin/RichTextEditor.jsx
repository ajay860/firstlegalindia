import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { Button, ButtonGroup } from "react-bootstrap"

const RichTextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "Start writing service content here...",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return null

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("Enter URL", previousUrl)

    if (url === null) return
    if (url === "") {
      editor.chain().focus().unsetLink().run()
      return
    }

    editor.chain().focus().setLink({ href: url }).run()
  }

  const Btn = ({ active, ...props }) => (
    <Button
      size="sm"
      variant={active ? "dark" : "outline-secondary"}
      {...props}
    />
  )

  return (
    <>
      {/* ---------- Toolbar ---------- */}
      <div className="mb-2 d-flex flex-wrap gap-2 border rounded p-2 bg-light">
        {/* Text styles */}
        <ButtonGroup size="sm">
          <Btn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
            B
          </Btn>
          <Btn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
            I
          </Btn>
          <Btn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
            U
          </Btn>
          <Btn active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
            S
          </Btn>
        </ButtonGroup>

        {/* Headings */}
        <ButtonGroup size="sm">
          {[1, 2, 3, 4].map((level) => (
            <Btn
              key={level}
              active={editor.isActive("heading", { level })}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level }).run()
              }
            >
              H{level}
            </Btn>
          ))}
        </ButtonGroup>

        {/* Lists */}
        <ButtonGroup size="sm">
          <Btn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
            • List
          </Btn>
          <Btn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            1. List
          </Btn>
        </ButtonGroup>

        {/* Blocks */}
        <ButtonGroup size="sm">
          <Btn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
            ❝
          </Btn>
          <Btn active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
            {"</>"}
          </Btn>
          <Btn onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            ―
          </Btn>
        </ButtonGroup>

        {/* Links */}
        <ButtonGroup size="sm">
          <Btn active={editor.isActive("link")} onClick={setLink}>
            🔗
          </Btn>
          <Btn onClick={() => editor.chain().focus().unsetLink().run()}>
            ❌
          </Btn>
        </ButtonGroup>

        {/* History */}
        <ButtonGroup size="sm">
          <Btn onClick={() => editor.chain().focus().undo().run()}>↺</Btn>
          <Btn onClick={() => editor.chain().focus().redo().run()}>↻</Btn>
        </ButtonGroup>

        {/* Clear */}
        <Btn onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>
          Clear
        </Btn>
      </div>

      {/* ---------- Editor ---------- */}
      <div
        className="border rounded p-3"
        style={{ minHeight: 220, background: "#fff" }}
      >
        <EditorContent editor={editor} />
      </div>
    </>
  )
}

export default RichTextEditor
