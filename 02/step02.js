console.log('Step 02');
console.info('Loading style.css to HTML using JS');

// Get HTML head element
const head = document.querySelector('head');

// Create new link Element
const link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet'
link.type = 'text/css';
link.href = '../style.css';

// Append link element to HTML head
head.appendChild(link);
