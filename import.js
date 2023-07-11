const xml2js = require("xml2js");
const fs = require("fs");
let converter = require("json-2-csv");

const translatedCSV = fs.readFileSync("./input/text_translated.csv", {
  encoding: "utf8",
});

converter
  .csv2json(translatedCSV)
  .then((result) => {
    // console.log(result);
    const finalObject = {
      TextExport: {
        Texts: [
          {
            Text: [],
          },
        ],
      },
    };
    result.forEach((line) => {
      finalObject.TextExport.Texts[0].Text.push(line);
    });
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(finalObject);
    fs.writeFile("./output/text_translated.xml", xml, (err) => {
      if (err) {
        console.log(err);
        console.log("Lỗi ở write XML");
      } else {
        console.log("File XML translated written successfully\n");
      }
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Lỗi ở convert CSV sang JSON");
  });
