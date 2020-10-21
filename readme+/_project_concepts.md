## Entities (also Glossary)
+ [Unit](../projects/units-weigher/src/lib/core/units.ts) - physical grade of measure (e.g. meter) or scale (e.g. Fahrenheit)
+ [Quantified](../projects/units-weigher/src/lib/core.quantified.ts/) - based on *Unit* is concept of a physical property, which has *value* and its *unit* 
+ [UnitValue](../projects/units-weigher/src/lib/uvalues/uvalue.ts) (aka *UnitValue*, *uvalue*, *uval*) - derivative of *Quantified*, which adds up [conversion and math operations](../src/app/components/units/avia/aircrafts/aircrafts-descr-table/aircrafts-descr-table.component.html)
+ Derivatives of UValue - certain `quantified` as mass or temperature

## Conversion
Conversion between units of the same nature (measure) is a cornerstone of this framework.
Basically there're too ways 
+ tabled 
+ functional. Current release doesn't implement support of invertible functions, that looks quite disputable.
 
### Tabled

### Functional

## Presentation

## Validation and ranges


## Universal values
Physics is our life and even the worst schooler is aware of dozens of event-related, universal, notable or named physical properties (but not exactly their values): 
+ water freezing/boiling, speed of sound/light 
+ mt. Everest height, length of equator, distance to Mars
+ normal human body temperature, home/auto voltage
+ Newtonian constant of gravitation, Boltzmann constant

### Solution
Library of such values

## Arithmetics

