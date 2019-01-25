# Beep-Boop Generator

### Created by Matt Groberg on 1/25/2019 for Epicodus, coding bootcamp.

## Specs
1. _Given a number, it will store all values from 0 to the number as strings in an array_
#### input: 5
#### output: numberArray= ["0","1","2","3","4","5"]

2. _The program checks each item in the array, one at a time,  to see if they include the characters "3","2",or "1". For every item including "3", it will replace the item with the phrase "Sorry Dave, I can't do that right now.". For every item including "2" it will replace the item with "Boop", and for every item containing "1", it will replace the item with "Beep". For all other items, it will just print out the number._

#### input: numberArray= ["0","1","2","3","4","5"]
#### output: toTextArray= ["0","Beep","Boop","Im' sorry Dave...","4","5"]

3. _Since it checks for "3" first, then "2", then "1", they are prioritized in that order_
#### input: numberArray= [..."10","11","12","13","14","15"]
#### output: toTextArray= ["10","Beep","Boop","Sorry Dave...","14","15"]

3. _Returns the new array_
