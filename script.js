function calculateSum() {
  const now = new Date();
  const sum = now.getHours() + now.getMinutes() + now.getSeconds();
  return sum;
}

function displaySum() {
  const sumElement = document.getElementById('sum');
  const sum = calculateSum();
  sumElement.textContent = `Sum of current time: ${sum}`;
}

// Update sum every second
setInterval(displaySum, 1000);

// Initial display
displaySum();
