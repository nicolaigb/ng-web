import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useScrolledToTopIndicator } from '@utils'
import { Grid, Layout } from '@templates'
import WorksData from '@constants/works'

import { Work } from 'model'
import { InternalLink } from '@atoms'
import { ContentPreview, Footer } from '@molecules'

export async function getStaticProps() {
  return {
    props: { works: WorksData },
  }
}

interface IHome {
  works: Work[]
}

const Home = ({ works }: IHome) => {
  const [curWorkName, setCurWorkName] = useState(works[0].title)
  const workRefs: React.RefObject<HTMLDivElement>[] = Array.from(
    { length: works.length },
    () => useRef(null),
  )

  useScrolledToTopIndicator(workRefs, (idx) => {
    const { title } = works[idx]
    setCurWorkName(title)
  })

  return (
    <>
      <Layout isFeed>
        <Grid>
          {works.map((work, idx) => (
            <SContentPreviewContainer
              key={`ContentPreview_${idx}`}
              ref={workRefs[idx]}
            >
              <InternalLink href={`/work/${work.tag}`}>
                <ContentPreview
                  key={`ContentPreview_${idx}`}
                  name={work.title}
                  src={work.thumbnail}
                />
              </InternalLink>
            </SContentPreviewContainer>
          ))}
        </Grid>
      </Layout>
      <Footer title={curWorkName} />
    </>
  )
}

const SContentPreviewContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;

  a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  a:focus-visible {
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 1px;
  }
`

export default Home
