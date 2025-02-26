import { showMessage, closeModal, openModal } from './ui.js';

const firebaseUrl = "https://passwordget-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const initAuth = () => {
  const loginBtn = document.querySelector('.btn');
  const registerBtn = document.querySelector('.btn_two');
  const loginModal = document.querySelector('.login');
  const registerModal = document.querySelector('.registration');

  loginBtn.addEventListener('click', () => openModal(loginModal));
  registerBtn.addEventListener('click', () => openModal(registerModal));

  document.querySelector('.login_btn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('.login input[name="name"]').value;
    const password = document.querySelector('.login input[name="pas"]').value;

    fetch(`${firebaseUrl}/users/${name}.json`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch user data.');
        return response.json();
      })
      .then((user) => {
        if (user && user.password === password) {
          showMessage('Login successful!');
          closeModal();
        } else {
          showMessage('User not found or password is incorrect. Please register first.', true);
        }
      })
      .catch((error) => {
        showMessage('Error: ' + error.message, true);
      });
  });

  document.querySelector('.reg_btn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('.registration input[name="name"]').value;
    const password = document.querySelector('.registration input[name="pas"]').value;

    if (!name || !password) {
      showMessage('Please fill in all fields.', true);
      return;
    }

    const userData = { username: name, password: password };

    fetch(`${firebaseUrl}/users/${name}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to register user.');
        return response.json();
      })
      .then(() => {
        showMessage('Registration successful!');
        closeModal();
      })
      .catch((error) => {
        showMessage('Error: ' + error.message, true);
      });
  });
};