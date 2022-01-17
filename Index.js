"use strict";

//Задание №1//

/*const width = +prompt('Введите ширину прямоугольника');
const height = +prompt('Введите высоту прямоугольника');

function area (a, b) {
    const rectangleArea = a * b;
    return rectangleArea;
}

const result = area(width, height);
alert('Площадь прямоугольника = ' + result);*/

//Задание №2//

const PI = 3.14;

/*const diameter = Number(prompt('Введите диаметр окружности'));

function length (x) {
    const lengcirc = PI * x;
    return lengcirc;
}

const result = length(diameter);
alert('Длина окружности = ' + result);*/

//Задание №3//

const heightcyl = Number(prompt('Введите высоту цилиндра'));
const basediam = Number(prompt('Введите диаметр основания'));

function volume (a, b) {
    const radius = basediam / 2;
    const cylindervolume = PI * radius * radius * heightcyl;
    return cylindervolume;
}

const result = volume (heightcyl, basediam);
alert('Объем цилиндра равен = ' + result);
