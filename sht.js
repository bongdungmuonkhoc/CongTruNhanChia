function kiemTraHoanThien() {
    const n = parseInt(prompt("Nhập một số để kiểm tra số hoàn thiện:"));
    if (isNaN(n) || n <= 0) {
      alert("Vui lòng nhập số nguyên dương!");
      return;
    }
  
    let tong = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        tong += i;
      }
    }
  
    if (tong === n) {
      alert(n + " là số hoàn thiện!");
    } else {
      alert(n + " không phải là số hoàn thiện!");
    }
  }
  