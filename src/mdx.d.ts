declare module '*.mdx' {
  import type { ComponentType } from 'react'
  import type { PostFrontmatter } from './lib/posts'

  export const frontmatter: PostFrontmatter
  const MDXComponent: ComponentType
  export default MDXComponent
}
