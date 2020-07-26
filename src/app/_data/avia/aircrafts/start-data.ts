import {
    meter, kilometer, nauticalMile, inch, foot, mile,
    kilogram, tonne, pound,
    kilometersHour, knot, milesHour, Mach,
    liter, cubicMeter, cubicFoot, usGallon, imperialGallon,
    kilonewton, poundforce, kilogramforce,
} from 'units-weigher';
import { AircraftBuilders as builders } from 'src/app/_entities/avia/aircrafts/builders';
import { LinerDescription as Liner, CargoAirplaneDescription as Freighter, AircraftDescription } from 'src/app/_entities/avia/aircrafts/entities';
import { CrewPerson, Engine } from 'src/app/_entities/avia/eintities';

// ********************** Wright Flyer I ***********************
const ship_ZeppelinNT: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Zeppelin,
        name: 'Zeppelin',
        family: 'NT',
        serie: 7,
        remarks: 'helium-filled airshis being manufactured since the 1990s by the German company Zeppelin Luftschifftechnik GmbH (ZLT) in Friedrichshafen.[1]',
    },
    firstFlight: new Date('1997-11-18'), 

    measurements: {
        airframe: {
            length: meter(75),
            height: meter(17.4),
            width: meter(19.5)
        },

        wingSpan: meter(0),
        wingArea: meter(0).asX2,
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

    designation: {
        brand: builders.Wright,
        name: 'Flyer',
        remarks: 'First successful heavier-than-air powered aircraft.',
    },
    firstFlight: new Date('1903-12-17'),

    measurements: {
        airframe: {
            length: foot(21 + 1 / 12),
            height: foot(9),
        },

        wingSpan: foot(40 + 4 / 12),
        wingArea: foot(510).asX2,
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
    maxSeats: 0, 
}

// ********************** Sikorsky S-42 ***********************
const plane_SikorskyS42: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Sikorsky,
        name: 'Flying Clipper',
        family: 'S',
        serie: 42,
        remarks: 'A commercial flying boat designed and built by Sikorsky Aircraft to meet requirements for a long-range flying boat laid out by Pan Am. The innovative design included wing flaps, variable-pitch propellers, and a tail-carrying full-length hull. The prototype quickly established ten world records for payload-to-height. The fleet of S42 was used primarily on the Miami - Rio de Janeiro route. ',
    },
    firstFlight: new Date('1934-3-29'), // prototype

    measurements: {
        airframe: {
            length: foot(67 + 8 / 12),
            height: foot(17 + 4 / 12),
        },

        wingSpan: foot(114 + 2 / 12),
        wingArea: foot(1330).asX2,
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
};

