const tampilkan = document.querySelector(".result");

function appendToDisplay(input) {
  tampilkan.value += input;
}

function clearDisplay() {
  tampilkan.value = "";
}

function calculate() {
  try {
    tampilkan.value = eval(tampilkan.value);
  } catch (error) {
    tampilkan.value = "Pinjam dulu seratus";
  }
}
