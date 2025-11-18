function nhan() {
  const input = getInputs();
  if (!input) return;
  const kq = input.a * input.b;
  document.getElementById("ketqua").innerText = "Kết quả: " + kq;
}