// ********************** CONCORDE ***********************
const plane_Concorde: Liner = {
    unid: undefined,

    designation: {
        brand: builders.BAC,
        name: 'Concorde',
        modification: '',
        remarks: 'the last passenger supersonic now (2020)',
    },
    firstFlight: new Date('1969-3-2'),

    measurements: {
        airframe: {
            length: foot(202.33333), // 202'4" in (61.66 m) - foot has 12 inches
            height: foot(40),
            width: foot(9.41667), // max: 9 ft 5 in (2.87 m) 
        },

        wingSpan: foot(84),
        wingArea: foot(3856),
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
};

// ********************** AIRBUS A380 ***********************
const plane_A380: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Airbus,
        name: 'A380',
        variant: 800,
        remarks: 'largest passenger aircraft ever [year 2020] with two fuselage-long decks',
    },
    firstFlight: new Date('2005-04-27'),

    measurements: {
        airframe: {
            length: meter(72.72),
            height: meter(24.09),
            width: meter(7.14),
        },

        wingSpan: meter(79.75),
        wingArea: meter(845).asX2,
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
    cargo: {
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
};

// ********************** BOEING DREAMLINER 787-10 ***********************
const plane_Dreamliner: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Boeing,
        name: 'Dreamliner',
        serie: 787,
        variant: 10,
        remarks: 'stretche variant of wide-body composite-made airliner, fully designed in CAD',
    },
    firstFlight: new Date('2017-3-31'),

    measurements: {
        airframe: {
            length: foot(224),
            height: foot(55 + 10 / 12), // 55 ft 10 in
            width: foot(18),
        },
        wingSpan: foot(197.25), // 197 ft 3 in
        wingArea: foot(197).asX2,
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
    cargo: {
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
};

// ********************** BOEING 747-400 ***********************
const plane_747_400: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Boeing,
        name: 'Jumbo Jet',
        serie: 747,
        variant: 400,
        remarks: 'Wide-body, long–range, commercial jet airliner and cargo aircraft. Variant of first wide-body airplane produced',
    },
    firstFlight: new Date('1988-4-29'),

    measurements: {
        airframe: {
            length: foot(231.83333), // 231 ft 10 in (70.66 m)
            height: foot(63.75), // 63 ft 8 in 
            width: inch(239.5), // here inches!
        },

        wingSpan: foot(211.41667), // 211 ft 5 in (64.44 m)
        wingArea: foot(5.650).asX2,
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
    cargo: {
        capacity: cubicFoot(5655),
    },
    takeoff: {
        run: foot(10700),
        minSpeed: knot(160),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(4),

    maxSeats: 660,
};

// ********************** GULFSTREAM 700 ***********************
const plane_Gulfstream700: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Gulfstream,
        name: 'Gulfstream',
        serie: 700,
        modification: '',
        remarks: 'twin-engine business jet airplane',
    },
    firstFlight: new Date('2020-2-14'),

    measurements: {
        airframe: {
            length: foot(109 + 10 / 12), // 109 ft 10 in 
            height: foot(25 + 5 / 12), // 25 ft 5 in / 7.75 m
            width: foot(8 + 2 / 12), // 8 ft 2 in
        },

        wingSpan: foot(103),
        wingArea: foot(1.283).asX2,
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
    cargo: {
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
};

// ********************** BOMBARDIER CRJ-700 ***********************
const plane_Crj700: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Bombardier,
        family: 'CRJ',
        serie: 700,
        remarks: 'regional jet',
    },
    firstFlight: new Date('1999-5-27'),

    measurements: {
        airframe: {
            length: foot(106 * 12 + 1),
            height: foot(24 + 10 / 12),
        },

        wingSpan: foot(76 + 3 / 12),
        wingArea: foot(760),
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
    cargo: {
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
};

// ********************** ANTONOV MRIYA ***********************
const plane_Mriya: Freighter = {
    unid: undefined,

    designation: {
        brand: builders.Antonov,
        name: 'Mriya',
        family: 'An',
        variant: 225,
        remarks: 'biggest flying aircraft in the world with the single machine in operation',
    },
    firstFlight: new Date('1988-12-21'),

    measurements: {
        airframe: {
            length: meter(84),
            height: meter(18.1),
        },

        wingSpan: meter(88.4),
        wingArea: meter(905),
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
    cargo: {
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
};


// ********************** AIRBUS BELUGA XL ***********************
const plane_BelugaXl: Freighter = {
    unid: undefined,

    designation: {
        name: 'Beluga XL',
        brand: builders.Airbus,
        family: '330',
        serie: 743,
        modification: 'L',
        remarks: 'A large transport aircraft based on the Airbus A330 airliner. The aircraft entered service with Airbus Transport on 9 January 2020[ to replace the Airbus Beluga in the movement of oversized aircraft components, for example wings. The Beluga XL made its first flight on 19 July 2018, and received its type certification on 13 November 2019.',
    },
    firstFlight: new Date('2018-7-19'),

    measurements: {
        airframe: {
            length: meter(63.1),
            height: meter(18.9),
            width: meter(8.8),
        },

        wingSpan: meter(60.3),
        wingArea: meter(361.6).asX2,
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

    cargo: {
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
};

// ********************** CESSNA 172 ***********************
const plane_Cessna172: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Cessna,
        name: 'Skyhawk',
        family: '',
        serie: 172,
        modification: 'R', // since 1996
        remarks: 'Four-seat, single-engine, high wing, fixed-wing aircraft. First flown in 1955, more "172"s have been built than any other aircraft.',
    },
    firstFlight: new Date('1955-6-12'),

    measurements: {
        airframe: {
            length: foot(27 + 2 / 12),
            height: foot(8 + 11 / 12),
        },

        wingSpan: foot(36 * 12 + 1),
        wingArea: foot(174).asX2,
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
    cargo: {
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
};

// ********************** A321neo ***********************
const plane_A321neo: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Airbus,
        family: 'A',
        serie: 321,
        modification: 'neo',
        remarks: 'A development of the A320 family of narrow-body jet-airliners produced by Airbus (neo - for "new engine option)"',
    },
    firstFlight: new Date('2016-2-12'),

    measurements: {
        airframe: {
            length: meter(44.51),
            height: meter(11.76),
            width: meter(3.95),
        },

        wingSpan: meter(35.80),
        wingArea: meter(122.6).asX2,
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
    cargo: {
        capacity: cubicMeter(51),
    },
    takeoff: {
        run: meter(1707),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 450,

    listPriceMlnUsd2020: 117
};

// ********************** ATR72 ***********************
const plane_Atr72: Liner = {
    unid: undefined,

    designation: {
        brand: builders.ATR,
        name: 'ATR',
        serie: 72,
        remarks: 'twin-engine turboprop, short-haul regional airliner developed and produced in France and Italy',
    },
    firstFlight: new Date('1988-10-27'),

    measurements: {
        airframe: {
            length: meter(27.17),
            height: meter(7.65),
            width: meter(3),
        },

        wingSpan: meter(27.05),
        wingArea: meter(61).asX2,
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
    cargo: {
        capacity: cubicMeter(75),
    },
    takeoff: {
        run: meter(1367),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 78,
    listPriceMlnUsd2020: 16.5
};

// ********************** Aero Spacelines B-377-SG Super Guppy ***********************
const plane_B377Sg: Freighter = {
    unid: undefined,

    designation: {
        brand: builders.AeroSpacelines,
        name: 'Super Guppy',
        family: 'B',
        serie: 377,
        modification: 'SG',
        remarks: 'Large, wide-bodied cargo aircraft that is used for hauling outsize cargo components. The only airplane in the world capable of carrying a complete third stage of the Saturn V rocket.',
    },
    firstFlight: new Date('1965-8-31'),

    measurements: {
        airframe: {
            length: foot(143 + 10 / 12),
            height: foot(48.5),
        },

        wingSpan: inch(156.25),
        wingArea: foot(1964.6).asX2,
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
    cargo: {
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
};

// ********************** EMBRAER ERJ-145 ***********************
const plane_Erj145Er: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Embraer,
        family: 'ERJ',
        serie: 145,
        modification: 'ER',
        remarks: 'twin-engine regional jet with extended range',
    },
    firstFlight: new Date('1995-8-11'),

    measurements: {
        airframe: {
            length: meter(29.87),
            height: meter(6.76),
        },

        wingSpan: meter(20.04),
        wingArea: meter(51.18).asX2,
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
    cargo: {
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
};

// ********************** Focker 70 ***********************
const plane_Fokker70: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Fokker,
        name: 'Fokker',
        serie: 100,
        remarks: 'narrow-body, twin-engined, medium-range, turbofan regional airliner ',
    },
    firstFlight: new Date('1993-4-4'),

    measurements: {
        airframe: {
            length: meter(30.91),
            height: meter(8.5),
            width: meter(3.30),
        },

        wingSpan: meter(28.08),
        wingArea: meter(93.5).asX2,
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
};

// ********************** Boeing 737-100 ***********************
const plane_737_100: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Boeing,
        family: 'B',
        serie: 737,
        variant: 100,
        remarks: 'a narrow-body aircraft developed to supplement the 727 on short and thin routes, the twinjet retains the 707 fuselage cross-section and nose with two underwing turbofans.',
    },
    firstFlight: new Date('1967-4-9'),

    measurements: {
        airframe: {
            length: foot(94),
            height: foot(37),
        },

        wingSpan: foot(93),
        wingArea: foot(979.9).asX2,
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

    cargo: {
        capacity: cubicFoot(650),
    },

    takeoff: {
        run: foot(6099),
    },

    cockpitCrew: new Array<CrewPerson>(2),
    powerplant: new Array<Engine>(2),
    maxSeats: 124,
    listPriceMlnUsd2020: 27.2
};

// ********************** Boeing 747-400 LCF ***********************
const plane_747_400LCF: Freighter = {
    unid: undefined,

    designation: {
        brand: builders.Boeing,
        name: 'LCF', // Large Cargo Freigter
        family: '747',
        serie: 400,
        modification: 'LCF',
        remarks: 'an extensively modified Boeing 747-400 that is used exclusively for transporting Boeing 787 Dreamliner aircraft components to Boeing\'s assembly plants from suppliers around the world',
    },
    firstFlight: new Date('2006-9-9'),

    measurements: {
        airframe: {
            length: foot(231 + 10 / 12),
            height: foot(63.25),
            width: foot(21 + 4 / 12),
        },

        wingSpan: inch(211 * 12 + 5),
        wingArea: foot(5825).asX2,
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
    cargo: {
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
};


// ********************** Douglas DC-3 ***********************
const plane_DouglasDc3: Liner = {
    unid: undefined,

    designation: {
        brand: builders.Douglas,
        name: '',
        family: 'DC',
        serie: 3,
        modification: '',
        remarks: 'a propeller-driven airliner which had a lasting effect on the airline industry in the 1930s/1940s; considered the first airliner that could profitably carry only passengers.',
    },
    firstFlight: new Date('1935-12-17'),

    measurements: {
        airframe: {
            length: foot(64.75),
            height: foot(16 + 11 / 12),
        },

        wingSpan: foot(95 + 1 / 6),
        wingArea: foot(987).asX2,
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
};

export const fullAircraftsList: AircraftDescription[] = [
    ship_ZeppelinNT,
    
    plane_WrightFlyer,
    plane_SikorskyS42,
    plane_Concorde,
    plane_A380,
    plane_Dreamliner,
    plane_747_400,
    plane_Gulfstream700,
    plane_Crj700,
    plane_Mriya,
    plane_BelugaXl,
    plane_Cessna172,
    plane_A321neo,
    plane_Atr72,
    plane_B377Sg,
    plane_Erj145Er,
    plane_Fokker70,
    plane_737_100,
    plane_747_400LCF,

    plane_DouglasDc3,

    // Bleriot-SPAD S.33
];