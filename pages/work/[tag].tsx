import React from 'react';
import {
  Layout, WorkDetail,
} from '@templates';
import { GetServerSideProps } from 'next';
import { getWork } from 'api';
import { Work } from 'model';
import { getLayoutArgs } from '@templates/Layout/Layout.stories';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { tag } = query;
  const work = await getWork(tag);
  return {
    props: {
      work,
    },
  };
};

interface IWorkDetailPage {
  work: Work;
}

const WorkDetailPage = ({ work }: IWorkDetailPage) => (
  <Layout {...getLayoutArgs()}>
    <WorkDetail
      textEntryProps={{
        title: work.title,
        year: work.year,
        description: work.description,
      }}
      images={work.images}
    />
  </Layout>
);

export default WorkDetailPage;
