export function calculator(){
  const price = document.querySelector('.price');
  const payment = document.querySelector('.payment');
  const period = document.querySelector('.period');
  const summary = document.querySelector('.summary');
  const monthSummary = document.querySelector('.month-summary');


  function getNum (item) {
    return item.querySelector('.number');
  }
  function getRange (item) {
    return item.querySelector('.range');
  }

  const priceNum = getNum(price);
  const priceRange = getRange(price);
  const paymentNum = getNum(payment);
  const paymentRange = getRange(payment);
  const periodNum = getNum(period);
  const periodRange = getRange(period);

  // price
    priceNum.addEventListener('input', () => {
      priceRange.value = priceNum.value;

      if (priceNum.value > 6000000) {
        priceNum.value = 6000000;
      }
      calc();
    })

    priceRange.addEventListener('input', () => {
        priceNum.value = priceRange.value;
        calc();
    })

    // payment
    paymentNum.addEventListener('input', () => {
      paymentRange.value = paymentNum.value;
      calc();
    })

    paymentRange.addEventListener('input', () => {
      paymentNum.value = paymentRange.value;

        const sumInp = payment.querySelector('.summ');
        sumInp.value = priceNum.value * paymentNum.value / 100;
        calc();
    })


    // period
    periodNum.addEventListener('input', () => {
      periodRange.value = periodNum.value;
      calc();
    })

    periodRange.addEventListener('input', () => {
      periodNum.value = periodRange.value;
      calc();
    })

    function calc() {
      const monthSummaryValue = Math.ceil(priceNum.value - (paymentNum.value * 9.2 / (1 + 9.2)) - periodNum.value);
      monthSummary.textContent = monthSummaryValue;

      const summaryValue = Math.ceil(priceNum.value + ( periodNum.value * monthSummaryValue));
      summary.textContent = summaryValue;
    }

  }
