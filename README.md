## Disclaimer
This hobby part-time project was my first deep dive into Angular/Typescript along with VS Code, GitHub, npm, markdown.<sup>1</sup>

**It's not an overall solution but rather groundwork of a framework**

<sup>1</sup> *Nevertheless i'm over 25 years in IT and my *native* language for the last decade has been C#*

# Physical units for Typescript
This Angular project is about physical values like mass, temperature. It renders their smooth declaration, presentation and conversion.

Hope, these code snippets will speak better:
```typescript
const nextStation = meter(300)

record(TheEarth.Mass.Tonne)

let myKittenWeight: mass
myKittenWeight = kilogram(3)
```

## Deeper dive
One one hand it's a library of such units with routines, and on the other - table of aircraft specifications, presenting these features.\

b) uval service
c) uval pipe, that actually is a pipe for uval

## Behind the scenes
Type safety
Casting (ToDo: tests)
performance

## How to get in 

## Postnotes
Any rational critic would be highly appreciated. As well as cooperation ("many hands make light work").


There're not enough tests but any ultimate user is encouraged to cover the library with own tests. That would be safer and more independent than in-built tests.


/// ToDo:
ranges for weigher
customizing ranges of unit over natural
preventing camel calculation jumps
