function calculateSum() {
    // 获取当前时间
    const currentDate = new Date();

    // 获取月份、日期和星期几
    const month = (currentDate.getMonth() + 1).toString();
    const date = currentDate.getDate().toString();
    const dayOfWeek = currentDate.getDay(); // 0 是星期日，1 是星期一，以此类推

    // 计算月份、日期和星期几的和
    let sum1 = 0;
    let sum2 = 0;
	
    for (let i = 0; i < month.length; i++) {
        sum1 += parseInt(month[i]);
    }
	
    for (let i = 0; i < date.length; i++) {
        sum2 += parseInt(date[i]);
    }
   sum1 += dayOfWeek;
   sum2 += dayOfWeek;

    // 返回结果
    return sum1.toString().padStart(2, '0') + sum2.toString().padStart(2, '0');
}

function displaySum() {
  const sumElement = document.getElementById('registeCode');
  const sum = calculateSum();
  sumElement.textContent = `注册码信息: Ctrl+PY+${sum}`;
	
  //const sumElement2 = document.getElementById('backCode');
  //const sum = calculateSum();
  //sumElement2.textContent = `后台码信息: 暂未实现`;
}

// Update sum every second
setInterval(displaySum, 1000);

// Initial display
displaySum();
