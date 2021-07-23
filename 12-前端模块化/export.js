let name = '谢洁冰'
let age = 26
let heigth = 15
let flag = true

function sum(num1, num2) {
  return num1 + num2
}

// 1.第一种导出方式
export {name, age, flag, sum, heigth}

// 2.第二种导出方式
export let num1 = 30
export let num2 = 50

// 3.第三种导出方式：导出函数或者类
export function mul(num1, num2) {
  return num1 * num2
}
export class Person {
  run() {
    console.log('导出类');
  }
}

// 4.第四种方式：export default——同一个模块中不允许存在多个export default
/*const address = '广州市'
export default address*/
export  default function (info) {
  console.log(info)
}