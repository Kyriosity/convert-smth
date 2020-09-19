import { AircraftBuilders as builders } from 'src/app/_entities/avia/aircrafts/manufacturers';
import { LinerNfo as Liner, CargoAirplaneNfo as Freighter, AircraftNfo } from 'src/app/_entities/avia/aircrafts/entities';
import { CrewPerson, Engine } from 'src/app/_entities/avia/eintities';
import { meter, kilogram, kilometer, kilometersHour, foot, pound, milesHour, mile, usGallon, Mach,
     poundforce, imperialGallon, tonne, kilonewton, 
     liter, cubicMeter, knot, nauticalMile, cubicFoot, inch, kilogramforce } from 'units-weigher';

// ********************** Wright Flyer I ***********************
const ship_ZeppelinNT: Liner = {
    unid: undefined,
    remarks: 'helium-filled airship being manufactured since the 1990s by the German company Zeppelin Luftschifftechnik GmbH (ZLT) in Friedrichshafen.',

    designation: {
        brand: builders.Zeppelin,
        title: 'Zeppelin',
        family: 'NT',
        serie: 7,
    },
    firstFlight: new Date('1997-11-18'),

    measurements: {
        airframe: {
            length: meter(75),
            height: meter(17.4),
            width: meter(19.5)
        },

        wingSpan: meter(0),
        // // wingArea: meter(0).asX2,
    },

    weights: {
        empty: kilogram(8050 - 1900),
        maxTakeoff: kilogram(8050),
        maxLanding: kilogram(8050),
        payload: kilogram(1900),
    },

    performance: {
        range: kilometer(1000),
        cruiseSpeed: kilometersHour(115),
        maxSpeed: kilometersHour(120),
        serviceCeiling: meter(2600),
        fuelCapacity: undefined,
        // ToDo: cruiseFuelConsumption: ,
    },
    takeoff: {
        run: meter(0),
        minSpeed: kilometersHour(0),
    },


    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(3),
    maxSeats: 12,

    listPriceMlnUsd2020: 8.5
}

const plane_WrightFlyer: Liner = {
    unid: undefined,
    remarks: 'First successful heavier-than-air powered aircraft.',

    designation: {
        brand: builders.Wright,
        title: 'Flyer',
    },
    firstFlight: new Date('1903-12-17'),

    measurements: {
        airframe: {
            length: foot(21 + 1 / 12),
            height: foot(9),
        },

        wingSpan: foot(40 + 4 / 12),
        // // wingArea: foot(510).asX2,
    },

    weights: {
        empty: pound(605),
        maxTakeoff: pound(745),
        maxLanding: pound(745),
        payload: pound(100),
    },

    performance: {
        range: meter(300),
        cruiseSpeed: milesHour(30),
        maxSpeed: milesHour(30),
        serviceCeiling: foot(30),

    },

    cockpitCrew: new Array<CrewPerson>(1),
    powerplant: new Array<Engine>(1),
    maxSeats: null,
}

// ********************** Sikorsky S-42 ***********************
const plane_SikorskyS42: Liner = {
    unid: undefined,
    remarks: 'A commercial flying boat designed and built by Sikorsky Aircraft to meet requirements for a long-range flying boat laid out by Pan Am. The innovative design included wing flaps, variable-pitch propellers, and a tail-carrying full-length hull. The prototype quickly established ten world records for payload-to-height. The fleet of S42 was used primarily on the Miami - Rio de Janeiro route. ',

    designation: {
        brand: builders.Sikorsky,
        title: 'Flying Clipper',
        family: 'S',
        serie: 42,
    },
    firstFlight: new Date('1934-3-29'), // prototype

    measurements: {
        airframe: {
            length: foot(67 + 8 / 12),
            height: foot(17 + 4 / 12),
        },

        wingSpan: foot(114 + 2 / 12),
        // wingArea: foot(1330).asX2,
    },

    weights: {
        empty: pound(19764),
        maxTakeoff: pound(38000),
        maxLanding: pound(38000),
        payload: pound(9500),
    },

    performance: {
        range: mile(1200),
        cruiseSpeed: milesHour(160),
        maxSpeed: milesHour(182),
        serviceCeiling: foot(15704),

        fuelCapacity: usGallon(1240),
    },

    cockpitCrew: new Array<CrewPerson>(4),
    powerplant: new Array<Engine>(4),
    maxSeats: 37, // or 14 sleeper berths
}

// ********************** CONCORDE ***********************
const plane_Concorde: Liner = {
    unid: undefined,
    remarks: 'the last passenger supersonic now (2020)',

    designation: {
        brand: builders.BAC,
        title: 'Concorde',
        modification: '',
    },
    firstFlight: new Date('1969-3-2'),

    measurements: {
        airframe: {
            length: foot(202.33333), // 202'4" in (61.66 m) - foot has 12 inches
            height: foot(40),
            width: foot(9.41667), // max: 9 ft 5 in (2.87 m) 
        },

        wingSpan: foot(84),
        // wingArea: foot(3856),
    },

    weights: {
        empty: pound(173500),
        maxTakeoff: pound(408000),
        maxLanding: pound(245000),
        payload: pound(29500),
    },

    performance: {
        range: mile(4488),
        cruiseSpeed: Mach(2),
        maxSpeed: Mach(2.04),
        serviceCeiling: foot(60000),
        thrust: poundforce(10000 * 4),

        fuelCapacity: imperialGallon(26286),
        // ToDo: cruiseFuelConsumption: { value: 25625, unit: 'litres / hour' },
    },

    takeoff: {
        run: foot(11800),
        minSpeed: milesHour(250),
        // thrust: poundforce(38.050), // pounds
    },

    cockpitCrew: new Array<CrewPerson>(3),
    powerplant: new Array<Engine>(4),
    maxSeats: 128, // in high density layout

    listPriceMlnUsd2020: 158
}

