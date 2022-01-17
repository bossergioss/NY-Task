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

/*const heightcyl = Number(prompt('Введите высоту цилиндра'));
const basediam = Number(prompt('Введите диаметр основания'));

function volume (a, b) {
    const radius = basediam / 2;
    const cylindervolume = PI * radius * radius * heightcyl;
    return cylindervolume;
}

const result = volume (heightcyl, basediam);
alert('Объем цилиндра равен = ' + result);*/

//Задание №4//

const COURSE = 27.9514;

function getUah (a) {
    return  COURSE * a;
}

function getUsd (b) {
    return b / COURSE;
}

const mode = prompt('В какую валюту конвертировать? \n 1- UAH \n 2- USD');

let count;

switch (mode) {
    case '1' :
        const uah = Number(prompt('Введите количество USD для конвертации'));
        count = getUah(uah);
        alert('Вы получите ' + count + ' UAH');
        break;

    case '2' :
        const usd = Number(prompt('Введите количество UAH для конвертации'));
        count = getUsd(usd);
        alert('Вы получите ' + count + ' USD');
        break;
    
    default :
        alert('Неверно выбран режим конвертации');
}



