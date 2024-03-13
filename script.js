function calculateSum() {
    // 获取当前时间
    const currentDate = new Date();

    // 获取月份、日期和星期几
    const month = (currentDate.getMonth() + 1).toString();
    const date = currentDate.getDate().toString();
    const dayOfWeek = currentDate.getDay(); // 0 是星期日，1 是星期一，以此类推

    // 计算月份、日期和星期几的和
    let sum = 0;
	let sum1 = 0;
    for (let i = 0; i < month.length; i++) {
        sum += parseInt(month[i]);
    }
	
	 for (let i = 0; i < date.length; i++) {
        sum1 += parseInt(date[i]);
    }
   sum += dayOfWeek;
   sum1 += dayOfWeek;

    // 返回结果
    return sum.toString().padStart(2, '0') + sum1.toString().padStart(2, '0');
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