// ********************** AIRBUS A380 ***********************
const plane_A380: Liner = {
    unid: undefined,
    remarks: 'largest passenger aircraft ever [year 2020] with two fuselage-long decks',

    designation: {
        brand: builders.Airbus,
        title: 'A380',
        variant: 800,
    },
    firstFlight: new Date('2005-04-27'),

    measurements: {
        airframe: {
            length: meter(72.72),
            height: meter(24.09),
            width: meter(7.14),
        },

        wingSpan: meter(79.75),
        // wingArea: meter(845).asX2,
    },

    weights: {
        empty: tonne(275),
        maxTakeoff: tonne(569),
        maxLanding: tonne(91),
        payload: tonne(84),
    },

    performance: {
        range: kilometer(14800),
        cruiseSpeed: kilometersHour(903),
        maxSpeed: kilometersHour(1185),
        serviceCeiling: meter(13100),
        thrust: kilonewton(356), // 332.44–356.81 kN 

        fuelCapacity: liter(315292),
        // ToDo: cruiseFuelConsumption: { value: 13.5, unit: 'tons per hour' },
    },
    cargoBay: {
        capacity: cubicMeter(175.2),
    },
    takeoff: {
        run: meter(3000),
        minSpeed: knot(150),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(4),
    maxSeats: 853,

    listPriceMlnUsd2020: 432
}

// ********************** BOEING DREAMLINER 787-10 ***********************
const plane_Dreamliner: Liner = {
    unid: undefined,
    remarks: 'stretche variant of wide-body composite-made airliner, fully designed in CAD',

    designation: {
        brand: builders.Boeing,
        title: 'Dreamliner',
        family: '787',
        serie: 10,
    },
    firstFlight: new Date('2017-3-31'),

    measurements: {
        airframe: {
            length: foot(224),
            height: foot(55 + 10 / 12), // 55 ft 10 in
            width: foot(18),
        },
        wingSpan: foot(197.25), // 197 ft 3 in
        // wingArea: foot(197).asX2,
    },

    weights: {
        empty: pound(298700),
        maxTakeoff: pound(560000),
        maxLanding: pound(445000),
        payload: pound(126300),
    },

    performance: {
        range: nauticalMile(6430),
        cruiseSpeed: knot(488),
        maxSpeed: knot(516),
        serviceCeiling: foot(41100),
        thrust: poundforce(71000),

        fuelCapacity: usGallon(33384),
        // ToDo: cruiseFuelConsumption: { value: 1600, unit: 'gal/ hour' },
    },
    cargoBay: {
        capacity: cubicFoot(6.722),
    },
    takeoff: {
        run: foot(9.100),
        minSpeed: knot(160),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 380,

    listPriceMlnUsd2020: 306
}

// ********************** BOEING 747-400 ***********************
const plane_747_400: Liner = {
    unid: undefined,
    remarks: 'Wide-body, long–range, commercial jet airliner and cargo aircraft. Variant of first wide-body airplane produced',
 
    designation: {
        brand: builders.Boeing,
        title: 'Jumbo Jet',
        family: '747',
        serie: 400,
    },
    firstFlight: new Date('1988-4-29'),

    measurements: {
        airframe: {
            length: foot(231.83333), // 231 ft 10 in (70.66 m)
            height: foot(63.75), // 63 ft 8 in 
            width: inch(239.5), // here inches!
        },

        wingSpan: foot(211.41667), // 211 ft 5 in (64.44 m)
        // wingArea: foot(5.650).asX2,
    },

    weights: {
        empty: pound(404600),
        maxTakeoff: pound(875000),
        maxLanding: pound(652000),
        payload: pound(274100),
    },

    performance: {
        range: nauticalMile(7670),
        cruiseSpeed: knot(490),
        maxSpeed: knot(507),
        serviceCeiling: foot(45100),
        thrust: poundforce(62500),

        fuelCapacity: usGallon(57285),
        // ToDo: cruiseFuelConsumption: { value: 11, unit: 'ton/hour' } // a plane like a Boeing 747 uses approximately 1 gallon of fuel (about 4 liters) every second. 
    },
    cargoBay: {
        capacity: cubicFoot(5655),
    },
    takeoff: {
        run: foot(10700),
        minSpeed: knot(160),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(4),

    maxSeats: 660,
}

// ********************** GULFSTREAM 700 ***********************
const bizJet_Gulfstream700: Liner = {
    unid: undefined,
    remarks: 'twin-engine business jet airplane',
 
    designation: {
        brand: builders.Gulfstream,
        title: 'Gulfstream',
        family: '700',
    },
    firstFlight: new Date('2020-2-14'),

    measurements: {
        airframe: {
            length: foot(109 + 10 / 12), // 109 ft 10 in 
            height: foot(25 + 5 / 12), // 25 ft 5 in / 7.75 m
            width: foot(8 + 2 / 12), // 8 ft 2 in
        },

        wingSpan: foot(103),
        // wingArea: foot(1.283).asX2,
    },

    weights: {
        empty: kilogram(25567),
        maxTakeoff: kilogram(48807),
        maxLanding: kilogram(37875),
        payload: kilogram(6385),
    },

    performance: {
        range: nauticalMile(7500),
        cruiseSpeed: knot(516),
        maxSpeed: Mach(0.925),
        serviceCeiling: foot(51000),
        thrust: poundforce(18250),

        fuelCapacity: cubicMeter(29000),
        // ToDo: cruiseFuelConsumption: { value: 358, unit: 'gallons per hour' },
    },
    cargoBay: {
        capacity: cubicMeter(5.52),
    },
    takeoff: {
        run: foot(6250),
        thrust: kilonewton(2 * 81.20),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 19,

    listPriceMlnUsd2020: 75
}

// ********************** BOMBARDIER CRJ-700 ***********************
const plane_Crj700: Liner = {
    unid: undefined,
    remarks: 'regional jet',
 
    designation: {
        brand: builders.Bombardier,
        family: 'CRJ',
        serie: 700,
    },
    firstFlight: new Date('1999-5-27'),

    measurements: {
        airframe: {
            length: foot(106 * 12 + 1),
            height: foot(24 + 10 / 12),
        },

        wingSpan: foot(76 + 3 / 12),
        // wingArea: foot(760),
    },

    weights: {
        empty: pound(44245),
        maxTakeoff: pound(72750),
        maxLanding: pound(72750),
        payload: pound(18055),
    },

    performance: {
        range: nauticalMile(1378),
        cruiseSpeed: knot(447),
        maxSpeed: knot(473),
        serviceCeiling: foot(41000),
        thrust: poundforce(13790),

        fuelCapacity: liter(12000),
        // ToDo: cruiseFuelConsumption: { value: 444, unit: 'gallons per hour' },
    },
    cargoBay: {
        capacity: cubicFoot(547),
    },
    takeoff: {
        run: foot(5265),
        thrust: poundforce(12670),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 78,

    listPriceMlnUsd2020: 24
}

// ********************** ANTONOV MRIYA ***********************
const freighter_Mriya: Freighter = {
    unid: undefined,
    remarks: 'biggest flying aircraft in the world with the single machine in operation',
 
    designation: {
        brand: builders.Antonov,
        title: 'Mriya',
        family: 'An',
        variant: 225,
    },
    firstFlight: new Date('1988-12-21'),

    measurements: {
        airframe: {
            length: meter(84),
            height: meter(18.1),
        },

        wingSpan: meter(88.4),
        // wingArea: meter(905),
    },

    weights: {
        empty: kilogram(250000),
        maxTakeoff: kilogram(640000),
        maxLanding: kilogram(550000),
        payload: kilogram(250000),
    },

    performance: {
        range: kilometer(15400),
        cruiseSpeed: kilometersHour(850),
        serviceCeiling: meter(12000),
        thrust: kilogramforce(6 * 4860),

        fuelCapacity: liter(400000),
        // ToDo: cruiseFuelConsumption: { value: 15900, unit: 'ton/h' }
    },
    cargoBay: {
        capacity: cubicMeter(1200),

        dims: {
            length: meter(43.32),
            width: meter(6.4),
            height: meter(4.4),
        }
    },
    takeoff: {
        run: meter(3500),
        minSpeed: kilometersHour(290),
        thrust: kilogramforce(6 * 23430),
    },

    airlinerDerivative: false,
    cockpitCrew: new Array<CrewPerson>(6),
    powerplant: new Array<Engine>(6),

    listPriceMlnUsd2020: 250
}


// ********************** AIRBUS BELUGA XL ***********************
const freighter_BelugaXl: Freighter = {
    unid: undefined,
    remarks: 'A large transport aircraft based on the Airbus A330 airliner. The aircraft entered service with Airbus Transport on 9 January 2020[ to replace the Airbus Beluga in the movement of oversized aircraft components, for example wings. The Beluga XL made its first flight on 19 July 2018, and received its type certification on 13 November 2019.',
 
    designation: {
        title: 'Beluga XL',
        brand: builders.Airbus,
        family: '330',
        serie: 743,
        modification: 'L',
    },
    firstFlight: new Date('2018-7-19'),

    measurements: {
        airframe: {
            length: meter(63.1),
            height: meter(18.9),
            width: meter(8.8),
        },

        wingSpan: meter(60.3),
        // wingArea: meter(361.6).asX2,
    },

    weights: {
        empty: kilogram(127500),
        maxTakeoff: kilogram(227000),
        maxLanding: kilogram(187000),
        payload: kilogram(50500),
    },

    performance: {
        range: kilometer(4300),
        cruiseSpeed: kilometersHour(737),
        serviceCeiling: meter(11000),
        thrust: kilonewton(316),

        fuelCapacity: liter(23860),
        // ToDo: cruiseFuelConsumption: { value: -1, unit: 'VALUE UNKNOWN' },
    },

    cargoBay: {
        capacity: cubicMeter(2209),

        dims: {
            length: meter(45),
            width: meter(8),
            height: meter(8),
        }
    },

    takeoff: {
        run: meter(1386),
        thrust: kilonewton(270),
    },

    unpressurized: true,
    airlinerDerivative: false,

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),

    listPriceMlnUsd2020: 183
}

// ********************** CESSNA 172 ***********************
const plane_Cessna172: Liner = {
    unid: undefined,
    remarks: 'Four-seat, single-engine, high wing, fixed-wing aircraft. First flown in 1955, more "172"s have been built than any other aircraft.',
 
    designation: {
        brand: builders.Cessna,
        title: 'Skyhawk',
        family: '172',
        modification: 'R', // since 1996
    },
    firstFlight: new Date('1955-6-12'),

    measurements: {
        airframe: {
            length: foot(27 + 2 / 12),
            height: foot(8 + 11 / 12),
        },

        wingSpan: foot(36 * 12 + 1),
        // wingArea: foot(174).asX2,
    },

    weights: {
        empty: pound(1680),
        maxTakeoff: pound(2550),
        maxLanding: pound(2550),
        payload: pound(878),
    },

    performance: {
        range: nauticalMile(640),
        cruiseSpeed: knot(124), // here KTAS: Knots True Airspeed
        maxSpeed: knot(163),
        serviceCeiling: foot(14000),

        fuelCapacity: usGallon(53),
        // ToDo: cruiseFuelConsumption: { value: 8.6, unit: 'gal/hour' },
    },
    cargoBay: {
        capacity: cubicFoot(30),
    },
    takeoff: {
        run: foot(945),
        minSpeed: knot(55), // here KIAS: Knots Indicated Airspeed
    },

    cockpitCrew: new Array<CrewPerson>(1),
    powerplant: new Array<Engine>(1),
    maxSeats: 3,

    listPriceMlnUsd2020: 0.17
}

// ********************** A321neo ***********************
const plane_A321neo: Liner = {
    unid: undefined,
    remarks: 'A development of the A320 family of narrow-body jet-airliners produced by Airbus (neo - for "new engine option)"',
 
    designation: {
        brand: builders.Airbus,
        family: 'A',
        serie: 321,
        modification: 'neo',
    },
    firstFlight: new Date('2016-2-12'),

    measurements: {
        airframe: {
            length: meter(44.51),
            height: meter(11.76),
            width: meter(3.95),
        },

        wingSpan: meter(35.80),
        // wingArea: meter(122.6).asX2,
    },

    weights: {
        empty: tonne(50.1),
        maxTakeoff: tonne(97),
        maxLanding: tonne(79.20),
        payload: tonne(25.5),
    },

    performance: {
        range: kilometer(7400),
        cruiseSpeed: knot(450),
        maxSpeed: knot(473),
        serviceCeiling: meter(12000),

        fuelCapacity: liter(26730),
        // ToDo: cruiseFuelConsumption: { value: 2740, unit: 'kg/h' },
    },
    cargoBay: {
        capacity: cubicMeter(51),
    },
    takeoff: {
        run: meter(1707),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 450,

    listPriceMlnUsd2020: 117
}

// ********************** ATR72 ***********************
const plane_Atr72: Liner = {
    unid: undefined,
    remarks: 'twin-engine turboprop, short-haul regional airliner developed and produced in France and Italy',
 
    designation: {
        brand: builders.ATR,
        title: 'ATR',
        serie: 72,
    },
    firstFlight: new Date('1988-10-27'),

    measurements: {
        airframe: {
            length: meter(27.17),
            height: meter(7.65),
            width: meter(3),
        },

        wingSpan: meter(27.05),
        // wingArea: meter(61).asX2,
    },

    weights: {
        empty: kilogram(13311),
        maxTakeoff: kilogram(23000),
        maxLanding: kilogram(21850),
        payload: kilogram(7500),
    },

    performance: {
        range: kilometer(1528),
        cruiseSpeed: kilometersHour(510),
        maxSpeed: knot(299),
        serviceCeiling: meter(7600),

        fuelCapacity: usGallon(1690),
        // ToDo: cruiseFuelConsumption: { value: 620, unit: 'kg/h' },
    },
    cargoBay: {
        capacity: cubicMeter(75),
    },
    takeoff: {
        run: meter(1367),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 78,
    listPriceMlnUsd2020: 16.5
}

// ********************** Aero Spacelines B-377-SG Super Guppy ***********************
const plane_B377Sg: Freighter = {
    unid: undefined,
    remarks: 'Large, wide-bodied cargo aircraft that is used for hauling outsize cargo components. The only airplane in the world capable of carrying a complete third stage of the Saturn V rocket.',
 
    designation: {
        brand: builders.AeroSpacelines,
        title: 'Super Guppy',
        family: 'B',
        serie: 377,
        modification: 'SG',
    },
    firstFlight: new Date('1965-8-31'),

    measurements: {
        airframe: {
            length: foot(143 + 10 / 12),
            height: foot(48.5),
        },

        wingSpan: inch(156.25),
        // wingArea: foot(1964.6).asX2,
    },

    weights: {
        empty: pound(101500),
        maxTakeoff: pound(170000),
        maxLanding: pound(160000),
        payload: pound(54500),
    },

    performance: {
        range: nauticalMile(1734),
        cruiseSpeed: knot(220),
        maxSpeed: knot(250),
        serviceCeiling: foot(25000),

        fuelCapacity: cubicFoot(1120),
        // ToDo: cruiseFuelConsumption: { value: 663, unit: 'gal/hour' },
    },
    cargoBay: {
        capacity: cubicFoot(49750),

        dims: {
            length: foot(111),
            width: foot(25),
            height: foot(25),
        }
    },
    takeoff: {
        run: foot(6500), // not proven
    },

    airlinerDerivative: false,

    cockpitCrew: new Array<CrewPerson>(4),
    powerplant: new Array<Engine>(4),
}

// ********************** EMBRAER ERJ-145 ***********************
const plane_Erj145Er: Liner = {
    unid: undefined,
    remarks: 'twin-engine regional jet with extended range',
 
    designation: {
        brand: builders.Embraer,
        family: 'ERJ',
        serie: 145,
        modification: 'ER',
    },
    firstFlight: new Date('1995-8-11'),

    measurements: {
        airframe: {
            length: meter(29.87),
            height: meter(6.76),
        },

        wingSpan: meter(20.04),
        // wingArea: meter(51.18).asX2,
    },

    weights: {
        empty: kilogram(12114),
        maxTakeoff: kilogram(22000),
        maxLanding: kilogram(19300),
        payload: kilogram(5786),
    },

    performance: {
        range: kilometer(2963),
        cruiseSpeed: kilometersHour(833),
        serviceCeiling: meter(11278),

        fuelCapacity: liter(4173 / 0.75),
        // ToDo: cruiseFuelConsumption: { value: 1500, unit: 'litre hour' },
    },
    cargoBay: {
        capacity: cubicFoot(384),
    },
    takeoff: {
        run: meter(1970),
        thrust: kilonewton(31.3),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 50,

    listPriceMlnUsd2020: 21
}

// ********************** Focker 70 ***********************
const plane_Fokker70: Liner = {
    unid: undefined,
    remarks: 'narrow-body, twin-engined, medium-range, turbofan regional airliner ',
 
    designation: {
        brand: builders.Fokker,
        title: 'Fokker',
        serie: 100,
    },
    firstFlight: new Date('1993-4-4'),

    measurements: {
        airframe: {
            length: meter(30.91),
            height: meter(8.5),
            width: meter(3.30),
        },

        wingSpan: meter(28.08),
        // wingArea: meter(93.5).asX2,
    },

    weights: {
        empty: kilogram(22673),
        maxTakeoff: kilogram(39915),
        maxLanding: kilogram(36740),
        payload: kilogram(10890),
    },

    performance: {
        range: kilometer(3410),
        cruiseSpeed: kilometersHour(845),
        maxSpeed: Mach(0.77),
        serviceCeiling: meter(11000),
        thrust: kilonewton(61.6 * 2),

        fuelCapacity: liter(12800),
        // ToDo: cruiseFuelConsumption: { value: 250, unit: 'l/hour' },
    },

    takeoff: {
        run: meter(1300),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 85,
    listPriceMlnUsd2020: 20
}

// ********************** Boeing 737-100 ***********************
const plane_737_100: Liner = {
    unid: undefined,
    remarks: 'a narrow-body aircraft developed to supplement the 727 on short and thin routes, the twinjet retains the 707 fuselage cross-section and nose with two underwing turbofans.',
 
    designation: {
        brand: builders.Boeing,
        family: 'B',
        serie: 737,
        variant: 100,
    },
    firstFlight: new Date('1967-4-9'),

    measurements: {
        airframe: {
            length: foot(94),
            height: foot(37),
        },

        wingSpan: foot(93),
        // wingArea: foot(979.9).asX2,
    },

    weights: {
        empty: pound(61994),
        maxTakeoff: pound(110000),
        maxLanding: pound(99000),
        payload: pound(34270),
    },

    performance: {
        range: nauticalMile(1540),
        cruiseSpeed: knot(473),
        serviceCeiling: foot(37000),
        thrust: poundforce(14000),

        fuelCapacity: usGallon(4720),
        // ToDo: cruiseFuelConsumption: { value: 3300, unit: 'litre/hour' },
    },

    cargoBay: {
        capacity: cubicFoot(650),
    },

    takeoff: {
        run: foot(6099),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 124,
    listPriceMlnUsd2020: 27.2
}

// ********************** Boeing 747-400 LCF ***********************
const freighter_747_400LCF: Freighter = {
    unid: undefined,
    remarks: 'an extensively modified Boeing 747-400 that is used exclusively for transporting Boeing 787 Dreamliner aircraft components to Boeing\'s assembly plants from suppliers around the world',
 
    designation: {
        brand: builders.Boeing,
        title: 'LCF', // Large Cargo Freigter
        family: '747',
        serie: 400,
        modification: 'LCF',
    },
    firstFlight: new Date('2006-9-9'),

    measurements: {
        airframe: {
            length: foot(231 + 10 / 12),
            height: foot(63.25),
            width: foot(21 + 4 / 12),
        },

        wingSpan: inch(211 * 12 + 5),
        // wingArea: foot(5825).asX2,
    },

    weights: {
        empty: pound(394661),
        maxTakeoff: pound(874990),
        maxLanding: pound(652000),
        payload: pound(450000),
    },

    performance: {
        range: nauticalMile(7260),
        cruiseSpeed: knot(491),
        serviceCeiling: foot(43100),

        fuelCapacity: usGallon(57285),
        // ToDo: cruiseFuelConsumption: { value: 3600, unit: 'gal/hour' },
    },
    cargoBay: {
        capacity: cubicFoot(65000),
    },
    takeoff: {
        run: foot(9908),
    },

    airlinerDerivative: false,
    unpressurized: true,

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(4),
    listPriceMlnUsd2020: 232
}


// ********************** Douglas DC-3 ***********************
const plane_DouglasDc3: Liner = {
    unid: undefined,
    remarks: 'a propeller-driven airliner which had a lasting effect on the airline industry in the 1930s/1940s; considered the first airliner that could profitably carry only passengers.',

    designation: {
        brand: builders.Douglas,
        title: '',
        family: 'DC',
        serie: 3,
        modification: '',
    },
    firstFlight: new Date('1935-12-17'),

    measurements: {
        airframe: {
            length: foot(64.75),
            height: foot(16 + 11 / 12),
        },

        wingSpan: foot(95 + 1 / 6),
        // wingArea: foot(987).asX2,
    },

    weights: {
        empty: pound(16865),
        maxTakeoff: pound(25199),
        maxLanding: pound(16800),
        payload: pound(6000),
    },

    performance: {
        range: mile(1500),
        cruiseSpeed: knot(180),
        maxSpeed: knot(200),
        serviceCeiling: foot(23200),
        // ToDo: cruiseFuelConsumption: { value: 73, unit: 'gal/hour' },
        fuelCapacity: usGallon(822),
    },
    takeoff: {
        run: foot(1500),
        minSpeed: knot(50),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 32,
    listPriceMlnUsd2020: 1.48
}

const plane_SN601: Liner = {
    unid: undefined,
    remarks: 'a business jet of the early 1970s developed. In addition to its use as a VIP aircraft, a number of Corvettes were procured and operated by regional airlines, such as Air Alsace, Air Alpes, Air Champagne, TAT, and Sterling Airways. Airbus Industrie also operated a small fleet of Corvettes for internal transportation of staff between its key sites across Europe.',

    designation: {
        brand: builders.Aerospatiale,
        title: 'Corvette',
        family: '601',
        modification: 'SN',
    },
    firstFlight: new Date('1970-7-16'),

    measurements: {
        airframe: {
            length: meter(13.83),
            height: meter(4.23),
        },

        wingSpan: meter(12.87),
        // wingArea: meter(22).asX2,
    },

    weights: {
        empty: kilogram(3510),
        maxTakeoff: kilogram(6600),
        payload: pound(5400),
    },

    performance: {
        range: kilometer(2555),
        cruiseSpeed: kilometersHour(566),
        maxSpeed: kilometersHour(760),
        serviceCeiling: meter(12500),

        fuelCapacity: liter(1660),
    },

    takeoff: {
        run: meter(930),

    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 18,

    listPriceMlnUsd2020: 25
}

// ********************** Lockheed L-1011 TriStar ***********************
const plane_TriStar: Liner = {
    unid: undefined,
    remarks: 'an American medium-to-long-range, wide-body trijet airliner by Lockheed Corporation. It was the third wide-body airliner to enter commercial operations, after the Boeing 747 and the McDonnell Douglas DC-10. ',

    designation: {
        brand: builders.Lockheed,
        title: 'Tristar',
        family: 'L',
        serie: 1011,
        variant: 1,
    },
    firstFlight: new Date('1970-11-16'),

    measurements: {
        airframe: {
            length: foot(177 + 8.5 / 12),
            height: foot(55 + 4 / 12),
            width: inch(19 + 7 / 12),
        },

        wingSpan: foot(155 + 4 / 12),
        // wingArea: foot(3456).asX2,
    },

    weights: {
        empty: pound(241700),
        maxTakeoff: pound(430000),

        payload: pound(188000),
    },

    performance: {
        range: nauticalMile(4250),
        cruiseSpeed: knot(520),

        serviceCeiling: foot(42000),
        thrust: poundforce(42000),

        fuelCapacity: usGallon(23814),
        // cruiseFuelConsumption: { value: 11, unit: 'ton/hour' } // a plane like a Boeing 747 uses approximately 1 gallon of fuel (about 4 liters) every second. 
    },

    takeoff: {
        run: meter(2560),
    },

    cockpitCrew: new Array<CrewPerson>(3),
    powerplant: new Array<Engine>(3),

    maxSeats: 256,
    listPriceMlnUsd2020: 200
}

// ********************** Dassault Falcon 7X  ***********************
const bizJet_Falcon: Liner = {
    unid: undefined,
    remarks: 'a large-cabin, 5,950 nautical miles (11,020 km) range business jet developed from Falcon 900',
 
    designation: {
        brand: builders.Dassault,
        title: 'Falcon',
        family: '7X',
    },
    firstFlight: new Date('2005-5-5'),

    measurements: {
        airframe: {
            length: meter(23.38),
            height: meter(7.83),
        },

        wingSpan: meter(26.21),
        // wingArea: meter(70.7).asX2,
    },

    weights: {
        empty: kilogram(16601),
        maxTakeoff: kilogram(31751),

        payload: kilogram(1996),
    },

    performance: {
        range: kilometer(11019),
        maxSpeed: kilometersHour(956),
        cruiseSpeed: kilometersHour(850),

        serviceCeiling: meter(15545),
        thrust: kilonewton(28.48),

        fuelCapacity: liter(18000),
        // ToDo: cruiseFuelConsumption: { value: 11, unit: 'ton/hour' } // a plane like a Boeing 747 uses approximately 1 gallon of fuel (about 4 liters) every second. 
    },

    takeoff: {
        run: meter(1740),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(3),

    maxSeats: 16,
    listPriceMlnUsd2020: 53.8
}

// ********************** Hawker Siddeley Trident 1/1C ***********************
const plane_Trident: Liner = {
    unid: undefined,
    remarks: 'is a now-retired British short- (and later medium-) range airliner. It was the first T-tail rear-engined trijet airliner to be designed. It was also the first airliner to make a blind landing in revenue service in 1965.',
 
    designation: {
        brand: builders.HawkerSiddeley,
        title: 'Trident',
        family: '1',
        serie: 28,
     },
    firstFlight: new Date('1962-1-9'),

    measurements: {
        airframe: {
            length: foot(114 + 9 / 12),
            height: foot(27),
        },

        wingSpan: foot(89 + 10 / 12),
        // wingArea: foot(1358).asX2,
    },

    weights: {
        empty: pound(66700),
        maxTakeoff: pound(107000),

        payload: pound(26800),
    },

    performance: {
        range: nauticalMile(1170),
        cruiseSpeed: knot(506),

        serviceCeiling: foot(35000),
        thrust: poundforce(3 * 10400),

        fuelCapacity: imperialGallon(3840),
        // ToDo: cruiseFuelConsumption: { value: 11, unit: 'ton/hour' } // a plane like a Boeing 747 uses approximately 1 gallon of fuel (about 4 liters) every second. 
    },

    takeoff: {
        run: foot(6000),
    },

    cockpitCrew: new Array<CrewPerson>(3),
    powerplant: new Array<Engine>(3),

    maxSeats: 101,
    listPriceMlnUsd2020: 150
}

// ********************** Sud Aviation Caravelle ***********************
const plane_Caravelle: Liner = {
    unid: undefined,
    remarks: 'is a French short/medium-range jet airliner. It holds the distinction of being the world\'s first jet-powered airliner to be developed for the short/medium-range market. The Caravelle established the aft-mounted engine, clean-wing design configuration that is still used widely by smaller jetliners.',
 
    designation: {
        brand: builders.SudAviation,
        title: 'Caravelle',
        family: 'SE',
        serie: 210,
        variant: 1,
    },
    firstFlight: new Date('1955-5-27'),

    measurements: {
        airframe: {
            length: meter(32.01),
            height: meter(8.72),
        },

        wingSpan: meter(34.3),
        // wingArea: meter(146.7).asX2,
    },

    weights: {
        empty: kilogram(22200),
        maxTakeoff: kilogram(46000),

//        payload: kilogram(-1),
    },

    performance: {
        range: kilometer(1700),
        maxSpeed: kilometersHour(805),
        cruiseSpeed: kilometersHour(600),

        serviceCeiling: meter(12000),
        thrust: kilogramforce(2 * 4763),

        // fuelCapacity: (),
    },

 //   takeoff: {
//        run: meter(-1),
 //   },

    cockpitCrew: new Array<CrewPerson>(3),
    powerplant: new Array<Engine>(2),

    maxSeats: 80,
    listPriceMlnUsd2020: 500 // $5.5M at 1972
}

// ********************** de Havilland DH.34 ***********************
const plane_DH34: Liner = {
    unid: undefined,
    remarks: ' a single engined British biplane airliner built by the de Havilland Aircraft Company in the 1920s. 12 were built, with the DH.34 serving with Imperial Airways and its predecessors for several years.',
 
    designation: {
        brand: builders.deHavilland,
        title: 'DH.34',
    },
    firstFlight: new Date('1922-3-26'),

    measurements: {
        airframe: {
            length: foot(39),
            height: foot(12),
        },

        wingSpan: foot(51 + 4 / 12),
        // wingArea: foot(590).asX2,
    },

    weights: {
        empty: pound(4574),
        maxTakeoff: pound(7200),

     //   payload: kilogram(-1),
    },

    performance: {
        range: mile(317),
        maxSpeed: milesHour(128),
        cruiseSpeed: milesHour(105),

        serviceCeiling: foot(15000),


        // fuelCapacity: (),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(1),

    maxSeats: 10,
}

// ********************** Beechcraft 1900 ***********************
const plane_Beechcraft1900: Liner = {
    unid: undefined,
    remarks: ' 19-passenger, pressurized twin-engine turboprop fixed-wing aircraft. Designed to carry passengers in all weather conditions from airports with relatively short runways.',
  
    designation: {
        brand: builders.Beechcraft,
        title: 'Beechcraft',
        family: '1900',
    },
    firstFlight: new Date('1982-9-3'),

    measurements: {
        airframe: {
            length: foot(57 + 8 / 12),
            height: foot(15 + 5 / 12),
        },

        wingSpan: foot(57 + 9 / 12),
        // wingArea: foot(310).asX2,
    },

    weights: {
        empty: pound(10434),
        maxTakeoff: pound(17120),
        maxLanding: pound(16765),
        payload: pound(4375),
    },

    performance: {
        range: nauticalMile(382),
        cruiseSpeed: knot(280),
        serviceCeiling: foot(25000),

        fuelCapacity: usGallon(1600),
        // ToDo: cruiseFuelConsumption: { value: 358, unit: 'gallons per hour' },
    },
    takeoff: {
        run: foot(3470),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 19,

    listPriceMlnUsd2020: 7
}

// ********************** Mitsubishi SpaceJet ***********************
const plane_SpaceJet: Liner = {
    unid: undefined,
    remarks: 'Twin-engine regional jet aircraft manufactured by Mitsubishi Aircraft Corporation in a partnership with Toyota, with design assistance from Subaru. It will be the first airliner designed and produced in Japan since the NAMC YS-11 of the 1960s.',
 
    designation: {
        brand: builders.Mitsubishi,
        title: 'SpaceJet',
        family: 'M90',
    },
    firstFlight: new Date('2015-11-11'),

    measurements: {
        airframe: {
            length: meter(35.8),
            height: meter(10.4),
        },

        wingSpan: meter(35.80),
 //     // wingArea: meter(-1).asX2,
    },

    weights: {
        empty: tonne(26), // here OEW
        maxTakeoff: tonne(42.8),
        maxLanding: tonne(38),
        payload: tonne(10),
    },

    performance: {
        range: kilometer(3770),
        cruiseSpeed: kilometersHour(829),
        serviceCeiling: meter(11900),

        fuelCapacity: liter(12100),
        // ToDo: cruiseFuelConsumption: 
        thrust: kilonewton(78.2),
    },
    cargoBay: {
        capacity: cubicMeter(18.2),
    },
    takeoff: {
        run: meter(1740),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 88,

    listPriceMlnUsd2020: 46.3
}

// ********************** Convair CV240 ***********************
const plane_CV240: Liner = {
    unid: undefined,
    remarks: 'an American airliner that Convair manufactured from 1947 to 1954, initially as a possible replacement for the ubiquitous Douglas DC-3. Featuring a more modern design with cabin pressurization, the 240 series made some inroads as a commercial airliner.',
 
    designation: {
        brand: builders.Convair,
        title: '',
        family: 'CV240',
    },
    firstFlight: new Date('1947-3-16'),

    measurements: {
        airframe: {
            length: foot(74 + 8 / 12),
            height: foot(26 + 11 / 12),
        },

        wingSpan: foot(91 + 9 / 12),
        // wingArea: foot(817).asX2,
    },

    weights: {
        empty: pound(29500),
        maxTakeoff: pound(42500),
    },

    performance: {
        range: nauticalMile(1200),
        cruiseSpeed: milesHour(280),
        maxSpeed: milesHour(315),
        serviceCeiling: foot(16000),

        fuelCapacity: usGallon(1000),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 40,
}

// ********************** BAC One Eleven ***********************
const plane_BAC111: Liner = {
    unid: undefined,
    remarks: 'British short-range jet airliner widely used from the 1960s to the 1990s (retired only in 2019). The aircraft was also produced under licence in Romania during the 1980s as the Rombac One-Eleven.',

    designation: {
        brand: builders.BAC,
        title: 'One Eleven',
        family: '111',
        serie: 200,
    },
    firstFlight: new Date('1963-8-20'),

    measurements: {
        airframe: {
            length: foot(93 + 6 / 12),
            height: foot(24 + 6 / 12),
        },

        wingSpan: foot(88 + 6 / 12),
        // wingArea: foot(980).asX2,
    },

    weights: {
        empty: pound(46312),
        maxTakeoff: pound(78500),
        maxLanding: pound(69000),
        payload: pound(17688),
    },

    performance: {
        range: mile(830),
        cruiseSpeed: milesHour(548),

        serviceCeiling: foot(35000),
        thrust: poundforce(10410),

        fuelCapacity: liter(14020),
        // ToDo: cruiseFuelConsumption: { value: 11, unit: 'ton/hour' } // a plane like a Boeing 747 uses approximately 1 gallon of fuel (about 4 liters) every second. 
    },

    takeoff: {
        run: foot(6250),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),

    maxSeats: 89,
    listPriceMlnUsd2020: 475 // $5.2M in 1972
}

// ********************** Pilatus PC-24 SpaceJet ***********************
const bizJet_PC24: Liner = {
    unid: undefined,
    remarks: 'Light business jet with rugged airfield capability.',

    designation: {
        brand: builders.Pilatus,
        family: 'PC',
        serie: 24,
    },
    firstFlight: new Date('2015-5-11'),

    measurements: {
        airframe: {
            length: meter(16.85),
            height: meter(5.4),
        },

        wingSpan: meter(17),
        // wingArea: meter(30.91).asX2,
    },

    weights: {
        empty: kilogram(4965), // here OEW
        maxTakeoff: kilogram(8300),
        payload: kilogram(1485),
    },

    performance: {
        range: kilometer(3334),
        cruiseSpeed: kilometersHour(815),
        serviceCeiling: meter(13716),

        fuelCapacity: liter(3363),
        // ToDo: cruiseFuelConsumption: 0.58 kg/km (2.1 lb/mi) Mach 0.72/416 kn (770 km/h) cruise, 15,375 lb (6,974 kg) weight, 
        thrust: kilonewton(15),
    },
    takeoff: {
        run: meter(820),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 8,

    listPriceMlnUsd2020: 10.7
}

// ********************** HondaJet HA-420  ***********************
const lightJet_HondaJetHA420: Liner = {
    unid: undefined,
    remarks: 'Very lIght business jet - first aircradt developed by the Honda Aircraft Company, which has received multiple awards for innovation.',
 
    designation: {
        brand: builders.Honda,
        family: 'HA',
        serie: 420,
        title: 'Hondajet',
    },
    firstFlight: new Date('2003-12-3'),

    measurements: {
        airframe: {
            length: foot(42 + 7 / 12),
            height: foot(14 + 11 / 12),
        },

        wingSpan: foot(39 + 9 / 12),
        // wingArea: foot(176.7).asX2,
    },

    weights: {
        empty: pound(7203),
        maxTakeoff: pound(10701),
        payload: pound(1400),
    },

    performance: {
        range: nauticalMile(1437),
        cruiseSpeed: knot(422),
        serviceCeiling: foot(43000),
        thrust: poundforce(2050),
        fuelCapacity: cubicFoot(60741),
    },

    cargoBay: {
        capacity: cubicFoot(66),
    },

    takeoff: {
        run: foot(4000),
    },


    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 7,
    listPriceMlnUsd2020: 28
}

// ********************** Saab 90 ***********************
const plane_Saab90: Liner = {
    unid: undefined,
    remarks: 'Twin-engined, short-to-medium haul passenger aircraft, designed as a successor for the Douglas DC-3.',

    designation: {
        brand: builders.Saab,
        title: 'Scandia',
        serie: 90,
    },
    firstFlight: new Date('1946-11-16'),

    measurements: {
        airframe: {
            length: meter(21.3),
            height: meter(7.4),
        },

        wingSpan: meter(28),
        // wingArea: meter(85.7).asX2,
    },

    weights: {
        empty: kilogram(9960),
        maxTakeoff: kilogram(15900),
    },

    performance: {
        range: kilometer(2650),
        cruiseSpeed: kilometersHour(340),
        serviceCeiling: meter(7500),

        fuelCapacity: liter(2000),
    },

    takeoff: {
        run: meter(850),
    },
    cargoBay: {
        capacity: cubicMeter(10.7)
    },
    cockpitCrew: new Array<CrewPerson>(3),
    powerplant: new Array<Engine>(2),
    maxSeats: 32,
}

// ********************** Dornier-Fairchild 328 JET ***********************
const plane_DornierFairchild328Jet: Liner = {
    unid: undefined,
    remarks: ' commuter airliner, based upon the turboprop-powered Dornier 328, developed by the German aircraft manufacturer Dornier Luftfahrt GmbH. It would be the last Dornier-designed aircraft to reach production',

    designation: {
        brand: builders.Dornier,
        title: 'JET',
        family: '328',
        serie: 300,
    },
    firstFlight: new Date('1998-1-20'),

    measurements: {
        airframe: {
            length: meter(21.11),
            height: meter(7.24),
        },

        wingSpan: meter(20.98),
        // wingArea: meter(40).asX2,
    },

    weights: {
        empty: kilogram(9420),
        maxTakeoff: kilogram(15660),
        maxLanding: kilogram(14090),
        payload: kilogram(3410),
    },

    performance: {
        range: kilometer(2740),
        cruiseSpeed: kilometersHour(750),
        serviceCeiling: meter(11000),

        fuelCapacity: liter(4000),
        // ToDo: cruiseFuelConsumption: { value: 250, unit: 'l/hour' },
    },

    takeoff: {
        run: meter(1367),
        thrust: kilonewton(2 * 26.9),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 85,
    listPriceMlnUsd2020: 33 // $10.5 million (1996)
}

// ********************** Saab 90 ***********************
const plane_Saab2000: Liner = {
    unid: undefined,
    remarks: 'Twin-engined high-speed turboprop airliner',

    designation: {
        brand: builders.Saab,
        family: '2000',
    },
    firstFlight: new Date('1992-3-26'),

    measurements: {
        airframe: {
            length: meter(27.28),
            height: meter(7.73),
        },

        wingSpan: meter(24.76),
        // wingArea: meter(55.7).asX2,
    },

    weights: {
        empty: kilogram(13800),
        maxTakeoff: kilogram(22800),
        payload: kilogram(5900),
    },

    performance: {
        range: kilometer(2869),
        cruiseSpeed: kilometersHour(665),
        serviceCeiling: meter(9450),

        fuelCapacity: liter(5500),
    },

    takeoff: {
        run: meter(1200),
    },
    cargoBay: {
        capacity: cubicMeter(10.7)
    },
    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 58,
    listPriceMlnUsd2020: 25, // $12.5M in 1991
}

// ********************** GAF Nomad N22B ***********************
const plane_NomadN22B: Liner = {
    unid: undefined,
    remarks: 'Utility twin-turboprop, high-wing aircraft with a retractable gear. Design work began in the mid-1960s. Despite some export and commercial operations, sales were not as sufficient and production stopped in 1985.',

    designation: {
        brand: builders.GAF,
        title: 'Nomad',
        family: 'N22B',
    },
    firstFlight: new Date('1971-7-23'),

    measurements: {
        airframe: {
            length: foot(41 + 3 / 12),
            height: foot(18 + 2 / 12),
        },

        wingSpan: foot(54 + 2 / 12),
        // wingArea: foot(324).asX2,
    },

    weights: {
        empty: pound(4730),
        maxTakeoff: pound(8500),
    },

    performance: {
        range: nauticalMile(730),
        cruiseSpeed: knot(168),
        serviceCeiling: foot(25000),
        // thrust: horsePower(400), POWER

        fuelCapacity: usGallon(269),
    },
    cargoBay: {
        capacity: cubicFoot(58),
    },
    takeoff: {
        run: foot(1050),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 12,

    listPriceMlnUsd2020: 15 // A$991 000 in 1981
}

// ********************** Piaggio P.180 Avanti ***********************
const bizJet_P180Avanti: Liner = {
    unid: undefined,
    remarks: 'Italian executive transport aircraft with twin turboprop engines mounted in pusher configuration.',

    designation: {
        brand: builders.Piaggio,
        title: 'Avanti',
        family: 'P.180',
    },
    firstFlight: new Date('1986-9-23'),

    measurements: {
        airframe: {
            length: meter(14.4),
            height: meter(4),
        },
        wingSpan: meter(14),
        // wingArea: meter(16).asX2,
    },

    weights: {
        empty: kilogram(3799),
        maxTakeoff: kilogram(5488),
        maxLanding: kilogram(5216),
    },

    performance: {
        range: kilometer(2800),
        cruiseSpeed: kilometersHour(589),
        serviceCeiling: meter(12000),

        fuelCapacity: liter(1500),
        // ToDo: cruiseFuelConsumption 0.220 kg/km (0.779 lb/mi)
        // thrust: kilonewton(), // 630 kW
    },
    takeoff: {
        run: meter(994),
    },

    cockpitCrew: new Array<CrewPerson>(1), // can be flown by 2
    powerplant: new Array<Engine>(2),
    maxSeats: 9,

    listPriceMlnUsd2020: 7.7
}

// ********************** Vickers VC10 ***********************
const plane_VickersVC10: Liner = {
    unid: undefined,
    remarks: 'Mid-sized, narrow-body long-range jet airliner. The airliner was designed to operate on long-distance routes from the shorter runways of the era and commanded excellent hot and high performance for operations from African airports. It had achieved the fastest crossing of the Atlantic by a subsonic jet airliner of 5 hours and 1 minute, a record that was held for 41 years.',

    designation: {
        brand: builders.VickersArmstrongs,
        title: 'VC10',
    },
    firstFlight: new Date('1964-4-29'),

    measurements: {
        airframe: {
            length: foot(158 + 8/12),
            height: foot(39 + 6/12),
        },

        wingSpan: foot( 146 + 2/12),
        // wingArea: foot(2851).asX2,
    },

    weights: {
        empty: pound(139505),
        maxTakeoff: pound(334878),
    },

    performance: {
        range: mile(5850),
        cruiseSpeed: milesHour(550),

        serviceCeiling: foot(43000),
        thrust: poundforce(22500),

        fuelCapacity: imperialGallon(17925),
    },

    takeoff: {
        run: foot(8280),
    },

    cockpitCrew: new Array<CrewPerson>(4),
    powerplant: new Array<Engine>(4),

    maxSeats: 151,
    listPriceMlnUsd2020: 150 // £1.75 million
}

export const fullAircraftsList: AircraftNfo[] = [
    ship_ZeppelinNT,

    plane_WrightFlyer,

    plane_SikorskyS42,
    plane_Concorde,
    plane_A380,
    plane_Dreamliner,
    plane_747_400,
    bizJet_Gulfstream700,
    bizJet_Falcon,
    plane_Crj700,
    freighter_Mriya,
    freighter_BelugaXl,
    plane_Cessna172,
    bizJet_PC24,
    bizJet_P180Avanti,
    lightJet_HondaJetHA420,
    plane_A321neo,
    plane_SpaceJet,
    plane_Atr72,
    plane_B377Sg,
    plane_Erj145Er,
    plane_Fokker70,
    plane_737_100,
    freighter_747_400LCF,

    plane_DouglasDc3,
    plane_Saab90,
    plane_Saab2000,
    plane_NomadN22B,
    plane_CV240,
    plane_SN601,
    plane_TriStar,
    plane_Trident,
    plane_VickersVC10,
    plane_Caravelle,
    plane_BAC111,
    plane_Beechcraft1900,

    plane_DH34,

    plane_DornierFairchild328Jet,
];