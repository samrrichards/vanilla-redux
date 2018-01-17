let count = 0;

const countValue = document.getElementById('count');
function render() {
  countValue.innerHTML = count.toString();
}

document.getElementById('increment').addEventListener('click', () => {
 count++;
 render();
});
document.getElementById('decrement').addEventListener('click', () => {
  count--;
  render();
});
