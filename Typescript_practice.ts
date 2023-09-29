/*
========================== list topics ================================
number
string
boolean
union
literal type
typeof
typing for objects 
type for arrays
tuple
enum
any type
typing for functions
typing for arrow function
typing for objects
intersection
nullable type 
type alice
interfaces
utility types
extending interfaces and type alices
difference between type alice and interface 

===========================================================================
/*

Typescript : 
Typescript is a superset of JavaScript.
Typescript allows you to write JavaScript in much precise manner so that your code faces a lot less error in the run time.
All the code that you write in the typescript it is final compiled into JavaScript only.
Basically typescript is all about type safety.
It is a development tool which helps to write better code with less errors and more scalable and maintainable that is easy understandable.
typescript adds a rubust type system to javascript.

Benefits:
Static typing.
Code completion.(auto complete)
Refactoring
Shorthand notation

Transpilling : Transpilling is the process of compiling source code by translating it from one language to another language.

most important concepts of typescript :
1). how to create a types.
2). how to assign those types to different variables or arguments inside of a function otherwise you will notice a lot of stuff is automatically typed for us.(inferencing)



//Basic types :
// number type :
var id:number=186

// string type :
let studentName:string="vyshnavi"

// boolean type :
let isFeePaid:boolean=false


// literal type : sometimes we want to limit the values we can assign to a variable, basically exact or specific values 
let gender:"male" | "female"="male"
let quantity:65 | 75=65
// custome union type:
type  quantityType= 65 | 75;

// typeof property : 
var a="shivaji"
let b=1
let c=true
// console.log(typeof a , typeof b, typeof c)


adding type for objects :
let obj:object={
    name:"shivaji"
}
console.dir(obj.name) // error because it doesn't know that a name exits on the object.
//try to use type alice or interface


// add types for arrays :
let arr0=[] // any type, it accepts any thing.
arr0=[10,467,"gdfdhd"]

// empty array :
let arr1:[]=[] //ok
// arr1.push(10) //error because by default it accepts only empty array
arr1=[] //ok
arr1=[10,78] //error

let arr=["shivaji","sjsgd"] //default infer for string type (implicit type)
arr.push("sss") //ok
// arr.push(1000)//error

let br:number[]=[]  //explict type for number
br.push(10)
// br.push("shivaji") //error

//  union but homogenous type :
let cr:number[] | string[]=[678]

// hetrogenous types : 
let dr:(number | string)[]=["shivaji",1000]


// alternative way to add types for arrays :
let er:Array<string>=["arrr"] //string array

let fr:Array<number>=[10000]
// fr.push("shiiiii") //error

let gr:Array<string | number>=[1898,"dhdj"]

// array of objects :


// tuple :it is a fixed length of array where each element has a particular type we often use them when working with pair of values.
// tuples are useful when we have only two values like key value pairs
let user:[number, string]=[10,"shivaji"]  
user.push("vyshnavai") //this is weird


// enums : if we want to represent the size of t-Shirts as constants , basically enum is used to create custome constants.
// use const keyword while declaring enums 
// one way :
 const small=1
 const medium =2
 const large=3
 const extraLarge=4
// second way using enums :
enum sizes {small, medium, large,extraLarge}
// small =1, and so on
enum sizes2 {small="s", medium="m", large="x",extraLarge="xl"} // we need to explictly specify the type for all.
let mySize:sizes=sizes.medium;

 
// any Type  :
//if you declare a variable and don't initialize it, the typeScript compiler assumes this variable is of type "Any". 
// if we set it number and then later on we can set it to a string.
// it is against the whole idea of using typescript. if we use the "any" type, we essentially lose type checking feature.
// basically "any" type disable the checking.
let v;
v=10000
v="vyshnavi"
// example for functions : if we deos'nt set a type for function parameters then it will throw an completion error, implicitly has on any type, implicitly means we have to explictly or clearly set the type of that parameters.
// compiler  is inferrring or guessing the type of the parameters and that's why we have this Errors.
// solutions: explictly mention the "any" type for parameters or set the noImplicitAny flag to false         
function typeChecking(nu){

}
typeChecking(10


/* 
functions : if we not return anything,then by default typescript adds a void return and if we return something but we doesn't specify the return type, typeScript add the return type for you but based on its value (infer concept).
best practice we should aways properly annotate our functions so all parameters and as well as return type should be properly annotated. especially if you're building an api for other people to use it.
dececting unused parameters, typescript config file have one property called noNoUsedParameters is set to true.

detecting unused local variables : noUnUsedLocals flag is set to true

types for function return type :
 */
function display(){
    //void return type
}
function display2(){
    return 1000
    // implict number return type 
}
function display3():number{
    return 1000
    // explict number return type 

} 
// keep in mind : by default, functions returns undefined, to detect this, noImplicitReturn flag is set to true in your typeScript config file 
function display4(nu:number){
//void return type
if(nu==0) {
    return 10
}
}

