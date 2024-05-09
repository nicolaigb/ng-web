import React from 'react'
import styled, { css } from 'styled-components'
import { TEmbed } from 'model'

export interface IEmbed extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string

  embedType: TEmbed
}

export const Embed = ({ src, embedType, ...props }: IEmbed) => {
  return (
    <SFrame
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
      embedType={embedType}
      {...props}
    />
  )
}

const appleMusicStyle = css`
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
`

const youtubeStyle = css`
  height: auto;
  aspect-ratio: 16 / 9;
`

const soundcloudStyle = css`
  height: 150px;
`

const SFrame = styled.iframe<Pick<IEmbed, 'embedType'>>(
  ({ embedType }) => `
  border: none;
  width: 100%;

  ${embedType === 'appleMusic' ? appleMusicStyle : ''};
  ${embedType === 'youtube' ? youtubeStyle : ''};
  ${embedType === 'soundcloud' ? soundcloudStyle : ''}
`,
)
