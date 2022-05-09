# Variables

## What are Variables?

Variables are containers for storing data (storing data values).


## 4 Ways to Declare a JavaScript Variable:
- Using var
- Using let
- Using const
- Using nothing


## When to Use JavaScript var?

Always declare JavaScript variables with var,let, orconst.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browser, you must use var.


## When to Use JavaScript const?

If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

> #### Example
> const price1 = 5;
> const price2 = 6;
> let total = price1 + price2;


## JavaScript Identifiers

All JavaScript **variables** must be **identified** with **unique names**.

These unique names are called **identifiers**.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names


> #### Note
> It's a good programming practice to declare all variables at the beginning of a script.


**You can declare many variables in one statement.**

Start the statement with let and separate the variables by comma:

>	let person = "John Doe", carName = "Volvo", price = 200; 



## Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable declared with var, it will not lose its value.

*** You cannot re-declare a variable declared with let or const. ***



