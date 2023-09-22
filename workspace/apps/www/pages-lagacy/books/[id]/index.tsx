import Link from 'next/link';
import { getAllBookIds, getBookById } from '../../../src/lib/googleSheet';

function parseSchloka(schloka) {
  const [line1, line2] = schloka.split('।');
  return [`${line1} ।`, line2];
}

// export async function getStaticPaths() {
//   const bookIds = await getAllBookIds();

//   return {
//     paths: bookIds,
//     fallback: false,
//   };
// }

// export async function getStaticProps({
//   params,
//   locales,
//   locale,
//   defaultLocale,
//   ...rest
// }) {
//   const { id } = params;
//   const bookIds = await getAllBookIds();

//   const {
//     params: { sheetId },
//   } = bookIds.find(({ params: { id: bookId } }) => bookId === id);

//   const rows = await getBookById({ id: sheetId });

//   return {
//     props: {
//       id,
//       rows,
//     },
//   };
// }

export function Index({ id, rows = [] }) {
  // console.log({ rows });
  return (
    <div className={''}>
      {rows.map(([chapter, number, sa]) => {
        return (
          <div key={`${chapter}-${number}`} className="mb-2 p-4">
            {/* <Link href={`/books/${id}/${chapter}/${number}`}> */}
            {parseSchloka(sa).map((line) => {
              return <p key={line}>{line}</p>;
            })}
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default Index;
