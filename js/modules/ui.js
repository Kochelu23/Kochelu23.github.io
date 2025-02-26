const overlay = document.createElement('div');
overlay.className = 'overlay hidden';
document.body.appendChild(overlay);

const messageDiv = document.querySelector('.message');

export const showMessage = (message, isError = false) => {
  messageDiv.textContent = message;
  messageDiv.style.backgroundColor = isError ? '#f44336' : '#4CAF50';
  messageDiv.classList.remove('hidden');

  setTimeout(() => {
    messageDiv.classList.add('hidden');
  }, 3000);
};

export const openModal = (modal) => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

export const closeModal = () => {
  document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);

export const initUI = () => {
  console.log('UI initialized');
};