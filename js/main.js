import { initAuth } from './modules/auth.js';
import { initPassword } from './modules/password.js';
import { initUI } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initUI();
  initAuth();
  initPassword();
});