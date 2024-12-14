import { sum } from '../../utils/sum';

const buttons = document.querySelectorAll('.btn');

const alertResult = () => {
    const result = sum(2, 2);
    alert(result);
};

buttons.forEach((button) => {
    button.addEventListener('click', () => alertResult());
});
console.log('Asdasd');
