/* One shared appeal across home, courses and lessons. No third-party scripts. */
(() => {
  'use strict';
  const storageKey = 'feynotes-support-dismissed-at';
  const cooldown = 30 * 24 * 60 * 60 * 1000;

  function readDismissal() {
    for (const name of ['localStorage', 'sessionStorage']) {
      try {
        const value = Number(window[name].getItem(storageKey));
        const age = Date.now() - value;
        if (Number.isFinite(value) && value > 0 && age >= 0 && age < cooldown) return true;
      } catch (_) { /* Storage may be disabled; reading must remain available. */ }
    }
    return false;
  }

  function rememberDismissal() {
    for (const name of ['localStorage', 'sessionStorage']) {
      try { window[name].setItem(storageKey, String(Date.now())); } catch (_) { /* Optional. */ }
    }
  }

  function init() {
    const donationLinks = document.querySelectorAll('a[data-donate]');
    donationLinks.forEach(link => link.addEventListener('click', rememberDismissal));
    if (readDismissal() || typeof HTMLDialogElement === 'undefined') return;

    const dialog = document.createElement('dialog');
    dialog.className = 'fn-support-dialog';
    dialog.setAttribute('aria-labelledby', 'fn-support-title');
    dialog.setAttribute('aria-describedby', 'fn-support-description');
    dialog.innerHTML = `
      <button type="button" class="fn-support-close" aria-label="Chiudi la richiesta di donazione" autofocus>×</button>
      <div class="fn-support-eyebrow">// un progetto indipendente</div>
      <div class="fn-support-symbol" aria-hidden="true">♥</div>
      <h2 id="fn-support-title">Ti aiuto a studiare.<br>Mi aiuti a continuare?</h2>
      <p id="fn-support-description">Sono Elia, uno studente come te. Creo e condivido questi appunti gratuitamente. Prepararli, correggerli e tenere aggiornato FeyNotes richiede tempo e lavoro.</p>
      <p class="fn-support-reason">Se ti sono utili, una donazione mi aiuta a portare avanti il progetto e a mantenerlo aperto a tutti. Anche <strong>2 €</strong> sono un aiuto concreto.</p>
      <a class="fn-donate-button" data-donate href="https://ko-fi.com/eliacinti" target="_blank" rel="noopener noreferrer">Dona su Ko-fi <span aria-hidden="true">↗</span></a>
      <p class="fn-support-note">Importo libero · Puoi donare anche una sola volta</p>
      <button type="button" class="fn-support-continue">Continua a studiare</button>
      <p class="fn-support-free">Gli appunti restano gratuiti, anche senza donare.</p>`;
    document.body.append(dialog);

    function dismiss() {
      rememberDismissal();
      dialog.close();
    }
    dialog.querySelector('.fn-support-close').addEventListener('click', dismiss);
    dialog.querySelector('.fn-support-continue').addEventListener('click', dismiss);
    dialog.querySelector('[data-donate]').addEventListener('click', dismiss);
    dialog.addEventListener('cancel', rememberDismissal);
    dialog.addEventListener('close', () => document.body.classList.remove('fn-support-open'));
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss();
    });

    // Show once on entry, including when arriving directly at a lesson.
    window.setTimeout(() => {
      if (readDismissal() || window.matchMedia('print').matches) return;
      try {
        dialog.showModal();
        document.body.classList.add('fn-support-open');
      } catch (_) { /* Unsupported dialogs never prevent access to the notes. */ }
    }, 900);
    window.addEventListener('beforeprint', () => { if (dialog.open) dialog.close(); });
    window.addEventListener('pageshow', () => { if (dialog.open && readDismissal()) dialog.close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
