import { showMessage, openModal, closeModal } from './ui.js';

export const initPassword = () => {
  const passwordModal = document.querySelector('.modal_pas');
  const rangeInput = document.querySelector('.range_length');
  const pasValue = document.getElementById('pas_value');

  const genBtn = document.querySelector('.gen_btn');
  if (genBtn) {
    genBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      openModal(passwordModal);
    });
  }

  rangeInput.addEventListener('input', () => {
    pasValue.textContent = rangeInput.value;
  });

  document.querySelector('.modal_btn').addEventListener('click', (e) => {
    e.preventDefault();
    const length = document.querySelector('.range_length').value;
    const useUpper = document.querySelector('input[name="upper"]').checked;
    const useNumbers = document.querySelector('input[name="numbers"]').checked;
    const useSymbols = document.querySelector('input[name="simbols"]').checked;

    const newPassword = generatePassword(length, useUpper, useNumbers, useSymbols);
    document.querySelector('.modal_new_pas').textContent = newPassword;
  });

  document.querySelector('.modal_copy').addEventListener('click', (e) => {
    e.preventDefault();
    const password = document.querySelector('.modal_new_pas').textContent;
    navigator.clipboard.writeText(password).then(() => {
      showMessage('Password copied to clipboard!');
    });
  });

  const generatePassword = (length, useUpper, useNumbers, useSymbols) => {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*';

    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  };
};