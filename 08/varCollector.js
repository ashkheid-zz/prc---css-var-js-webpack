// A recursive function which generates an object literal out of an Array
function arrayToObject(arr) {
  return Object.fromEntries(
    arr.map(([key, val]) =>
      Array.isArray(val) ? [key, arrayToObject(val)] : [key, val]
    )
  );
}


function getCSSCustomProp(selector = null) {
  // Collecting all "CSSStyleRule" for each "selector" from provided styleSheet locally
  const cssRules_all = Array.from(document.styleSheets)
    .map((styleSheet) => Array.from(styleSheet.cssRules))
    .flat();

  // Filtering out "CSSStyleRule" only if includes at least one "CSS custom variable declaration"
  let cssRules = cssRules_all.filter((cssRule) =>
    cssRule.cssText.match(/--\S+:/gi)
  );

  // If "selector" parameter's provided, the "cssRule" collection would filter one step further to match the "selector"
  if (selector !== null) {
    cssRules = cssRules.filter((cssRule) => cssRule.selectorText === selector);
  }

  // Creating a structured data (an Array) out of "cssRules" including the "selector(s)" and it's rule set(s)
  const cssRulesArray = cssRules.map((cssRule) => [
    cssRule.selectorText,
    [cssRule.style.cssText]
      .map(text => text.match(/--\S+: ?\S+;/gi)) /* Selecting "CSS custom variable declaration"*/
      .flat()
      .map(text => text.replace(/"|'| |;|\\/gi, '')) /* Trimming */
      .map(raw => raw.split(':'))
  ]);

  // Creating object literal out of "cssRulesArray"
  const cssRulesObj = arrayToObject(cssRulesArray);

  return cssRulesObj;
}

// * This variable is used in both "Button's click event handler" and "RadioButtons' click event handlers"
const inputBox = document.querySelector('[for=oneVariable]');

// Button's click event handler
document.querySelector('.var-logger').addEventListener('click', (e) => {
  e.preventDefault();

  if (inputBox.disabled) {
    return console.log(getCSSCustomProp());
  }

  if (inputBox.value === '') {
    return console.warn(`InputBox is empty!`);
  } else {
    return console.log(getCSSCustomProp(inputBox.value));
  }
});

// RadioButtons' click event handlers
document.querySelectorAll('.the-form [type=radio]').forEach((element) =>
  element.addEventListener('click', (e) => {
    inputBox.disabled = e.target.id !== 'customVariable';
    inputBox.value = '';
  })
);
