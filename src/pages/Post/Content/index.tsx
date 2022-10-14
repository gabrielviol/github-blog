import { Container, Markdown } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex';

interface ContentProps {
    body: string;
  }

export function Content({ body }: ContentProps){
    return(
      <Container>
      <Markdown
        children={body}
        remarkPlugins={[[remarkMath, { singleTilde: false }]]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {

            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </Container>
    )
}