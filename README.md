# Beep-Boop Generator

_A web app which takes any number, and returns all the numbers leading up to that number, then replaces number containing 1,2, or 3 with special strings (see detailed description below)_

_Click <a href="https://grobergm.github.io/beepBoop">Here</a> to check it out_

#### Created by Matt Groberg on 1/25/2019 for Epicodus, coding bootcamp.

## Description

Have you ever wanted a program print out a list of numbers up to any given number, then replace any number containing the digit 1 with "Beep"? Any 2 with "Boop"? Any 3 with an: "I'm sorry [your name here], I'm afraid I can't do that"? This App does all four of those things! It was created as a test project for the Epicodus coding bootcamp.


### Specs

#### Main "business" Function

1. Given an input number from a form, first this program will store all values from 0 to the number as strings in an array
#### input: 5
#### output: numberArray= ["0","1","2","3","4","5"]
2. The program checks each item in the array, one at a time,  to see if they include the characters "3","2",or "1". For every item including "3", it will replace the item with the phrase "Sorry Dave, I can't do that right now.". For every item including "2" it will replace the item with "Boop", and for every item containing "1", it will replace the item with "Beep". For all other items, it will just print out the number.
#### input: numberArray= ["0","1","2","3","4","5"]
#### output: toTextArray= ["0","Beep","Boop","Im' sorry Dave...","4","5"]
3. Since it checks for "3" first, then "2", then "1", they are prioritized in that order
#### input: numberArray= [..."10","11","12","13","14","15"]
#### output: toTextArray= ["10","Beep","Boop","Sorry Dave...","14","15"]
3. Lastly, the program will join the items in the toTextArray into a single string, which the function returns.
#### input: toTextArray= ["0","Beep","Boop","I'm sorry Dave...","4","5"]
#### output: "0, Beep, Boop, I'm sorry Dave..., 4, 5"

#### User Interface Logic
1. Use CSS to hide messages and forms until they are ready
2. Wait until the document is ready before adding event listeners.
3. Add event listeners to submit buttons, so they can run their corresponding functions below.
4. Get values from user name, then change the text wherever the class "nameGoesHere" is found in the js or html.
5. Hide the user name form on submit, and show the number form, then store the value of the number on submit.
6. Change the value of class "numberGoesHere" to the stored number.
7. Run the main roboLooper function, to 

### Technologies Used
* HTML
* CSS
* JavaScript
* Bootstrap 4
* jQuery

#### SetUp/Installation Requirements

_This is a static website,_ so you only need to:
* Clone the repository
* Make sure you are connected to the internet before viewing (So the bootstrap and jQuery cdn work)
* Open index.html in a browser.

#### Bugs
* Not really a bug, but I added the userName variable into the global scope, so it could be reset given the users name, but also be used in my backend function.
* Also when a very large number is entered, sometimes the browser crashes out of _sheer frustration_... So I set a max of 10,000 and min of -10,000 on the number input.

_Copyright 2019 Matt Groberg._
_This software is licensed under the MIT license._
