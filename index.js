//question one
let firstArray = [3,7,34,90,12];
let secondArray = [true,"green","where",12,56];
let thirdArray=firstArray.pop();
let fourthArray=secondArray.pop();
console.log(thirdArray);
console.log(fourthArray);


//question2
stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let join= stringmyPets.join();
console.log(join);


//question3
itemvaarr3 =[-5,9,5,3,2,-3,6,8,4,1];
let sorted = itemvaarr3.sort();
console.log(sorted);

//question4
let arr = [["boy", "man", "girl","school", "girl", "woman"]];
let removeDuplicates = [];
let duplicates = [];
arr.forEach(f =>{
    if (!removeDuplicates.includes(f)){ 
        removeDuplicates.push(f); 
    }
    else(duplicates.push(f));
});
console.log({removeDuplicates});
console.log({duplicates});


//question5
let arr5 = ["the", "way", "x", 4];
let word = "food";
let textIndex = arr5.indexOf(word);
if (word== arr5["way"]){
    console.log({word})
}
else{
    console.log("The search was not found ")
}


//question 6
let str=  "renniw";
function newSort (word) {
    return word.split("")
            .sort()
            .join("");
}
console.log(newSort(str));

//question7
let fruits=["Grapes","Bananas","Avocado","Berries","mangos","Kiwi","pawpaws","","Lemons","Guavas","Apple"]
fruits.splice(5, 0, "Tomato");
console.log({fruits});