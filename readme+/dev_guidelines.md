# Development guidelines for this project

## Keep type safety 
Albeit all *measureables* or their *weighers* share their respected parent definitions/implementations they must **not ever** intercept.
E.g. *mass* can't be assigned to, or, compared with *acceleration*, as well *speed* - to/with *distance*
A weigher can't compare different types of measurables

+ prefix interfaces with `I` if only it's a pure definition with cast <sup>**_i**</sup>

<sup>**_i**</sup><sub> rule of thumb - only abstract classes could be ancestors and it's never used for object instantiation, but it shall be used as arguments or return value</sub>


## Prohibit unit casting
`Measurable` is sealed by means of its readonly props. Otherwise it were a big open door for bugs (e.g. accidental cast/assign of kilogram to tonne).
// KD, ToDo: tests

## Think of performance
+ `Measurebles` are structs with the smallest footprint. Do NOT extend them with any logic.
+ Any validation, transformation shall be *external* and on demand. Thus i stripped Measureables of any tempting logic

## Tests
There're not enough tests but any ultimate user is encouraged to cover the library with own. That would be safer and independent than in-built tests.

## Method overloading
For a Java or C# developer method overloading is native, but it won't work in Javascript. At the moment there's an arguable syntax sugar that looks

```typescript
export interface Charity {
    thx4(subsribed: boolean): string
    thx4(money: number): string
}

class GoodPeople implements Charity {
    thx4(subsribed: boolean): string
    thx4(money: number): string
    thx4(money: any) { return 'thank u' }
}
```
The last method is *implementation method* where you shall differentiate types

But in such case think twice whether domain naming was correct!

## Throwing errors
Exceptions (errors) come at a price of performance. And shall be issued when they are unique and critical. That is when the same error may occur on processing of an item in a list, it's better to flag an item (i.e. *undefined*) and the a caller on a list will decide whether to throw one for all.

## My coding wisches as IMHO
* avoid **`;`** when possible. It's a 'good part' of TS that a line break is enough to terminate statements
* avoid one-after-one repetitions for even the best named things
    + use cycles of listed subjects
    + when they are difficult to put together in a list, use *shortcut* abbreviations
```typescript
const cool = ratherCoolButLongMethodName
vcbl(a)
vcbl(bbb)
vcbl(c3)
// ....
```    
* limit line length - scrolling horizontally is much worse than vertically 