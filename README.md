# U(nit)Values, or physical values, for Typescript
This Angular project began in 2020 as a hobby dive of mine into Angular/Typescript.&nbsp;&nbsp;<sup>**_i**

It's all about making physical values (like temperature, mass) integrated in development and decently looking in UI.

**So far it's not an overall solution but rather a draft of possible framework**&nbsp;&nbsp;<sup>**_b**</sup>

&nbsp;&nbsp;<sub><sup>**_i**</sup>&nbsp;&nbsp;nevertheless i'm since 1990s in IT (from deep backend to far frontend) and for the recent decade my *native* language has been amazing **C#**</sub>\
&nbsp;&nbsp;<sub><sup>**_b**</sup>&nbsp;&nbsp;a big challenge asking for countless overlapping concepts and tons of well-tempered code</sub>

## How it looks for user
Just `ng build` the only library in this project and `ng serve` the app. Navigate to **Units**.\
Or/**and** look at [commented snapshot of that demo](readme+/img_aircrafts-commented.jpg)

## How it works for developer
### Declaration
```typescript
const theChallengerDeep = meter(10929) // deepest known point in the world ocean 
console.log(theChallengerDeep.value) // 10929
console.log(theChallengerDeep.unit === Meter) // true
console.log(theChallengerDeep.unit == Foot) // false

interface State {
    hightestElevation: len,
    recordHigh: temperature
}
const Alaska: State = { hightestElevation: foot(20310), recordHigh: fahrenheit(100) }
const Bavaria: State = { hightestElevation: meter(2962), recordHigh: celsius(40.3) }
```
### Conversion of units
Easier than ABC but still type safe.&nbsp;&nbsp;<sup>**_u**</sup>
```typescript
let bottle = liter(0.5)
const inUkWouldBe = bottle.to(ImperialPint)
const bottle2 = bottle.to() // use to clone
euroBottle.to(Meter) // this won't compile
euroBottle.unit = Liter // this either, even if the same unit
```
&nbsp;&nbsp;<sup>**_u**</sup><sub>&nbsp;&nbsp;*unit* is immutable, since it wouldn't be intuitive if conversion runs on it's setter</sub>

### Math operations
UValue exposes its `value` property that you can set/modify in the usual fashion:
```typescript 
const tempo = milesHour(90); tempo.value -= 20; tempo.value = 30 
```

 When it takes more than one `UValue` this project offers the following syntax sugar:&nbsp;&nbsp;<sup>**_o**</sup>
```typescript 
const plane = ton(45.5); const fuel = kilogram(15000); const unusedEquipment = kilogram(15 * 75)
plane.add(fuel).subtract(unusedEquipment) // plane is still in first set tons

const pets = kilogram(186.5)
const cargoTotal = ton(11.5).plus(kilogram(280)).plus(pound(9570)).plus(pets) // also tons
const takeoffWeight = plane.plus(cargoTotal).minus(pets)
// the crew rejected to transport pets cause the cargo bay isn't pressuresized
```
&nbsp;&nbsp;<sup>**_o**</sup><sub>&nbsp;&nbsp;Both TS and JS do NOT facilitate overload of arithmetic ops (+, -, *, /). All the same this could be a performance hit and too implicit with resulted in *unit*</sub>

### Presentation
Includes formatting, labeling, parsing, ng-pipe and is worth of a [separate report](readme+/doc_uval-presentation.md).
### Service
Actions can be avaialble through the service.

## Predefined UValues
[Read more](readme+/doc_predefined-uvalues.md)

## Units schemes
[Read more](readme+/doc_uvalues-schemes.md)

## Further reading for project development
[Dev: concepts](readme+/_project_concepts.md)\
[Dev: guidelines](readme+/dev_guidelines.md)\
[Open points](readme+/doc_open-points.md)\
[Dev: overall guidelines](readme+/dev_concerns.md)

