function getCSSCustomProp(selector) {
  if (selector === void 0) { 
    console.warn(`As you didn't provide any parameter for this function, the '${selector = ':root'}' selector is assumed as the parameter.`)
  };
  return (
    /* Calling the Array.prototype.slice
     * in the context of document.styleSheets,
     * which masks an array of document.styleSheets */
    [].slice.call(document.styleSheets)
    /* Extracting the 'cssRules' objects
     * into a brand-new array */
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    /* Here we have a nested array,
     * So, let's make it flat! */  
    .flat()
    /* Filtering out specified rules for the given selector */  
    .filter((cssRule) => cssRule.selectorText === selector)
    /* Let's make an array of each those rules */
    .map((cssRule) => cssRule.style.cssText.split(';'))
    /* Here we have a nested array too!
     * So, let's flat it again! */  
    .flat()
    /* I just need those custom variables to have
     * but there's an extra space
     * at the very beginning of each strings (except the first one). * Thus, before filtering those custom variables,
     * Ima trim these strings first */
    .map((text) => text.trim())
    /* Now It's time to filter the custom variables out!
     * the regex matches to all strings begins with
     * two hyphens following by non-whiteSpace character,
     * which means the matches arr most likely valid css variables */
    .filter((text) => text.match(/^--\S+/gi))
    /* Let's parse the result to
     * a valid object literal */
    .map((text) => text.split(':'))
    .map((parts) => ({ key: parts[0], value: parts[1].trim() }))
  );
}

function getCSSCustomPropALL() {
  return (
    [].slice.call(document.styleSheets)
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    /* ⭐ Deleted line from the last function implementation
     * .filter((cssRule) => cssRule.selectorText === selector)
     * which macks it do the job globally */
    .map((cssRule) => cssRule.style.cssText.split(';'))
    .flat()
    .map((text) => text.trim())
    .filter((text) => text.match(/^--\S+/gi))
    .map((text) => text.split(':'))
    .map((parts) => ({ key: parts[0], value: parts[1].trim() }))
  );
}

document
  .querySelector('.var-logger')
  .addEventListener('click', (e) => {
    e.preventDefault();
    return console.log(getCSSCustomProp())
  });

