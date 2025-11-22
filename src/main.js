import './style.css';
const btn = document.querySelector('.btn');
const input = document.querySelector('input[type="date"]');
const resultBox = document.querySelector('.result-box');

const calculateAge = () => {
  const birthDate = new Date(input.value);
  const today = new Date();
  const ageInYears = (today - birthDate) / (365 * 24 * 60 * 60 * 1000); // 大約歲數

  const dogAge = ageInYears;
  const humanAge = dogAge * 7;

  resultBox.querySelectorAll('.highlight')[0].textContent = dogAge.toFixed(1);
  resultBox.querySelectorAll('.highlight')[1].textContent = humanAge.toFixed(1);
};

btn.addEventListener('click', () => {
  calculateAge();

  // 存到 localStorage
  localStorage.setItem('birthDate', input.value);
});

// 載入上次輸入
const savedDate = localStorage.getItem('birthDate');
if (savedDate) {
  input.value = savedDate;
  calculateAge();
}
