const CharacterCount = () => {

  const counterDom = document.getElementById('remainder');
  const textareaDom = document.getElementById('about');

  textareaDom.addEventListener('input', () => {

    counterDom.textContent = 140 - textareaDom.value.length;
  });
};

export { CharacterCount };