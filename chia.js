function chia() {
  const input = getInputs();
  if (!input) return;
  if (input.b === 0) {
    alert("Không thể chia cho 0!");
    return;
  }
  const kq = input.a / input.b;
  document.getElementById("ketqua").innerText = "Kết quả: " + kq;
}
