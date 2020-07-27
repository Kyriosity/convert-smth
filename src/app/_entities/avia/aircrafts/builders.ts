import { entityNaming as naming } from './entities'

export enum AircraftBuilders {
    AeroSpacelines,
    Aerospatiale,
    Airbus,
    Antonov,
    ATR,
    Boeing,
    Bombardier,
    BAC,
    Cessna,
    Dassault,
    Douglas,
    Embraer,
    Fokker,
    Gulfstream,
    Lockheed,
    Sikorsky,
    Wright,
    Zeppelin,
}

const namings: { [id in keyof typeof AircraftBuilders]?: naming; } = {
    AeroSpacelines: { short: 'Aero Spacelines', full: 'Aero Spacelines Incorporated', details: 'an American manufacturer from 1960 to 1968 which made a name for itself by converting Boeing 377 Stratocruisers into the famous Guppy line of airplanes' },
    Aerospatiale: { short: 'Aérospatiale', details: 'was a French state-owned aerospace manufacturer that built both civilian and military aircraft, rockets and satellites. It was originally known as Société nationale industrielle aérospatiale (SNIAS).' },
    Airbus: { short: 'Airbus', full: 'Societas Europaea (SE)' },
    Antonov: { short: 'Antonov' },
    ATR: { short: 'ATR', full: 'Aerei da Trasporto Regionale or Avions de transport régional', details: ' a joint venture formed by French aerospace company Aérospatiale (now Airbus) and Italian aviation conglomerate Aeritalia (now Leonardo S.p.A.)' },
    Boeing: { short: 'Boeing', full: 'The Boeign Company' },
    Bombardier: { short: 'Bombardier', full: 'Bombardier Inc.', details: ' a Canadian multinational manufacturer of business jets and rail. It was also formerly a manufacturer of public transport, commercial jets and vehicles (Bombardier transportation is planned to be divested but not yet approved). Its Bombardier Aviation division is headquartered in Montreal, and Bombardier Transportation in Berlin, Germany.' },
    BAC: { short: 'BAC', full: 'British Aircraft Corporation' },
    Cessna: { short: 'Cessna', full: 'Cessna  Aircraft Company ', details: 'was an American general aviation aircraft manufacturing corporation headquartered in Wichita, Kansas. Cessna produced small, piston-powered aircraft, as well as business jets. For many years the company was one of the highest-volume producers of general aviation aircraft in the world. The company was founded in 1927. ' },
    Dassault: { short: 'Dassault', full: 'Dassault Aviation SA', details: 'an international French aircraft manufacturer of military and business jets, and is a subsidiary of Dassault Group. It was founded in 1929 by Marcel Bloch as Société des Avions Marcel Bloch or "MB".'},
    Douglas: { short: 'Douglas', full: 'Douglas', details: 'Douglas Aircraft Company' },
    Embraer: { short: 'Embraer', full: 'Embraer Sociedade Anônima', details: 'is a Brazilian aerospace conglomerate that produces commercial, military, executive and agricultural aircraft[6] and provides aeronautical services. It was founded in 1969 in São José dos Campos, São Paulo, where its headquarters are located. The company is the third largest producer of civil aircraft, after Boeing and Airbus.' },
    Fokker: { short: 'Fokker' },
    Gulfstream: { short: 'Gulfstream', full: 'Gulfstream Aerospace', details: ' is an American aircraft company and a wholly owned subsidiary of General Dynamics. Gulfstream designs, develops, manufactures, markets, and services business jet aircraft. Gulfstream has produced more than 2,000 aircraft since 1958.' },
    Lockheed: { short: 'Lockheed', full: 'Lockheed Corporation', details: ' was an American aerospace company, founded in 1926 and later merged with Martin Marietta to form Lockheed Martin in 1995. ' },
    Sikorsky: { short: 'Sikorsky', full: 'Sikorsky Aircraft', details: 'is an American aircraft manufacturer based in Stratford, Connecticut. It was established by Russian–American aviator Igor Sikorsky in 1923 and was among the first companies to manufacture helicopters for civilian and military use.' },
    Wright: { short: 'Wright', full: 'Brothers Wright', details: 'brothers Orville and Wilbur' },

    Zeppelin: { short: 'Zeppelin', full: 'Luftschiffbau Zeppelin GmbH ', details: 'a German aircraft manufacturing company. It is perhaps best known for its leading role in the design and manufacture of rigid airships, commonly referred to as Zeppelins due to the company\'s prominence.' },
}

export function shortName(builder: AircraftBuilders): string {
    const key = AircraftBuilders[builder]
    const naming = namings[key]

    return !naming ? `\`${key}` :
        naming.short
}