// parameters : it doesn't accepts less parameter and more parameters, it accepts exact parameters :    
function display5(id:number, name:string ){
console.log(id, name)
}
display5(10,"vyshnavai") // ok
display5(10) // error
display5(10,"vyshnavai", "shivaji") // error


//types for arrow functions :
type ReturnTypeForArrowFunction= number
const arrowFunction =(Number:number, Number2:number):ReturnTypeForArrowFunction=>{
return Number+Number2
}
arrowFunction(10,250) // ok
arrowFunction(10,"vyshnavi") // error


// function as parameter : 
// you can create a own function signuature using type alice.
const doAction=(num:number, num2:number,func:any)=>{
func(num,num2) //if you don't pass any parameters, the result is NAN
}
const addition2=(num1:number, num2:number)=>{
console.log(num1,num2)
}

// add type for objects :
let address:{street:string,ph:number, state? :string}={
street:"kakinada",
ph:85759575956,
}

//  readonly for object properties: read only, prevents us from accidentally modifying the values. 
const info:{readonly id:number, name:string}={
id:100,
name:"vyshnavai"
}
info.id=100000 // error

// objects methods signuature :
let addrees2:{
street:string,
ph:number,
state? :string,
findAge:(age:number)=>number
}={
street:"kakinada",
ph:85759575956,
findAge:(age)=> age
}


// Intersection : it is another technique for combining multiple types so instead of vertical bar(union) use an ampersandd (&) 
type familyDetails={
father:string,
mother:string,
sibblings:number
}
type address={
city:string,
doorNumber:number,
street:string
}
type studentDetailsType=familyDetails & address

let student:studentDetailsType={
father:"venkateswara rao",
mother:"ammaji",
sibblings:2,
city:"amalapuram",
doorNumber:115,
street:"p.gannavaram"
}
// or 
let student2:familyDetails & address={
father:"venkateswara rao",
mother:"ammaji",
sibblings:2,
city:"amalapuram",
doorNumber:115,
street:"p.gannavaram"
}

// nullable type :by default typescript is very strict about using null and undefined values because as you probably know , these values are common source of bugs in their applications.
// strictNullChecks flag is set to true.
let vy="vyshnavai"
console.log(vy.toUpperCase())


// type alice : it is a best way to create custome types, basically it is a type variable which holds types 
// syntax : type variableName=types
type PostIdType=number;
let postId:PostIdType=10080


// interface : interface is used to create a type structure for classes and objects. it creates a custome data type. 
// basically interface is used to define the set of standards and rules for classes and object, you must implement those standards else typeScript won't allow us..  
//interface is just to put some extra validations or extra restrictions when you're creating class or object.
interface BankAccount {
accountNumber:number;
accountName:string;
accountBalanace:number; 
debit:(amount:number)=>void
}

class studentBankAccount implements BankAccount{
accountNumber:number;
accountName:string;
accountBalanace:number;

debit(amount:number):void{
console.log("logged from studentBankAccount")
}
// you must implement all the properties which are declared in the BankAccount interface else it will throw an error 

constructor(accountNumber1:number,accountName1:string,accountBalanace1:number,debit:number){
this.accountNumber=accountNumber1;
this.accountName=accountName1;
this.accountBalanace=accountBalanace1;
}
}
let student1=new studentBankAccount(100,"vyshnavi",1000,178) //ok
// let student2=new studentBankAccount(101,"vyshnavi",) //error


//union types : you can use union types for interface.


// extending interface (inheritance): existing types and new types

interface IParent {
accountNumber:number;
accountName:string;
accountBalanace:number; 
debit:(amount:number)=>void
}
interface IChild extends IParent{

}

// extending multiple interfaces for single class (multiple inheritance): 

class Students  implements IParent, IChild {

}

// merging :
//duplicate names for interfaces:  basically typescript will combine all together (merging into one).and if you also have duplicates of properties then typescript just it will ignore it. 
interface ISameName{
id:number
}
interface ISameName{
name:string
}
// finally typescript mering into one interface :
interface ISameName{
id:number
name:string
}

// enum merging : merging is possible but you must a specific value for later declarations, sometimes multiple properties Having same value
enum merge{
x,
y
}
enum merge{
z=3
}
console.log(merge.z)

// type methodSigunature=(s:number)=>void



// compiler : if we are having set of errors in our file, it will just detect the first error and it will just ignore all the remaing errors.
// it will stop the execution and compilation itself, as soon as the typescript compiler figured out any particular error issue it will just the stop the compilation process and alter you there is some problem with this. 

// utility types :utility types will help you to perform some common type manipulation which may be required temporarily for some specific purpose 

