import type { TiptapDoc, TiptapNode, TiptapMark } from '@/lib/supabase-blog'

/** Render inline marks (bold, italic, code, link) wrapping children. */
function applyMarks(text: string, marks: TiptapMark[]): React.ReactNode {
  let node: React.ReactNode = text
  for (const mark of marks) {
    if (mark.type === 'bold') {
      node = <strong className="font-bold text-gray-900">{node}</strong>
    } else if (mark.type === 'italic') {
      node = <em className="italic text-gray-800">{node}</em>
    } else if (mark.type === 'code') {
      node = (
        <code className="bg-gray-100 text-gray-800 text-sm font-mono px-1.5 py-0.5 rounded">
          {node}
        </code>
      )
    } else if (mark.type === 'link') {
      const href = (mark.attrs?.href as string) ?? '#'
      const external = href.startsWith('http')
      node = (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-teal-600 hover:text-teal-700 underline"
        >
          {node}
        </a>
      )
    }
  }
  return node
}

/** Render a leaf text node with its marks. */
function renderText(node: TiptapNode, key: number): React.ReactNode {
  const text = node.text ?? ''
  if (!node.marks || node.marks.length === 0) return text
  return <span key={key}>{applyMarks(text, node.marks)}</span>
}

/** Render the inline children of a block node. */
function renderInline(nodes: TiptapNode[] | undefined): React.ReactNode {
  if (!nodes) return null
  return nodes.map((n, i) => {
    if (n.type === 'text') return renderText(n, i)
    if (n.type === 'hardBreak') return <br key={i} />
    // Nested inline (e.g. link node containing text nodes)
    return <span key={i}>{renderInline(n.content)}</span>
  })
}

/** Recursively render a Tiptap block node to JSX. */
function renderNode(node: TiptapNode, key: number): React.ReactNode {
  switch (node.type) {
    case 'heading': {
      const level = (node.attrs?.level as number) ?? 2
      const inline = renderInline(node.content)
      if (level === 1)
        return <h1 key={key} className="text-4xl font-bold text-gray-900 mt-12 mb-4">{inline}</h1>
      if (level === 2)
        return <h2 key={key} className="text-3xl font-bold text-gray-900 mt-12 mb-4">{inline}</h2>
      if (level === 3)
        return <h3 key={key} className="text-2xl font-bold text-gray-900 mt-8 mb-3">{inline}</h3>
      return <h4 key={key} className="text-xl font-bold text-gray-900 mt-6 mb-2">{inline}</h4>
    }

    case 'paragraph':
      return (
        <p key={key} className="text-gray-700 leading-relaxed mb-6">
          {renderInline(node.content)}
        </p>
      )

    case 'bulletList':
      return (
        <ul key={key} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          {node.content?.map((item, i) => renderNode(item, i))}
        </ul>
      )

    case 'orderedList':
      return (
        <ol key={key} className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
          {node.content?.map((item, i) => renderNode(item, i))}
        </ol>
      )

    case 'listItem':
      return (
        <li key={key}>
          {node.content?.map((child, i) => {
            // Unwrap the paragraph inside listItem to avoid double spacing
            if (child.type === 'paragraph') {
              return <span key={i}>{renderInline(child.content)}</span>
            }
            return renderNode(child, i)
          })}
        </li>
      )

    case 'blockquote':
      return (
        <blockquote
          key={key}
          className="border-l-4 border-teal-500 pl-6 italic text-gray-600 mb-6 py-1"
        >
          {node.content?.map((child, i) => {
            if (child.type === 'paragraph') {
              return <p key={i}>{renderInline(child.content)}</p>
            }
            return renderNode(child, i)
          })}
        </blockquote>
      )

    case 'horizontalRule':
      return <hr key={key} className="my-8 border-gray-200" />

    case 'codeBlock':
      return (
        <pre
          key={key}
          className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto text-sm font-mono"
        >
          <code>{renderInline(node.content)}</code>
        </pre>
      )

    default:
      // Unknown node — render children if present
      if (node.content) {
        return <div key={key}>{node.content.map((c, i) => renderNode(c, i))}</div>
      }
      return null
  }
}

interface TiptapRendererProps {
  doc: TiptapDoc
}

/** Renders a Tiptap JSON document as styled JSX matching the PortableText styles. */
export function TiptapRenderer({ doc }: TiptapRendererProps) {
  if (!doc?.content) return null
  return <>{doc.content.map((node, i) => renderNode(node, i))}</>
}
