'use client'

import React from 'react'
import { Work } from 'model'
import { Text } from '@atoms'
import styled from 'styled-components'
import { PortableText } from '@portabletext/react'
import { ContentView } from './ContentView'

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  work: Work
}

const myPortableTextComponents = {
  types: {
    content: ({ value }) => <ContentView contentObj={value} />,
  },
}

export default function WorkPage({ work, ...props }: IWorkDetail) {
  const { heroContent, content, title, year, medium } = work

  return (
    <SWorkDetailContainer {...props}>
      <ContentView contentObj={heroContent} />
      <SHeader>
        <Text styleType="subheader">{title}</Text>
        <Text styleType="emphasized">{year}</Text>
        <Text styleType="regular" style={{ fontStyle: 'italic' }}>
          {medium}
        </Text>
      </SHeader>
      <PortableText value={content} components={myPortableTextComponents} />
    </SWorkDetailContainer>
  )
}

const SWorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  position: relative;
`

const SHeader = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.Spacing.contentTextWidth};
  display: flex;
  flex-direction: column;
  gap: 8px;
`
