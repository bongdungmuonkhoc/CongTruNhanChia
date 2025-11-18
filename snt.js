function kiemTraNguyenTo() {
  const input = parseInt(prompt("Nhập một số nguyên để kiểm tra:"));
  if (isNaN(input) || input < 2) {
    alert(input + " không phải là số nguyên tố.");
    return;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(input + " là số nguyên tố.");
  } else {
    alert(input + " không phải là số nguyên tố.");
  }
}
