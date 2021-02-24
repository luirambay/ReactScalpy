export function formatedText(text) {
  const val01 = text.replace(/_"/g, `_`);
  const val02 = val01.replace(/date="/g, `date=`);

  const val03 = val02
    .replace(`default =`, `default ="`)
    .replace(`default=`, `default=" `);
  const val04 = val03.replace(/DATE}/g, `DATE}"`);
  const val05 = val04.replace(`}"".dat`, `}.dat`);

  const newFormatedText = val05;

  return newFormatedText;
}

export function sliceText(unformattedText, startSlice, endSlice) {
  const textStart = unformattedText.indexOf(startSlice);
  const textEnd = unformattedText.lastIndexOf(endSlice);
  const formattedText = unformattedText.slice(textStart, textEnd);

  return formattedText;
}
