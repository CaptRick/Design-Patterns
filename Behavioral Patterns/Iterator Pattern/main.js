import './style.css';
import Iterator from './iterator';

const app = document.querySelector('#app');

const elements = [1, 2, 3, 4, 5];
const elementsIterator = new Iterator(elements);

const currentElement = document.createElement('div');
currentElement.innerText = `Current element: ${elementsIterator.next()}`;

const toggleButton = document.createElement('button');
toggleButton.innerText = 'Next';

app.appendChild(currentElement);
app.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  if (elementsIterator.hasNext()) {
    const element = elementsIterator.next();
    currentElement.innerText = `Current element: ${element}`;
  }
});