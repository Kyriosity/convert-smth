# U(nit)Values, or physical values, for Typescript
This Angular project began in 2020 as a hobby dive of mine into Angular/Typescript along with VS Code, GitHub, npm. <sup>**_i**</sup>

It's all about making physical values (like temperature, distance, or mass) native for development. And it's a really big challenge, no kidding <sup>**_n**</sup>

**So far it's not an overall solution but rather groundwork of a framework**

<sub><sup>**_i**</sup> Nevertheless i'm since 1990s in IT (from deep backend to far frontend) and for the recent decade my *native* language has been amazing **C#**</sub>\
<sub><sup>**_i**</sup> even ridd off of quantum mech</sub>

# What you get
It's always better by code snippets. 
## Uniform declaration
```typescript
const footInH0Scale = millimeter(3.5) // rail transport modelling

let nextMetroStation = meter(347)

tell(TheEarth.Mass.Tonne)

let tempo: velocity
tempo = camera1.flash(yourCar)
const localSpeedLimit = milesPerHour(90)
```
## Conversion
const euroBottle = liter(0.5)
const inUsWouldBe = IWeig


## Presentation
pipes

## Math operations
I'm thinking on the syntax meanwhile.
Both TS and JS don't facilitate overload of arithmetic ops (like '+'). All the same - would too dubios for physical units, consider: 
```typescript 
let cargoTotal: mass 
cargoTotal = tonne(4) - kilogram(90); cargoSum += pound(200) // and what unit shall be derived here?
```
Now let's think
letCargoTotal = weight.in(tonne)
kilogram()


## How to understand the project
One one hand it's a library of such units with routines, and on the other - table of aircraft specifications, presenting these features.

b) uval service
c) uval pipe, that actually is a pipe for uval

## ToDos
Validating a unit against a natural range (say, Kelvin scale begins of zero <sup>4</sup>)

Floating point calculation

preventing camel calculation jumps

VALIDATOR for RANGEs: BOTH BUILT IN AND CUSTOM (see footnote)

<sub><sup>5</sup> [oops, Ludwig-Maximilians University got something cooler](https://www.mpg.de/research/negative-absolute-temperature#:~:text=Thus%2C%20nothing%20can%20be%20colder,nonetheless%20has%20negative%20Kelvin%20values).</sub>

## Further reading
[Concepts](readme+/_concepts.md)

[Dev guidelines](readme+/dev_guidelines.md)