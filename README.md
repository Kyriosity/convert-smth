# Intro
This hobby part-time project began as my first deep dive into Angular/Typescript along with VS Code, GitHub, npm.<sup>1</sup> <sup>2</sup>

It's all about physical values, like temperature, distance, mass, ...
Their declaration, presenation, conversion.

**It's not an overall solution but rather groundwork of a framework**

<sub><sup>1</sup> Nevertheless i'm since 1990s in IT (from backend to frontend); for the recent decade my *native* language has been **C#**</sub>
<sub>
<sup>2</sup>Any rational critic would be highly appreciated. As well as cooperation ("many hands make light work").</sub>

# Physical units for Typescript
To put in a nutshell, let it be code snippets 
```typescript
const nextStation = meter(300)

record(TheEarth.Mass.Tonne)

let tempo: velocity
tempo = flash()
```

+ uniform declaration
+ presentation
+ conversion

## Coming next
### Math operations
I'm thinking on the syntax meanwhile - both TS and JS don't facilitate overload of arithmetic ops (like '+'). All the same - too dubios for physical units, consider: 
```typescript 
let cargoTotal: mass 
cargoTotal = tone(4) - kilogram(90); cargoSum += pound(200) // what unit shall be derived here
```
### Library of constants
No other science than physics has so much constants, that every easily imagines: equator length, distance to the Moon, speed of sound or light, normal human body temperature, voltage from proviers, ~~local speed and promille limit~~.

## Deeper dive
One one hand it's a library of such units with routines, and on the other - table of aircraft specifications, presenting these features.

b) uval service
c) uval pipe, that actually is a pipe for uval

## Behind the scenes
Type safety
Casting (ToDo: tests)
performance

## How to get in 

## Postnotes

There're not enough tests but any ultimate user is encouraged to cover the library with own tests. That would be safer and more independent than in-built tests.


## ToDos
Validating a unit against a natural range (say, Kelvin scale begins of zero <sup>4</sup>)
Floating point calculation
preventing camel calculation jumps

VALIDATOR for RANGEs: BOTH BUILT IN AND CUSTOM (see footnote)

<sub><sup>5</sup> [oops, Ludwig-Maximilians University got something cooler](https://www.mpg.de/research/negative-absolute-temperature#:~:text=Thus%2C%20nothing%20can%20be%20colder,nonetheless%20has%20negative%20Kelvin%20values).</sub>

## Things to keep in mind
Each physical measure and scale is , sofware DRY principle of won't work here

# User eye

# Developer eye
## How to get easy 

## How conversion is working
Conversion between differing units of the same nature (measure) is the heart of this framework.
Basically there're too approaches 
+ tabled (rational, reverse)
+ functional (mostly reverse)
 
### Tabled

### Functional

## Glossary
Measurable - think of it as declaration
UVal, uval - instance of Measurable
Weigher
