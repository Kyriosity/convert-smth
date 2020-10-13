## Naming 
+ name properly - probably it's the ultimate challenge, but benefits are sound architecture and self-descriptive code/APIs <sup>**_n**</sup>
+ prefix interfaces with `I` if only it's a pure definition with cast <sup>**_i**</sup>
+ comments - why not, if it's a technical detail (like a ref to a platform bug), otherwise it's bad

<sup>**_n**</sup><sub> My tight experience with some companies, those names every knows. When there're hundreds of ever training developers and titled architects on board. Forgive my arrogance, but naming biz classes *Helpers*, *Services* means failed architecture and weeks of edu.</sub>

<sup>**_i**</sup><sub> rule of thumb - only abstract classes could be ancestors and it's never used for object instantiation, but it shall be used as arguments or return value</sub>

## Keep type safety 
Albeit all *measureables* or their *weighers* share their respected parent definitions/implementations they must **not ever** intercept.
E.g. *mass* can't be assigned to, or, compared with *acceleration*, as well *speed* - to/with *distance*
A weigher can't compare different types of measurables

## Prohibit unit casting
`Measurable` is sealed by means of its readonly props. Otherwise it were a big open door for bugs (e.g. accidental cast/assign of kilogram to tonne).
// KD, ToDo: tests

## Think of performance
+ `Measurebles` are structs with the smallest footprint. Do NOT extend them with any logic.
+ Any validation, transformation shall be *external* and on demand. Thus i stripped Measureables of any tempting logic

## Tests
There're not enough tests but any ultimate user is encouraged to cover the library with own probes. That would be safer and independent than in-built tests.

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

But here think twice if domain naming has been correct!
## My coding wisches as IMHO
* avoid **`;`** when possible. It's a 'good part' of TS that a line break is enough to terminate statements
* avoid one-after-one repetitions for even the best named things
    + use cycles 
    + use *shortcut* abbreviations
* constrain line length - scrolling horizontally is much worse than vertically