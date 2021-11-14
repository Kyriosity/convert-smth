# Development guidelines for this project

## Keep type safety 
Albeit all *quantified* or their *converters*, *presenters* share their respected parent definitions/implementations they must **not ever** intercept.
E.g. *mass* can't be assigned to, or, compared with *acceleration*, as well *speed* - to/with *length*
A converter can't compare different types of *quantified*.

## Interfaces
Surprise for Java/C# developers, that interfaces in TS aren't interfaces. They are rather a join of structs and interfaces. And this is a good part - you spare at least one declaration.
Thus prefix interfaces with `I` provided it's either a set of functions or a pure definition&nbsp;&nbsp;<sup>**_i**</sup>

<sup>**_i**</sup><sub>&nbsp;&nbsp;rule of thumb - only abstract classes or other interfaces could be ancestors or combiners, and it's not for object instantiation (but practical as an argument or return value type)</sub>

## Public API
The library don't expose `Quantified` and `UValue` to users, who shall use *Measures* and *Instances*.

## Prohibit unit casting
`Quantified` is sealed by means of its readonly *Unit*. Otherwise it were a big open door for bugs (e.g. accidental cast/assign of kilogram to ton).
// KD, ToDo: tests

## Avoid any cross-measure ops


## Think of performance
Everything, that doesn't return or change a *quantified* shall be external.

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
    + when listing is akward *shortcut* to abbreviation
```typescript
const vcbl = ratherCoolButLongMethodName
vcbl(a); vcbl(bbb); vcbl(c3)
// ....
```    

