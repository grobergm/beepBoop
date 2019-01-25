# Beep-Boop Generator

_A web app which takes any number, and returns all the numbers leading up to that number, then replaces number containing 1,2, or 3 with special strings (see detailed description below)_

#### Created by Matt Groberg on 1/25/2019 for Epicodus, coding bootcamp.

## Description

Have you ever wanted a program print out a list of numbers up to any given number, then replace any number with 1 with "Beep"? Any 2 with "Boop"? Any 3 with an: "I'm sorry [your name here], I'm afraid I can't do that"? This App does all three of those things! It was created as a test project for the Epicodus coding bootcamp.


### Specs
1. _Given an input number from a form, first this program will store all values from 0 to the number as strings in an array_
#### input: 5
#### output: numberArray= ["0","1","2","3","4","5"]
2. _The program checks each item in the array, one at a time,  to see if they include the characters "3","2",or "1". For every item including "3", it will replace the item with the phrase "Sorry Dave, I can't do that right now.". For every item including "2" it will replace the item with "Boop", and for every item containing "1", it will replace the item with "Beep". For all other items, it will just print out the number._
#### input: numberArray= ["0","1","2","3","4","5"]
#### output: toTextArray= ["0","Beep","Boop","Im' sorry Dave...","4","5"]
3. _Since it checks for "3" first, then "2", then "1", they are prioritized in that order_
#### input: numberArray= [..."10","11","12","13","14","15"]
#### output: toTextArray= ["10","Beep","Boop","Sorry Dave...","14","15"]
3. _Lastly, the program will join the items in the toTextArray into a single string, and insert this value below the form_
#### input: toTextArray= ["0","Beep","Boop","Im' sorry Dave...","4","5"]
#### output: "0 Beep Boop Im' sorry Dave... 4 5"

### Technologies Used
* HTML
* CSS
* JavaScript
* Bootstrap 4
* jQuery

#### SetUp/Installation Requirements

_This is a static website, so you only need to:_
* Clone the repository
* Make sure you are connected to the internet before viewing (So the bootstrap and jQuery cdn work)
* Open index.html in a browser.

#### Bugs
* No known bugs;

_Copyright 2019 Matt Groberg._
_This software is licensed under the MIT license._
