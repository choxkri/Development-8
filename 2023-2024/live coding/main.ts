console.log("Hello world!");

function sumOftwoNumbers(a:number, b:number) : number{
  return a + b;
}

let anumber : number = 4;

function sumof2(a: number): ((b: number ) => number) {
  function internal(b: number):number{
    return a + b
  }
  return internal
}
console.log(sumof2(5)(10))

const sumOftwoNumbersAsLambda = (a: number) :  ((b: number) => number) => {
  const internalfunc : (b: number) => number = b => a + b;

  return internalfunc
}

//onjuiste manier
function sumOfAllNumbers(n : number){
  let sum = 0;
  while (n>0){
    //sum += n--
    sum = sum + n
    n = n -1
  }
  return sum
}

function sumOfAllNumbersRec_v0(n : number){
  let sum = 0;
  while (n>0){
    //sum += n--
    sum = sum + n
    n = n -1
  }
  return sum
}

function sumOfAllNumbersRec(n : number) : number{
  return n === 0 ? n : n + sumOfAllNumbersRec(n - 1)
}

const sumOfAllNumbersRec_v2 : (n : number) => number = n => n === 0 ? n : n + sumOfAllNumbersRec_v2(n - 1)

console.log
console.log(sumOfAllNumbersRec(5))
console.log(sumOfAllNumbersRec_v2(5))
/*
Lambda calculus: 1930 Church

parameters (variables): x, y, ..., T, U, V, ...
abstractions (anonymous functions - lambda functions): fun (x:t) -> ret
applications (calling a lambda): f arg

eval x => x
eval (fun x -> ret) => (fun x -> ret)
eval f g where eval (g => g') => f g'
eval (fun x -> ret) arg => ret[x |-> arg]

eval (fun x -> x) a => x[x |-> a] => a
eval (fun x -> fun y -> x) (fun z -> z) => (fun y -> x)[x |-> (fun z -> z)] => (fun y -> fun z -> z)


(fun x -> x + 1) (1 + 1) => (fun x -> x + 1) 2 => (x + 1)[x |-> 2] => 2 + 1 => 3

A function that takes as input a parameter and returns a function with the next parameter(s) known as a "curryied" function

fun x -> fun t -> x + y
fun x t -> x + y


let bindings:

let c = v in rest
(fun c -> rest) v


check(v,T) => (T[v], T)
check(fun (x:t_1) => ret, T) => (t_1 -> t_2, T)
  when check(ret, T[x := t_1]) => (t2, _)
check(f x, T) => (t_2, T)
  when check(f, T) => (t_1 -> t_2, T)  
  when check(x, T) => (t_1, T)


source := fun (x:number) => x > 0
check (fun (x:number) => x > 0, {}) => number -> boolean
  check (x > 0, { x: number }) => (boolean, { x: number})
*/

