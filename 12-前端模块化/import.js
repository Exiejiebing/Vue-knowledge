// 1.导入对象{}中定义的变量
import {flag, name, age, heigth, sum} from "./export.js"
if (flag) {
  console.log(name);
}

// 2.直接导入export定义的变量
import {num1, num2} from "./export.js"
console.log(sum(num1, num2))

// 3.导入函数/类
import {mul, Person} from "./export.js";
console.log(mul(num1, num2));
const p = new Person();
p.run();

// 4.导入export default
import addr from "./export.js"
addr('export default')

// 5.统一全部导入
import * as all from "./export.js"
console.log(all.num2)
