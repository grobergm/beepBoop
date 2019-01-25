# Beep-Boop Generator

### Created by Matt Groberg on 1/25/2019 for Epicodus, coding bootcamp.

## Specs
1. _Given a number, loops through numbers from 0 to the given number and pushes them into an array of string values_
#### input: 5
#### output: numberArray= ["0","1","2","3","4","5"]

2. _Loops through each string entry in the array and checks to see if it includes the character "3". If it does, it sets the value of the current item in the array to "Sorry Dave", then pushes the current item into a new array. If not, it checks if the array item includes a "2". If so, it changes the value of the item to "Boop" and pushes it into the new array. If not, it checks if the item contains a "1"; if so it changes the value of the string to "Beep" and pushes it into the new array. If it doesn't contain any of these characters, it will push the unmodified string into the new array._
#### input: numberArray= ["0","1","2","3","4","5"]
#### output: toTextArray= ["0","Beep","Boop","Sorry Dave","4","5"]

3. _Returns the new array_
