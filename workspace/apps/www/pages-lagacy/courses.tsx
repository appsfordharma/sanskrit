import Link from 'next/link';
import Layout from '../src/components/layout';

import { gql, useQuery } from '@apollo/client';
import Card from '../src/components/cards/card1';

const GET_CACHED_DATA = gql`
  query GetCachedData {
    courses
  }
`;

function Index({ bookIds }) {
  const { loading, error, data } = useQuery(GET_CACHED_DATA);

  if (loading) return <p>Loading...</p>;

  if (error || !data) return <p>Error :(</p>;

  const { courses } = data;

  return (
    <Layout>
      <div className="m-1 mx-auto mt-2 grid max-w-7xl grid-cols-1 justify-items-stretch gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-3 xl:grid-cols-4 2xl:mx-auto">
        {courses?.map((val, id) => {
          return (
            <Link href={`/books/${val.slug}`} key={val.title} className="m-1">
              <Card {...val} />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default Index;
