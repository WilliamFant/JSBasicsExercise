// Inside the “IntroToJS” folder create a folder called “JSBasicsExercise”
// Inside the “JSBasicsExercise” folder create a script.js file

// Inside the script.js file complete the following (NOTE: Console logs are not necessary unless specifically asked for. However, they do help to make sure answers are correct.)…
// 1. Use a console log to have your favorite number display in the console/terminal
console.log(23);
// 2. Use a comment to type out the 5 main data types (AKA Primitives)
// boolean string number null undefined
// 3. Use a comment to type out the 6 operator symbols
// +,-,**,*,/,%
// 4. Use modulus to get a remainder of 1 from the number 5. (There are two answers for this one. Please provide both. Also, please type them both out. Do not just type out the two numbers)
console.log(5%2);
// 5. Using single quotes at the start and end of the string have the words I'M MARY POPPINS, Y'ALL! display in the terminal/console (Must use a console log for this one.)
console.log('I\'M MARY POPPINS, Y\'ALL!');
// 6. Using Concatenation combine the following strings into one string. First string: "Hawk". Second string: "eye".
console.log("Hawk " + "eye");
// 7. Create a string for your first name and also your last name. Use the length property to add them together (Answer should be a number)
console.log("Will".length + "Fant".length);
// 8. Use index on the following string to select the lowercase "e" at the end of the string. "Avengers: Endgame". (Use a console log to display it in the console/terminal)
console.log("Avengers: Endgame"[16]);

// BONUS
// 1. Create a string that displays only a backslash when it is displayed in the console/terminal
console.log("\\");
// 2. Use the following numbers in the order shown to get a result of the 616. Numbers are 5, 4, and 9 (HINT: Exponentiation)
console.log(5**4-9);
// 3. Use the following strings in order "I", "Am", "Iron", and "Man" to display a result of Zero in the console/terminal using the length property. (NOTE: There are multiple answers. For an extra bonus try to use modulo).
console.log((("I".length + "Am".length) % "Iron".length) % "Man".length);

// 4. Using Index on each of the following strings, have AVENGERS display vertically in the console/terminal (Strings: "CAP" "VISION" "OKOYE" "NICK FURY" "GROOT" "DOCTOR STRANGE" "THOR" "STAR-LORD"). (NOTE: Need to create a separate console log for each string).
names = "CAP VISION OKOYE NICK FURY GROOT DOCTOR STRANGE THOR STAR-LORD";
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 5. Create the following variables with the following values m=25 and c=4. Create a variable with the name of u and set the value for it by adding m and c together (NOTE: Must add actual variables NOT just 25 + 4 when setting value for the u variable).
m = 25
c = 4
console.log(m+c);
// When finished, create a repository in the “JSBasicsExercise” Folder as well as on GitHub. Add and commit everything in the JSBasicsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form.
