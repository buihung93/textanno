const xml2js = require("xml2js");
const fs = require("fs");
let converter = require("json-2-csv");

const orriginalEnglishText = fs.readFileSync("./Anno_text/texts_english.xml");

xml2js.parseString(orriginalEnglishText, async (err, result) => {
  if (err) {
    console.log(err);
    console.log("Lỗi rồi");
    return;
  }

  const finalArray = [];
  // Text[0]
  //   {
  //     GUID: [ '24921' ],
  //     Text: [
  //       'Move the camera with [GamepadActionManager GamepadButtonTooltip(LS_all)]: [Conditions QuestCondition AchievedPercentage]%'
  //     ]
  //   }
  const listOfTextWithGUID = result.TextExport.Texts[0].Text;
  listOfTextWithGUID.forEach((e) => {
    if (e.GUID[0] === "21973") {
      console.log(e);
    }
    finalArray.push({
      GUID: e.GUID[0],
      Text: e.Text[0],
    });
  });

  const csv = await converter.json2csv(finalArray);

  fs.writeFile("./output/text_exported.csv", csv, (err) => {
    if (err) {
      console.log(err);
      console.log("Lỗi ở write CSV");
    } else {
      console.log("File written successfully\n");
    }
  });
});
