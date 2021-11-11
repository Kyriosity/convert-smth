## Glossary
(Links here refer code entities)
+ Domain
    + [Unit](../projects/united-values/src/lib/_core/units.ts) - physical grade of measure (e.g. meter) or scale (e.g. Fahrenheit)
    + [Quantified](../projects/united-values/src/lib/_core/quantified.ts/) - based on *Unit*, is a concept of a physical property, which owns *value* and its *unit* 
    + [Measures](../projects/united-values/src/lib/_core/measure.ts/) - particular `Quantified` as *speed*, *volume*, *temperature*.
    + [Operations]
        + Conversion
        + Arihtmetic - good known `+`, `-`, `*`, `/`.&nbsp;&nbsp;<sup>**_a**</sup>
        
&nbsp;&nbsp;<sup>**_a**</sup><sub>&nbsp;&nbsp;intentionally *arithmetic*, not mathematic - [Quora](https://www.quora.com/What-is-difference-between-arithmetic-and-mathematics "What is the difference between Arithmetic and Mathematics?")</sub>

+ Applied
    + [UnitValue](../projects/united-values/src/lib/uvalue/_uvalue.ts) (aka *UValue*, *uval*) - derivative of *Quantified*, which adds up operations
    + [Instances](../projects/united-values/src/lib/uvalue/instances.ts) - of UValues' as `kilogram` or `Fahrenheit`
    + [Conversion](../projects/united-values/src/lib/uvalue/instances.ts)
    + Presentation

## Conversion
Conversion between units of the same nature (measure) is one of cornerstones of this lib.
Primarily there're two methods: 
+ tabled 
+ functional
 
### Rational (tabled)
*Rational* since based on a cross factor, a case of linear invertible function (always works two-way). Example: foots to meters and vice versa.

### Functional
Functions are usually non-linear relations, desribed by formalae. Quite many of them are one-way (a good example in mathematics is hashing).

## Presentation

## Validation and ranges


## Universal values
Physics is our existence and even the worst schooler is aware of dozens of event-related, universal, notable or named physical properties (but not exactly their values): 
+ water freezing/boiling, speed of sound/light 
+ mt. Everest height, length of equator, distance to Mars
+ normal human body temperature, home/auto voltage
+ Newtonian constant of gravitation, Boltzmann constant

### Solution
Library of such values

## Arithmetics