// 1). Partial: out of everything is optional, you can use atleast one or two whatever you choice but you can not add new properties.
// example :
interface IPartialType {
    accountNumber:number;
    accountName:string;
    location:string
}
let data:Partial<IPartialType> ={
    accountNumber:1000, //ok
    new : "vyshu" //error because you adding a new prop 
}
// 2). Omit : Omitting some props it means ignore the some specific props but if you use those props, typescript don’t allow us.. 

let omitted:Omit<IPartialType,"accountName"> ={
    accountNumber:1000, //ok
    accountName:"vyshnavi"  //error because this prop is omitted
}

// 3). Pick : if you use only some specific props out of all props.if you add anything other then this, typescript don’t  allow us..

let picked:Pick<IPartialType,"accountName"|"location"> ={            
    accountName:"vyshnavi",
    location:"kakinada" 
    accountNumber:1000, //error because this prop is not picked..
}

// extending interfaces and type alices :
interface box{
x:string;
y:string
}
interface box2 extends  box{
z:string
}

// type :
type colorRed={
redColor:string
}

type colorblue={
blueColor:string
}

const colors:colorRed & colorblue={
redColor:"#ff77658",
blueColor:"#ff4864"
}

// note : you can also use type alice for classes
class parent4 implements colorblue{
blueColor="eewwww"
}

/* difference between type alice and interface :
interface : 
extending through implements or extends keywords
same names for multiple names : it will merge together.

type alice :
extending through & operator. for classes you can use extends or implements keywords.
duplicate names are not allowed because it is just variabes.


*/

/*
Any: if you perform any operation which is have any type so it won't any type checking.

Unknown: it will allow to add some value to it when any operation is performing on top of any variable which is having unknown type so there the type checking happens.
If you want to have a strict data type checking when you are performing some operations on variables so there you should use unknown instead of "any" 
And if you don't want to perform any data type checking on your code then you should use "any" 
So of course we should always try preferring "unknown" instead any because in any it might crash at run time and in unknown might not crash.
It will give all errors in the compile time itself but it is restricting us.
Unknown doesn't allows to perform any operation, if you want to perform some operations then you can use if condition with type comparison, it allows the operations.
So this is how keeping our code more safe and respect to the data type and its operation.
Example :
*/
let name3:unknown ="vyshu";
if(typeof name3 === "string"){ 
console.log(name3.toUpperCase())
}



/* generics :generics allow us to create resuable blocks of code which can be used with different types.
coomon syntax <T,> it means this is not jsx syntax but rather a syntax for generics
without generics, we would either have to give the identity function a specific type or we could describe identity function using "any" type.
*/
function generic<T>(num:T,num2:T){
console.log(num, num2)
}
generic(10,30) //ok
generic(10,"shivaji") //error because if you pass a first argument as string, so type is also used for second parameter so then typescript compiler understood "T" means string 
// That's why if you pass an value other than string then typescript compiler will throw an error.
// type is decided based on the first value.

// multiple types :
function generic2<T,V>(num:T,name:V, num2:T){
console.log(num,name, num2)
}
generic2(10,"vyshnavi",10) //ok
generic2(10,"vyshnavi","shivaji") //error because it is expected number but you passed string.

// issues for return type :

function returnGeneric<T>(num:T, num2:T):T{
return num + num2;
}
returnGeneric(10,10)
returnGeneric(true,true) 
// in generic, we can pass anything not only the primitive we can pass class, interface, object,array, there is no solution for this..
// you can return something but you can't perform any operations while returning.
function returnGeneric2<T>(num:T, num2:T):T{
return num;
}
returnGeneric2(10,10)

// array generic :
function arrayGeneric<T>(data:T[]){
data.forEach(data=>{
console.log(data)
})
}
arrayGeneric([1,2,3,4,5])
arrayGeneric(["shivaji","sai","prasad"])

// arrow function :
//  common syntax : genericType():returnType
// const doSomeThing = <T>(data:T[]):T[] => {
//     return [data.0]
// }
// doSomeThing([10,20])


// pass interface as generic to function :
function fun1<T>(data:T){

}
interface IfunData{
id:number;
name:string
}
fun1<IfunData>({id:10,name:""}) //ok
fun1<IfunData>([{id:10,name:""}]) //error


// generic Interface :
interface IPair<T>{
id:number;
name:T
}
const pairData:IPair={
// error because you not pass the type
id:10,
name:"shivaji",    
}
const pairData2:IPair<string>={
id:10,
name:"shivaji",    
}

// in typescript, you just remember one thing always try to use the strict data type where any variables or any function you are using the return type of that the arguments, if you try to use data type not "any"  

/*
void returns undefined.
Never returns anything. 


React.Fc<props>

Or

Props.

In function parameters by default any type.
*/


