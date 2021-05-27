function PaintValue(valueJson, valueHtml, valuePainter, refArea) {
  const resultComparation = valueJson.toLowerCase() == valueHtml.toLowerCase();
  const resultIncludes = valueJson
    .toLowerCase()
    .includes(valueHtml.toLowerCase());

  painterResults(resultComparation, resultIncludes, valuePainter, refArea);
}

function painterResults(
  resultComparation,
  resultIncludes,
  inputValue,
  refArea
) {
  let escapedElement = inputValue.replace(/[\\[*?{|$|"]/gim, "$&");
  let searchElementValue = new RegExp(`${escapedElement}`);

  if (resultComparation || resultIncludes) {
    refArea.current.innerHTML = refArea.current.innerHTML.replace(
      searchElementValue,
      `<span class="filterSuccess">$&</span>`
    );
  } else {
    refArea.current.innerHTML = refArea.current.innerHTML.replace(
      searchElementValue,
      `<span class="filterError">$&</span>`
    );
  }
}

export default PaintValue;
