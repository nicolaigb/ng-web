import React from 'react'
import styled from 'styled-components'
import { Content } from 'model'
import { client } from '@sanity/lib/client'
import { useNextSanityImage } from 'next-sanity-image'
import { ExternalLink, Image, Video } from '@atoms'
import { Embed } from '@molecules/Embed'

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  contentObj: Content
}

export const ContentView = ({ contentObj, ...props }: IContentView) => {
  const { type, image, videoSrc, maxWidth, url, embedType } = contentObj
  const imageProps: any = useNextSanityImage(client, image)

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <SImage {...imageProps} />
      case 'screenshot':
        return <SScreenshot {...imageProps} />
      case 'video':
        return <Video src={videoSrc ?? ''} />
      case 'embed':
        return <Embed embedType={embedType} src={url ?? ''} />
      default:
        return null
    }
  }

  return (
    <SContentViewContainer $maxWidth={maxWidth} {...props}>
      {url ? (
        <ExternalLink href={url}>{renderContent()}</ExternalLink>
      ) : (
        renderContent()
      )}
    </SContentViewContainer>
  )
}

type TContentViewContainer = {
  $maxWidth: number
}

const SContentViewContainer = styled.div<TContentViewContainer>(
  ({ theme, $maxWidth }) => `
  flex-shrink: 0;
  width: ${$maxWidth}px;

  @media (max-width: ${theme.Spacing.large}) {
    width: 100%;
  }
`,
)

const SImage = styled(Image)`
  max-width: 100% !important;
  height: auto;
`

const SScreenshot = styled(SImage)`
  border-radius: 8px;
  box-shadow:
    0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e,
    0 2.288533303243457px 2.288533303243457px -2.5px #00000029,
    0 10px 10px -3.75px #00000010,
    0 1px 2px #0000001f,
    0 0 2px #00000014;
`