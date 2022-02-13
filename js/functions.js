'use strict'

// 0) Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65). Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа. 

// Ожидаемый вывод:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false


// function isWorkingAgePerson(age) {
// 	if (age >= 16 && age <= 65) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isWorkingAgePerson(20));




// 1) *Функция, которая запрашивает число и проверяет, простое ли оно (простое число делиться без остатка на себя и на единицу).

// function userNumber(number) {
// 	let simpleNumber = true;
// 	for (let i = 2; i < number; i++) {
// 		if (number % i === 0) {
// 			simpleNumber = false;
// 			break;
// 		}
// 	}
// 	return simpleNumber;
// }
// console.log(userNumber(6));


// function userNumber(number) {

// 	if (number === 2) {
// 		return true;
// 	} else {
// 		if (number % 2 === 0) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
// console.log(userNumber(2));



// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело


// function checkMultiplicity(number, number1) {
// 	if (number % number1 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(checkMultiplicity(15, 4));



// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.

// function triangle(a, b, c) {
// 	if (a + b > c && b + c > a && a + c > b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(triangle(5, 2, 1));





// 4) Написать функции расчета площадей (или поверхности) следующих фигур/тел: треугольника, прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур. Функция должна возвращать вычисленное значение.


// function triangle(a, b, c) {
// 	if (a + b > c && b + c > a && a + c > b) {
// 		return a * b / 2;
// 	} else {
// 		return false;
// 	}
// }
// console.log(triangle(5, 5, 5));


























































