declare module 'model' {
  type TContent = 'image' | 'video' | 'screenshot'

  export interface ContentData {
    type: TContent
    src: string
    alt: string
    width?: number
    height?: number
    caption?: string
    width?: number
    height?: number
  }

  export interface Work {
    id: Number
    thumbnail: string
    content: ContentData[]
    title: string
    tag: string
    year: string
    medium: string
  }

  export interface NavItem {
    name: string
    href: string
  }

  type TInspoType = 'image' | 'playlist'

  export interface InspoItem extends ContentData {
    type: TInspoType
    alt?: string
    url?: string
  }
}
