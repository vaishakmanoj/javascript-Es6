// constructor function
// let Person = function (name, genter, yearOfBirth){
//     this.name = name;
//     this.genter = genter;
//     this.yearOfBirth = yearOfBirth;
//     this.calcAge = function (){
//         let age = new Date().getFullYear() - this.yearOfBirth
//         console.log(age);
//     }
// }

//  let vaishak = new Person ('vaishak', 'male', 1995) 
//  vaishak.calcAge()
//  console.log(vaishak);

//  let Roshith = new Person ('Roshith', 'male', 1993)
//  Roshith.calcAge()
//  console.log(Roshith);
//.............................................................


//prototype property
// let Person = function (name, genter, yearOfBirth){
//     this.name = name;
//     this.genter = genter;
//     this.yearOfBirth = yearOfBirth;   
// }
// Person.prototype.calcAge = function (){
//     let age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age);
// }
//  let vaishak = new Person ('vaishak', 'male', 1995) 

//  console.log(vaishak);

//  let Roshith = new Person ('Roshith', 'male', 1993)

//  console.log(Roshith);
//................................................................

// class

// class Person {
//     constructor(name, birthYear, genter){
//         this.name = name ;
//         this.birthYear = birthYear;
//         this.genter = genter

//     }
//     calcAge () {
//         let age = new Date().getFullYear() - this.birthYear
//         console.log(age);
//     }
// }

// let Vaishak = new Person('Vaishak', 1995 , 'male' )
// Vaishak.calcAge()
// console.log(Vaishak);

// getter and setter

// let vaishak = {
//     name : 'vaishak', 
//     age : 28,

//     get getName(){
//         return 'Mr.'+ this.name
//     },
//     set setName(val){
//         if  (val.length < 3){
//             alert('Value should atleast 3 characters')
//         }else{
//         this.name = val ;
//         }
//     }
// }


// console.log(vaishak.getName);

// vaishak.setName = 'Ro'
// console.log(vaishak.getName);


// destructuring an array - 

// let Student = ["vk", "Dev", "Kiran", "Sonu",["jojo","tomy"]]

// let [firstname, secondname, thirdname, lastname,[fifthname,sixthname]] = Student

// console.log(thirdname);
// console.log(sixthname);
//............................................


//  destructuring an Object :

// let Person = {
//     name : "Vaishak",
//     age : 28,
//     gender : "male"
// }

// let {name,age,gender} = Person

// console.log(Person);

//.........................................

///spread operator :

// let a = [1,2,3,4,5]
// console.log(...a);
//.....................
// let str = "vaishak"
// console.log(...str);
//........copying array into another array............
// let arr = ["nihal", "rohan", ...a]
// console.log(arr);
//.......combining two array into single array............
// let arr1 = ["nihal", "rohan"]
// let arr2 = ["vaishak", "sachin"]
// console.log(...arr1, ...arr2);

//.................................................

//Rest operator :
//...on array
// let arr = [10, 20, 30, 40 , 5]
// let [a, b, ...c] = arr
// console.log(a,b,c);//output :  10 20 [30,40,5]
//....on object
// let num = {x:10, y:20, z:30, u: 17}
// let {x,y,...obj} = num
// console.log(x,y,obj);//output : 10 20 {z: 30, u:17}
//rest parameter
// function add(...num) {
//     let sum =0;
//     for(let i =0 ; i < num.length ; i++) {
//         sum += num[i];
//     }
//     return sum ;
// }
// console.log(add(20,30,40,50,60));//output :200
//..........................................................

//Nullish coalescing operatrs : 
// let a = null;
// let b = 'height is not defined'
// let height;
// height = a ?? b
// console.log(height);//output : height is not defined

//.............................................................

//for of :

// let students = ['John', 'Merry', 'Steve', 'Mark']
// let str = 'Hello brother'
// for(let item of students) {
//        console.log('student name ' + item);
// }
//normal loop
// console.log('................');
// for(let i = 0 ; i < students.length ; i++) {
//     console.log('student name' + students[i]);
// }
//loop over a string : 

// for(let items of str){
//     console.log(items);
// }
//........write a function to count the length of a string 
//         without using length property................
// function string(str) {
//     let count = 0;
//     for(s of str){
//         count ++
//     }
//     return count
// }
// console.log(string(str)); 

//optional chaining : 

// let user = {
//     name: 'vaishak',
//     age : 28,
//     genter : 'male',
//     contact : {
//         phone : 9000000000,
//         email : 'tzirw@example.com',
//         address : {
//             city : 'hyderabad',
//             state : 'Telangana',
//             pincode : 50000,
//             country : 'India',
//         },
//     }
//     }
// console.log(user.name);
// console.log(user.occupation);//undefined
// console.log(user.contact.email);
// console.log(user.contact.mobile.street);//error , after an undefined value
                                            //it will be error
// console.log(user.contact.mobile?.street)  // undefined       
//.............................................................                              

