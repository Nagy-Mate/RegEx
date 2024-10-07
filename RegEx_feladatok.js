let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes.";

//1 Olyan számok, melyek 2 vagy 3 számjegyet tartalmaznak
function numberLength2Or3(text){
    let regex = /\b\d{2,3}\b/g;
    return text.match(regex);
} 
//2 Olyan számok, melyek páros számmal kezdődnek
function startsWithEven(text){
    let regex = /\b[2|4|6|8]+\w*/g;
    return text.match(regex);
} 

//3 Olyan szavak, melyek számmal kezdődnek és betűvel végződnek
function startsWithNumber(text){
    let regex = /\b\d+[a-z]\w*\b/g;
    return text.match(regex);
} 
//4  Olyan szabak, melyek nagybetűből állnak
function capitalized(text){
    let regex = /\b[A-Z][A-Z]*\b/g;
    return text.match(regex);
} 
//5 Olyan szavak, melyek nagybetűvel kezdődnek és legalább 3 betűsek 
function capitalizedLengthMin3(text){
    let regex = /\b[A-Z][a-zA-Z]{2,}\b/g;
    return text.match(regex);
} 

//6 Olyan szavak, melyek magánhangzóval kezdődnek
function startsWithVowel(text){
    let regex = /\b[aieuo]\w*/g;
    return text.match(regex);
} 
console.log(numberLength2Or3(text));
console.log(startsWithEven(text));
console.log(startsWithNumber(text));
console.log(capitalized(text));
console.log(capitalizedLengthMin3(text));
console.log(startsWithVowel(text));