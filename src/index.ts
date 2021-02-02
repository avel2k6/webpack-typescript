import './index.css';
import { ContainerType } from './types/common';

console.log('hello world');

const a = 1 + 2;
const b = a + 1;

const container: ContainerType = {
    apple: a,
    banana: b,
};

const stringArray: (string|number)[] = [
    'apple',
    'banana',
    null,
    '123',
    123,
];

const d = container.banana * 4;

console.log(d);
console.log(stringArray);
