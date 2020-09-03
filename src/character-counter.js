const CharacterCount = () => {

  const counterDom = document.getElementById('remainder');
  const textareaDom = document.getElementById('about');

  textareaDom.addEventListener('input', () => {

    counterDom.textContent = 140 - textareaDom.value.length;

    (counterDom.textContent === '0') ? counterDom.style.color = 'red' : counterDom.style.color = 'black';
  });
};

export { CharacterCount };