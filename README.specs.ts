import { distance, kilometer, meter, mile, kilometersHour, Mach, tonne, pound, kilogram } from "units-weigher";

/** 
* Declaring 
*/
const cheetahCanRUn = kilometersHour(128)
const concordeCruise = Mach(2)

let dailyWalk: distance
dailyWalk = kilometer(20)
dailyWalk = mile(11)
dailyWalk = meter(-1) // KD, ToDo: natural range
// dailyWalk = kilometersHour(5) // error

/** 
* Converting 
*/
const cargo1 = tonne(5)
const cargo2 = pound(1200)
let commonCargo = kilogram(3)
commonCargo.value = commonCargo.value/3 

/** 
* Comparing 
*/
