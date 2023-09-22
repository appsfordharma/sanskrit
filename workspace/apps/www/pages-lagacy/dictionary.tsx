import Link from 'next/link';
import { getAllBookIds } from '../src/lib/googleSheet';
import Layout from '../src/components/layout';
import SearchBar from '../src/components/input/searchBar';
import Card from '../src/components/cards/card3';

export function Index({ bookIds }) {
  // console.log({ bookIds });
  return (
    <Layout>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="max-w-2xl">
          <SearchBar />
        </div>
        <div className="flex flex-col items-center">
          {Array.from({ length: 20 }).map((_, id) => {
            return (
              <Link href={`/books/${id}`} key={id}>
                <div className="m-1 min-h-[100px] min-w-[100px] rounded-md border p-4 text-center shadow-sm hover:shadow-xl">
                  {id}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Index;
