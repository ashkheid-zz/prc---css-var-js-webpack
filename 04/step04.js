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

const preDefinedPallet = {
  red: {
    500: '#f44336',
    400: '#ef5350',
    300: '#e57373',
    200: '#ef9a9a',
    100: '#ffcdd2',
  },
  blue: {
    500: '#2196f3',
    400: '#42a5f5',
    300: '#64b5f6',
    200: '#90caf9',
    100: '#bbdefb',
  },
  teal: {
    500: '#009688',
    400: '#26a69a',
    300: '#4db6ac',
    200: '#80cbc4',
    100: '#b2dfdb',
  },
};

const th = document.querySelector('.change-theme');
const boxes = document.querySelector('.boxes').children;

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
  const clrNum = /(?<=box-)\d+/gi;
  for (const box of boxes) {
    let j = box.className.match(clrNum)[0];
    cssData[`--clr-${j}00`] = preDefinedPallet[color][`${j}00`];
    box.style.backgroundColor = cssData[`--clr-${j}00`];
  }
}

th.addEventListener('click', switchThemeHandler);
