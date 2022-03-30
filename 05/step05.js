console.log('Step 04');
console.info('Reading variables from a data source 👇🏻');

const cssData = {
  '--clr-500': '#607d8b',
  '--clr-400': '#78909c',
  '--clr-300': '#90a4ae',
  '--clr-200': '#b0bec5',
  '--clr-100': '#cfd8dc',
};

console.info(cssData);

const redPallet = {
  '--clr-500': '#f44336',
  '--clr-400': '#ef5350',
  '--clr-300': '#e57373',
  '--clr-200': '#ef9a9a',
  '--clr-100': '#ffcdd2',
};

const preDefinedPallet = {
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

const th = document.querySelector('.change-theme');
const root = document.querySelector(':root');

function switchThemeHandler(e) {
  const thColor = /(?<=theme-)\w+/gi;
  switch (e.target.className.match(thColor)[0]) {
    case 'red':
      reColor('red');
      console.info('theme just changed to RED');
      break;
    case 'teal':
      reColor('teal');
      console.info('theme just changed to TEAL');
      break;
    case 'blue':
      reColor('blue');
      console.info('theme just changed to BLUE');
      break;

    default:
      console.error(
        'You might clicked in some white space OR the class name in your HTML file might wrong!'
      );
      break;
  }
  console.info(cssData);
}

function reColor(color) {
  for (const key in cssData) {
    root.style.setProperty(key, preDefinedPallet[color][key]);
  }
}

th.addEventListener('click', switchThemeHandler);
