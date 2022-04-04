function getCSSCustomProp(selector = null) {
  const isGlobal = (selector === null) ? true : false;
  
  return (
    [].slice.call(document.styleSheets) /* Array.from */
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter((cssRule) => isGlobal ? cssRule : cssRule.selectorText === selector)
    .map((cssRule) => ({
      selector: cssRule.selectorText,
      rules: Object.fromEntries(
        cssRule.style.cssText
        .split(';')
        .filter((text) => text.trim().match(/^--\S+/gim))
        .map((text) => text.trim().split(':'))
        .map((entry) => [entry[0], entry[1].trim()])
      ),
    }))
    .filter((item) => Object.keys(item.rules).length !== 0)
  )
}


const inputBox = document.querySelector('[for=oneVariable]');

document.querySelector('.var-logger').addEventListener('click', (e) => {
  e.preventDefault();
  return console.log(getCSSCustomProp());
});

document.querySelectorAll('.the-form [type=radio]').forEach((element) =>
  element.addEventListener('click', (e) => {
    inputBox.disabled = e.target.id !== 'customVariable';
    inputBox.value = '';
  })
);