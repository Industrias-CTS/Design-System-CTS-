// src/sections/views/login/script.ts
//
// Extracted verbatim from the small inline <script> block (index.html
// 3542-3566, no wrapping IIFE in the original).
//
// IMPORTANT: index.html calls these two functions via inline HTML attributes
// — `onsubmit="handleLogin(event)"` on #login-form (index.html line 2611)
// and `onclick="togglePass(this)"` on the eye button (index.html line 2627).
// Wrapping them in a module scope (as required to export an init()) makes
// them invisible to the global scope Vite modules don't leak into, which
// would silently break both inline handlers. To keep the exact same
// behavior without touching index.html's markup, initLogin() attaches them
// to `window` explicitly — flagged here and in the final report so this
// isn't missed during the index.html surgery pass. (The cleaner long-term
// fix is to replace the inline attributes with addEventListener calls here
// and drop the window.* assignment, but that changes index.html markup,
// which is out of scope for this pass.)
import '../../../styles/sections/views/login.css';

function togglePass(btn) {
  const input = document.getElementById('password');
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  btn.querySelector('svg').innerHTML = isPass
    ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
    : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
}

function handleLogin(e) {
  e.preventDefault();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorEl  = document.getElementById('login-error');

  if (!email || !password) {
    errorEl.textContent = 'Por favor completa todos los campos.';
    errorEl.classList.add('show');
    return;
  }

  errorEl.classList.remove('show');
  // Lógica de autenticación aquí
  // onLogin(usuario)
}

// Demo markup relocated verbatim from index.html's #view-login
// (login-root: back link, orbs, logo col, form col). The inline
// onsubmit="handleLogin(event)"/onclick="togglePass(this)" attributes
// below rely on window.handleLogin/window.togglePass, assigned by
// initLogin() — order relative to this injection doesn't matter since
// those attributes only fire on later user interaction.
function renderLoginView() {
  return `
<div class="login-root">

  <a href="#" class="login-back">← CTS Design System</a>

  <!-- Light orbs decorativos -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <div class="login-content">

    <!-- ── Izquierda: logo ── -->
    <div class="login-logo-col">
      <div class="login-logo-card">
        <img class="login-logo-img" src="assets/logos/logo-cts-blanco.png" alt="CTS">
      </div>
    </div>

    <!-- ── Derecha: formulario ── -->
    <div class="login-form-col">
      <div class="login-card">

        <div class="login-head">
          <h2 class="login-title">Inicio de sesión</h2>
          <p class="login-sub">Ingresa tus credenciales para acceder a la plataforma</p>
        </div>

        <div id="login-error" class="login-error" role="alert"></div>

        <form class="login-form" id="login-form" onsubmit="handleLogin(event)" novalidate>

          <label class="field-label" for="email">Correo Electrónico</label>
          <input id="email" name="email" type="email"
                 class="login-input" placeholder="correo@cts.com"
                 autocomplete="email" autofocus/>

          <div class="field-row">
            <label class="field-label" for="password">Contraseña</label>
            <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="pass-wrap">
            <input id="password" name="password" type="password"
                   class="login-input" placeholder="••••••••"
                   autocomplete="current-password"/>
            <button type="button" class="eye-btn" aria-label="Mostrar contraseña"
                    onclick="togglePass(this)">
              <svg id="eye-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>

          <button type="submit" class="submit-btn">Iniciar Sesión</button>

          <p class="login-terms">
            Al continuar, aceptas nuestros <a href="#">términos de servicio</a> y <a href="#">políticas de privacidad</a>.
          </p>

        </form>
      </div>
    </div>

  </div>
</div>
`;
}

export function initLogin() {
  document.getElementById('view-login').innerHTML = renderLoginView();

  window.togglePass = togglePass;
  window.handleLogin = handleLogin;
}
