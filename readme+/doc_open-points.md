# Open points

## Actual ToDos
Search the code for ToDos

## Ranges and validation
It was a first intention of mine have built-in range proof in *Quantified*.
Length or mass by their nature can't be negative and zero Kelvin is absolute minus.&nbsp;<sup>0</sup>

However any application may suppose minus values (say, by subtract). So it must be an external range and validation mechanism. The library shall not provide any 'plugin' mechs, to keep UValues as simple and small as possible.

<sub><sup>0</sup>&nbsp;&nbsp;oops, not. Some researchers already got minus sign for their [billionths of Kelvin](https://www.mpg.de/research/negative-absolute-temperature#:~:text=Thus%2C%20nothing%20can%20be%20colder,nonetheless%20has%20negative%20Kelvin%20values).</sub>

## Calculation

### Floating point

### Preventing camel or zigzag calculation by conversion
Preventing "camel" calculation jumps, i.e. when a tiny is multiplicated with big and then again wih a tiny one. 
But hopefully JS interpretator cares about or there's a lib for this.

### Caching of popular factors

### Plugin custom factors

## Ideas
### Smth better than ng-build-in decimal pipe
