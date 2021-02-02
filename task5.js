const refs = {
    input: document.querySelector("#name-input"),
    nameLabel: document.querySelector('h1 > span'),
  };
  refs.input.addEventListener('input', onInputChange);
  function onInputChange(event) {
    event.currentTarget.value
    ? (refs.nameLabel.textContent = event.currentTarget.value)
      :  (refs.nameLabel.textContent = 'незнайомець');
};