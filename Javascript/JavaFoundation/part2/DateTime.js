
//Date  : take reference from commented output -> //
console.log("************date************");

let today = new Date();
console.log(typeof today); //object
console.log(today); //2025-05-06T23:16:58.016Z
console.log(today.getDate()); //  date: 1-31 -
/* sun=1
   mon=2
   .
   .
   .
   sat=3
*/
console.log(today.getDay());

console.log(today.toString()); //Wed May 07 2025 04:46:58 GMT+0530 (India Standard Time)
console.log(today.toDateString()); //Wed May 07 2025
console.log(today.toLocaleString()); //7/5/2025, 4:46:58 am
console.log(today.toISOString()); //2025-05-06T23:16:58.016Z

let myCreateDateOne = new Date(2023, 0, 23);
console.log(myCreateDateOne.toDateString()); //Mon Jan 23 2023
// jan=0 ........dec = 11

let myCreateDateTwo = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDateTwo.toLocaleString()); //23/1/2023, 5:03:00 am

let myCreateDateThree = new Date("2025-01-07"); //yy-mm-dd
// jan=1 ......dec=12
console.log(myCreateDateThree.toLocaleString()); // 7/1/2025, 5:30:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // time in "ms" from 01 jan 1970 : out ->1746574633461
console.log(Date.now());
console.log(Date.now() / 1000); // time in "sec" from 01 jan 1970 (but problem it give in decimal form) : out -> 1746574633.462
console.log(Math.floor(Date.now() / 1000)); //// time in "sec" from 01 jan 1970 (problem solved ) : out ->1746574633

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth() + 1); // 4+1 = 5
console.log(newdate.getDay());
newdate.toLocaleString("default", {
  weekday: "long",
});

console.log("xxxxxxxxx     xxxxxxxxxxxxx   xxxxxxxxxx");
