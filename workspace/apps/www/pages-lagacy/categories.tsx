import Link from 'next/link';
import Layout from '../src/components/layout';
import Card from '../src/components/cards/card3';
import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_CACHED_DATA = gql`
  query GetCachedData {
    categories
  }
`;

export function Categories() {
  const { loading, error, data } = useQuery(GET_CACHED_DATA);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const { categories } = data;

  return (
    <Layout>
      <div className="mx-auto mt-1 flex max-w-7xl flex-wrap justify-center">
        {categories.map(({ description, rank, slug, title }, id) => {
          return (
            <Link href={`/books?category=${slug}`} key={id} className="m-1">
              <Card title={title} description={description} url="" />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default Categories;
