(function () {
  const params = new URLSearchParams(window.location.search);
  const fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  document.querySelectorAll('form[data-campaign-form]').forEach((form) => {
    fields.forEach((name) => {
      const input = form.querySelector(`input[name="${name}"]`);
      if (input) input.value = params.get(name) || input.value || '';
    });
    const pathField = form.querySelector('input[name="landing_path"]');
    if (pathField) pathField.value = window.location.pathname;
    const refField = form.querySelector('input[name="referrer"]');
    if (refField) refField.value = document.referrer || '';
  });
})();
