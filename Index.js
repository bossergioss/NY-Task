"use strict";

//Задание №1//

const width = +prompt('Введите ширину прямоугольника');
const height = +prompt('Введите высоту прямоугольника');

function area (a, b) {
    const rectangleArea = a * b;
    return rectangleArea;
}

const result = area(width, height);
alert('Площадь прямоугольника = ' + result);
