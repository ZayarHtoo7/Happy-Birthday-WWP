const cake = document.getElementById('cake');
const lightButton = document.getElementById('lightButton');
const candles = cake.querySelectorAll('.candle');

lightButton.addEventListener('click', () => {
	candles.forEach((candle, index) => {
		candle.classList.add('lit');
		setTimeout(() => {
			candle.classList.add('flicker');
		}, 500 * index);
	});
});
const candles = document.querySelectorAll('#candles .candle');

candles.forEach((candle, index) => {
  setTimeout(() => {
    candle.classList.add('lit');
  }, 1000 + index * 200);
});