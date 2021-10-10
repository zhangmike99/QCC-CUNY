let bill = window.prompt("What is yoru bill: ")



function calculatroTip(total) {
  var tipPercent = 0.15;
  return (total*tipPercent)
}

var billTotal = 10.00;
var billTip   = calculateTip(billTotal);
var receipt   = 'Total:' + billTotal + ' Tip: ' + billTip;
console.log(receipt)