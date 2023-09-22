import { google } from "googleapis";
import { writeFile } from "./fs";

const sheets = google.sheets({
  version: "v4",
  auth: process.env.GOOGLE_CLOUD_API_KEY,
});

export async function getFromGoogleSheet({
  spreadsheetId = process.env.GOOGLE_SHEET_ID,
  range = process.env.GOOGLE_SHEET_RANGE,
} = {}) {
  return sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
}

export async function getDataFromGoogleSheet() {
  const res = await getFromGoogleSheet();

  // console.table(res.data.values);
  // console.dir(res.data.values, { depth: null });
  // console.dir(res, { depth: null });

  // const { skills, categories } = res.data.values.reduce(
  //   (
  //     prev,
  //     [skill, confidance, field, years, categoryShortHand, categoryFullName],
  //     idx
  //   ) => {
  //     const skillObj = { ...prev };
  //     if (idx === 0) {
  //       return skillObj;
  //     }

  //     if (categoryShortHand) {
  //       skillObj.categories[categoryShortHand] = categoryFullName;
  //     }
  //     if (skill) {
  //       skillObj.skills.push({
  //         skill,
  //         confidance: Number(confidance),
  //         years: Number(years),
  //         field: field?.split(',').map((f) => f.trim()),
  //       });
  //     }

  //     return skillObj;
  //   },
  //   { skills: [], categories: {} }
  // );

  // // console.dir({ skills, categories }, { depth: null });

  // return { skills, categories };
}

export async function getAllBookIds() {
  const res = await getFromGoogleSheet({
    range: "books!A1:d10",
  });

  return res.data.values.reduce((prev, [id, sheetId], idx) => {
    if (idx === 0) {
      return prev;
    }
    return [
      ...prev,
      {
        params: {
          id,
          sheetId,
        },
      },
    ];
  }, []);
}

export async function getBookById({ id }) {
  const res = await getFromGoogleSheet({
    spreadsheetId: id,
    range: "a1:c800",
  });

  // console.dir(res.data.values, { depth: null });

  const bookData = res.data.values.reduce((prev, row, idx) => {
    if (idx === 0) {
      return prev;
    }
    return [...prev, row];
  }, []);

  return bookData;
}

export async function importGoogleSheetAndWriteToFile({
  spreadsheetId = process.env.GOOGLE_SHEET_ID,
  range = process.env.GOOGLE_SHEET_RANGE,
  fileName = "sanskrit",
}): Promise<string[][]> {
  const res = await getFromGoogleSheet({
    spreadsheetId,
    range,
  });

  await writeFile({
    fileName,
    jsonData: JSON.stringify(res.data.values || []),
  });

  return res.data.values || [];
}

export async function importAllPages(pages: string[]) {
  for (const page of pages) {
    const fileName = page.split("!")[0];
    const fileData = await importGoogleSheetAndWriteToFile({
      range: page,
      fileName,
    });

    console.log(`Page ${fileName} imported. (${fileName}.json)`);

    if (fileName.includes("books")) {
      await importAllBooks(fileData.slice(1));
    }
  }
}

export async function importAllBooks(pageData: string[][]) {
  for (const [id, sheetId, primary, shlokas] of pageData) {
    const entries = Object.entries({
      primary,
      shlokas,
    });

    for (const [fileName, range] of entries) {
      try {
        await importGoogleSheetAndWriteToFile({
          spreadsheetId: sheetId,
          range: `${fileName}!${range}`,
          fileName: `${id}-${fileName}`,
        });
        console.log(
          `Book ${fileName} imported from range ${range}. (${id}-${fileName}.json)`,
        );
      } catch (error) {
        console.error(
          `Book ${fileName} failed to import from range ${range}. (${id}-${fileName}.json)`,
        );
        console.error(error);
      }
    }
  }
}

export async function importSheetData() {
  // Import Main Sanskrit Sheet
  const sanskritSheet = await importGoogleSheetAndWriteToFile({
    fileName: "sanskrit",
  });
  console.log("Sanskrit main sheet imported. (sanskrit.json)");

  const pages = sanskritSheet[2];

  await importAllPages(pages.slice(1));

  console.log("All data imported.");

  return true;
}
