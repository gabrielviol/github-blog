import { Container, Markdown } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Skeleton, Stack } from "@chakra-ui/react";
import remarkGfm from 'remark-gfm'

interface ContentProps {
  body: string;
  loading: boolean;
}

export function Content({ body, loading }: ContentProps) {
  return (
    <Container>
      {loading ? <>
        <Stack>
          <Skeleton height='30px' />
          <Skeleton height='20px' />
          <Skeleton height='30px' />
          <Skeleton height='20px' />
          <Skeleton height='30px' />
          <Skeleton height='20px' />
          <Skeleton height='30px' />
          <Skeleton height='20px' />
          <Skeleton height='30px' />
        </Stack>
      </> :
        <Markdown
          children={body}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {

              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
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
      }
    </Container>
  )
}