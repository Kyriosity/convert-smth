# Custom Angular pipe for UValues

The project library provides you with a ready to use pipe for Angular, which can convert and adjust presentation of *measurables*.

For example of its application look into the markup of 
[Aircrafts table](./src/app/components/units/avia/aircrafts/aircrafts-descr-table/aircrafts-descr-table.component.html).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ value_expression | `uval` [ : unit [ : labelFormat [ : digitsInfo [ : locale ] ]]] }}

## Input value
 **value**&nbsp;&nbsp;&nbsp;&nbsp;*UValue*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;measurable to be formatted, e.g. `temperature`, `mass`, `force`

## Parameters


| Name        |    Type     | Function                                                                |
| ------------------- |----|-------------------------------------------------------------------------|
| unit | *string* | physical unit, when conversion is required<br/>Example: 'meter' will convert a distance of 1.2km to 1200m&nbsp&nbsp;;<sup>**_c**</sup><br/>Supply empty string to prevent conversion.&nbsp;&nbsp;<sup>**_e**</sup> |
| labelFormat      | *string* | format of the label for the physical value<br>For details refer to labeling<br/>If this paramter isn't set or supplied as empty string then default label will be applied |
| digitsInfo      | *string* | refer to built-in Angular [decimal pipe](https://angular.io/api/common/DecimalPipe)|
| locale       | *string* | refer to built-in Angular [decimal pipe](https://angular.io/api/common/DecimalPipe)|


<sub><sup>**_c**</sup>&nbsp;&nbsp;Obviously no conversion will run, if the value is already of the same unit.</sub>\
<sub><sup>**_e**</sup>&nbsp;&nbsp;This is of use when you only need any next optional parameter.</sub>
