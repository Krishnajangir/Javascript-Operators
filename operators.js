
// nullish coalescing operator example
console.log('nullish operator example'  ,null ?? 5) //5
console.log('nullish operator example' , 5 ?? 3) // 5 

// Logical nusslish operator
let x = null;
let y = undefined;
let z = 4;
console.log( 'logical nullish operator example'  ,x ??= z); //4
console.log( 'logical nullish operator example' , y = (y ?? z)); //4
console.log( 'logical nullish operator example' ,x, y, z) // 4, 4, 4

// optiional chaining
let singers = {
      name: 'Armaan Malik',
      otherDetails: {
            age: 25
      }
}

let chainingExample = singers.otherDetails?.name;
console.log('optional chaining operator example' , chainingExample); // undefined

let a = null;
let b;
let c = a?.[b++];
console.log('optional chaining operator example' ,c); // undefined

// multiple optional chaining example 

let multiple = singers.otherDetails?.name?.age;
console.log('optional chaining operator example' ,multiple); // undefined

// example of nullish and optional chaining operator.

let xx = {
      name: {
            firstName: 'krishna'
      }
}
let yy = xx.name?.lastName ?? 'not specified';
console.log('optional chaining operator example' ,yy); // 'not specified'