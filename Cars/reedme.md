## Arrays

Add:

array.rush() - push to the end
array.unshift() - push to the start
*array.concat()
*Spread operator - spread and add in '_' [... cars,_]

Remove:

array.pop() - pull from end
array.shift() - pull from start
array.splice()
*array.filter() - cars.filter() - look for each element if it fits the condition (or not)
*array.slice() - cut array into pieces and we can use each part

Replace

array.splice()
\*array.map() - look for all elements and you can do smth with it

"\*" - immutable methods

["string", "string", "string"]
If we use push we have ["string", "string", "string", "string"], we mutate original data by adding 4 position. We dont have any log, we will lose all original information

Filter spread or map: ["string", "string", "string", "string"] - we create a new copy of that array

## ARROW FUNCTION DOESNT WORK WITH METHODS. USE ORDINARY

"this" - is used to operete with data from that exact array. this.age - will add "age" to this exact array

## Object construstor

function Person() - FUNCTION NAME WITH CAPITAL LETTER IN CONSTRUCTOR
