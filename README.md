# U(nit)Values, or physical values, for Typescript

This Angular project began in 2020 as a hobby dive of mine into Angular/Typescript.&nbsp;<sup>**_i**</sup>

It's all about making physical values (like temperature, mass) integrated in development and decently looking in UI.

**So far it's not an overall solution but rather a draft of a possible framework**&nbsp;&nbsp;<sup>**_b**</sup>

&nbsp;&nbsp;<sub><sup>**_i**</sup>&nbsp;&nbsp;nevertheless i'm since 1990s in IT (from deep backend to far frontend) and for the recent decade my *native* language has been amazing **C#**</sub>\
&nbsp;&nbsp;<sub><sup>**_b**</sup>&nbsp;&nbsp;a big challenge asking for countless overlapping concepts and tons of well-tempered code</sub>

## How it looks for user

Just `ng build` is the only library in this project, and `ng serve` is the app. Navigate to **Units**.\
Or/**and** look at [commented snapshot of that demo](README+/img_aircrafts-commented.jpg)

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

Easier than ABC but still "type safe".&nbsp;&nbsp;<sup>**_u**</sup>
```typescript
let bottle = liter(0.5)
const inUkWouldBe = bottle.to(ImperialPint)
const bottle2 = bottle.to() // use to clone
euroBottle.to(Meter) // this won't compile
euroBottle.unit = Liter // this either, even if the same unit
```
&nbsp;&nbsp;<sup>**_u**</sup><sub>&nbsp;&nbsp;*unit* is immutable, since running conversion on its setter won't be intuitive</sub>

### Math operations

UValue exposes its `value` property that you can set/modify in the usual fashion:
```typescript 
const tempo = milesHour(90); tempo.value -= 20; tempo.value = 30 
```

 When it takes more than one `UValue`, this project offers the following syntax sugar:&nbsp;&nbsp;<sup>**_o**</sup>
```typescript 
const plane = ton(45.5); const fuel = kilogram(15000); const unusedEquipment = kilogram(15 * 75)
plane.add(fuel).subtract(unusedEquipment) // plane is still in first set tons

const pets = kilogram(186.5)
const cargoTotal = ton(11.5).plus(kilogram(280)).plus(pound(9570)).plus(pets) // also tons
const takeoffWeight = plane.plus(cargoTotal).minus(pets)
// the crew refused to transport pets cause the cargo bay isn't pressurized
```
&nbsp;&nbsp;<sup>**_o**</sup><sub>&nbsp;&nbsp;Both TS and JS do NOT facilitate overload of arithmetic ops (+, -, *, /). Nevertheless, this must be a performance hit and a result in *unit* would be non-obvious</sub>

### Presentation

Includes formatting, labeling, parsing, ng-pipe, and is worth a [separate report](README+/doc_uval-presentation.md).

### Service

Actions can be available through the service.

## Predefined UValues

[Read more](README+/doc_predefined-uvalues.md)

## Units schemes

[Read more](README+/doc_uvalues-schemes.md)

## Further reading for project development

[Dev: concepts](README+/_project_concepts.md)\
[Dev: guidelines](README+/dev_guidelines.md)\
[Open points](README+/doc_open-points.md)
