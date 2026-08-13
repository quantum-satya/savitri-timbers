(() => {
  const form = document.querySelector('[data-enquiry-form]');
  if (!form) return;

  const status = form.querySelector('[data-enquiry-status]');
  const sourceInput = form.querySelector('[name="source"]');
  const params = new URLSearchParams(window.location.search);
  const source = params.get('source');

  if (sourceInput && source) {
    sourceInput.value = source.slice(0, 80);
  }

  const applicationSelect = form.elements.namedItem('application');
  const applicationBySource = {
    'products-maple': 'Maple flooring',
    'maple-hero': 'Maple flooring',
    'maple-flagship': 'Maple flooring',
    'maple-cta': 'Maple flooring',
    'teak-hero': 'Teak flooring',
    'teak-cta': 'Teak flooring',
    'indoor-sports-hero': 'Indoor sports flooring',
    'indoor-sports-cta': 'Indoor sports flooring',
    'flooring-hub-hero': 'Indoor sports flooring',
    'flooring-hub-cta': 'Indoor sports flooring',
    'technical-hero': 'Indoor sports flooring',
    'technical-cta': 'Indoor sports flooring',
    products: 'Timber supply',
    'products-cta': 'Timber supply'
  };

  if (
    applicationSelect &&
    !applicationSelect.value &&
    source &&
    applicationBySource[source]
  ) {
    applicationSelect.value = applicationBySource[source];
  }

  const setStatus = (state, message) => {
    if (!status) return;
    status.hidden = false;
    status.dataset.state = state;
    status.textContent = message;
  };

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      setStatus(
        'error',
        'Please complete the required fields. If the form cannot be sent, email karan@savitriagro.com.'
      );
      return;
    }

    const detail = {
      event: 'enquiry_submit',
      page_path: window.location.pathname,
      cta_source: sourceInput ? sourceInput.value : '',
      application: form.elements.namedItem('application')
        ? form.elements.namedItem('application').value
        : ''
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(detail);
    window.dispatchEvent(new CustomEvent('enquiry_submit', { detail }));

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'enquiry_submit', {
        page_path: detail.page_path,
        cta_source: detail.cta_source,
        application: detail.application
      });
    }

    setStatus(
      'success',
      'Your email application should open with this enquiry. Send that message to complete it. Enquiries go to karan@savitriagro.com. If nothing opens, email that address directly.'
    );
  });
})();
