# U(nit)Values, or physical values, for Typescript
This Angular project began in 2020 as a hobby dive of mine into Angular/Typescript along with VS Code, GitHub, npm. <sup>**_i**

It's all about making physical values (like temperature, mass) native for development and nice for presentation.

**So far it's not an overall solution but rather a draft of groundwork for framework**&nbsp;&nbsp;<sup>**_b**</sup>

<sub><sup>**_i**</sup>&nbsp;Nevertheless i'm since 1990s in IT (from deep backend to far frontend) and for the recent decade my *native* language has been amazing **C#**</sub>\
<sub><sup>**_b**</sup>&nbsp;it's a big challenge with countless controversial concepts asking for tons of well-tempered code</sub>

# How it looks
Build the only library in this project and serve the only app there. Navigate to **Units**.\
Or/**and** look at [snapshot of aircraftstable](readme+/img_aircrafts-commented.jpg).
# How it works
## Uniform declaration
```typescript
const theChallengerDeep = meter(10929)
console.log(theChallengerDeep.value) // 10929
console.log(theChallengerDeep.unit === Meter) // true
console.log(theChallengerDeep.unit === Foot) // false

let tempo: velocity; tempo = camera1.flash(aVehicle)

interface State {
    hightestElevation: distance,
    recordHigh: temperature
}
const Alaska: State = { hightestElevation: foot(20310), recordHigh: fahrenheit(100) }
const Bavaria: State = { hightestElevation: meter(2962), recordHigh: celsius(40.3) }
```
## Conversion
Is simple as an ABC but still type safe
```typescript
const euroBottle = liter(0.5)
const inUkWouldBe = euroBottle.to(ImperialPint)
euroBottle.to(Meter) // this won't compile
```
## Presentation
Its description is worth of [separate paper](readme+/doc_uval-presentation.md)

## Math operations
UValue exposes it's `value` property that you can set/modify in usual way
```typescript 
let tempo = milesPerHour(70); tempo.value -= 20
```
 When it takes more than one UValue this project offers the following syntax sugar: <sup>**_o**</sup>
```typescript 
const plane = tonne(45.5); const fuel = kilogram(15000); const removedSeats = kilogram(15 * 75)
plane.add(fuel).subtract(removedSeats) // plane is still in tonnes

const pets = kilogram()
const cargoTotal = tonne(11.5).plus(kilogram(280)).plus(pound(9570)).plus(pets)
const takeoffWeight = plane.plus(cargoTotal).minus(pets)
// the crew rejected to transport pets cause cargo bay isn't pressuresized
```
<sub><sup>**_o**</sup> Both TS and JS don't facilitate overload of arithmetic ops (+, -, *, /). All the same this could be a performance hit and too implicit with resulted in unit</sub>

## Predefined UValues
[See more](readme+/doc_predefined-uvalues.md)

## Units schemes
[See more](readme+/doc_uvalues-schemes.md)

## Open points
[See more](readme+/doc_open-points.md)

## Further reading for developer
[Project concepts](readme+/_project_concepts.md)

[Dev: overall guidelines](readme+/dev_concepts.md)

[Dev: project guidelines](readme+/dev_guidelines.md)