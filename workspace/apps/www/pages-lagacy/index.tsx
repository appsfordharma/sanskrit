import Home from '../src/components/home';
// import { importSheetData } from "../lib/googleSheet";

// export async function getStaticPaths() {
//   const res = await importSheetData();

//   console.log(res);

//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps() {
//   const res = await getDataFromGoogleSheet();
//   try {
//     const res = await importSheetData();

//     console.log(res);
//   } catch (error) {
//     console.log("error", error);
//   }

//   return {
//     props: {
//       title: "",
//     },
//   };
// }

export function Index({ title }) {
  return (
    <>
      <Home />
    </>
  );
}

export default Index;
