console.log('Step 06');
console.info('Manipulating css file from JavaScript 👇🏻');

/*
class ColorPalette {
  constructor(props, colors) {
    this.properties = props; //array of properties
    this.palette = colors; //array of colors
  }
  theThis() {
    console.log(this);
  }
}*/

const preDefinedPalette = {
  red: {
    '--clr-500': '#f44336',
    '--clr-400': '#ef5350',
    '--clr-300': '#e57373',
    '--clr-200': '#ef9a9a',
    '--clr-100': '#ffcdd2',
  },
  blue: {
    '--clr-500': '#2196f3',
    '--clr-400': '#42a5f5',
    '--clr-300': '#64b5f6',
    '--clr-200': '#90caf9',
    '--clr-100': '#bbdefb',
  },
  teal: {
    '--clr-500': '#009688',
    '--clr-400': '#26a69a',
    '--clr-300': '#4db6ac',
    '--clr-200': '#80cbc4',
    '--clr-100': '#b2dfdb',
  },
};

function switchThemeHandler(e) {
  const thColor = /(?<=theme-)\w+/gi;
  //Test String would be something like "theme-red theme-teal theme-blue"
  switch (e.target.className.match(thColor)[0]) {
    case 'red':
      //ClassName has "theme-red"
      reColor(':root', 'step06.css', 'red');
      console.info('theme just changed to RED');
      break;
    case 'teal':
      //ClassName has "theme-teal"
      reColor(':root', 'step06.css', 'teal');
      console.info('theme just changed to TEAL');
      break;
    case 'blue':
      //ClassName has "theme-blue"
      reColor(':root', 'step06.css', 'blue');
      console.info('theme just changed to BLUE');
      break;

    default:
      console.error(
        'You might clicked in some white space OR the class name in your HTML file might wrong!'
      );
      break;
  }
}

function reColor(cssSelector, cssFileName, color) {
  // looks up the given <cssSelector> through <cssFileName> file
  // and IF the file exist, manipulation would happen
  Object.values(document.styleSheets).forEach((styleSheet) => {
    styleSheet.href?.includes(cssFileName) &&
      Object.values(styleSheet.cssRules).forEach((ruleBlock) => {
        console.dir(ruleBlock);
        if (ruleBlock.selectorText.includes(cssSelector)) {
          //Changing color palette
          let props = ruleBlock.cssText.match(/--clr-\d+/gi);
          props.forEach((prop) => {
            ruleBlock.styleMap.set(prop, preDefinedPalette[color][prop]);
          });
        }
      });
  });
}

document
  .querySelector('.change-theme')
  .addEventListener('click', switchThemeHandler);
