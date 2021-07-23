
// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce
/*filter中的回调函数有一个要求：必须返回一个boolean值
true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
false：当返回false时，函数内部会过滤这次的n*/
const nums = [120, 201, 30, 140, 500, 60, 22, 13, 45];
/* 1. 简单简写
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (pre, n) {
  return pre + n
}, 0)
*/
// 2. 精简写法
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
/*

// 3. 分开写法
// 1.filter函数的使用
let newNums = nums.filter(function (n) {
  return n < 100;
})
// 2.map函数的使用
let new2Nums = newNums.map(function (n) {
  return n * 2;
})
// 3.reduce函数的使用：对数组中所有的内容进行汇总
let total = new2Nums.reduce(function (preValue, n) {
  return preValue + n;
}, 0)
*/