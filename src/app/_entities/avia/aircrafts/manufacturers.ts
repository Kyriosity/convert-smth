import { entityNaming as naming } from './entities'

export enum AircraftBuilders {
    AeroSpacelines,
    Aerospatiale,
    Airbus,
    Antonov,
    ATR,
    Beechcraft,
    Boeing,
    Bombardier,
    BAC,
    Cessna,
    Convair,
    Dassault,
    deHavilland,
    Douglas,
    Embraer,
    Fokker,
    Gulfstream,
    HawkerSiddeley,
    Lockheed,
    Mitsubishi,
    Sikorsky,
    SudAviation,
    Wright,
    Zeppelin,
}

const namings: { [id in keyof typeof AircraftBuilders]?: naming; } = {
    AeroSpacelines: { short: 'Aero Spacelines', full: 'Aero Spacelines Incorporated', details: 'an American manufacturer from 1960 to 1968 which made a name for itself by converting Boeing 377 Stratocruisers into the famous Guppy line of airplanes' },
    Aerospatiale: { short: 'Aérospatiale', details: 'was a French state-owned aerospace manufacturer that built both civilian and military aircraft, rockets and satellites. It was originally known as Société nationale industrielle aérospatiale (SNIAS).' },
    Airbus: { short: 'Airbus', full: 'Societas Europaea (SE)' },
    Antonov: { short: 'Antonov' },
    ATR: { short: 'ATR', full: 'Aerei da Trasporto Regionale or Avions de transport régional', details: ' a joint venture formed by French aerospace company Aérospatiale (now Airbus) and Italian aviation conglomerate Aeritalia (now Leonardo S.p.A.)' },
    Beechcraft: {short: 'Beechcraft', details: 'is a brand of Textron Aviation[1] since 2014. Originally, it was a brand of Beech Aircraft Corporation, an American manufacturer'},
    Boeing: { short: 'Boeing', full: 'The Boeign Company' },
    Bombardier: { short: 'Bombardier', full: 'Bombardier Inc.', details: ' a Canadian multinational manufacturer of business jets and rail. It was also formerly a manufacturer of public transport, commercial jets and vehicles (Bombardier transportation is planned to be divested but not yet approved). Its Bombardier Aviation division is headquartered in Montreal, and Bombardier Transportation in Berlin, Germany.' },
    BAC: { short: 'BAC', full: 'British Aircraft Corporation' },
    Cessna: { short: 'Cessna', full: 'Cessna  Aircraft Company ', details: 'was an American general aviation aircraft manufacturing corporation headquartered in Wichita, Kansas. Cessna produced small, piston-powered aircraft, as well as business jets. For many years the company was one of the highest-volume producers of general aviation aircraft in the world. The company was founded in 1927. ' },
    Convair: { short: 'Convair', details: 'was an American aircraft manufacturing company that later expanded into rockets and spacecraft. The company was formed in 1943 by the merger of Consolidated Aircraft and Vultee Aircraft.'},
    Dassault: { short: 'Dassault', full: 'Dassault Aviation SA', details: 'an international French aircraft manufacturer of military and business jets, and is a subsidiary of Dassault Group. It was founded in 1929 by Marcel Bloch as Société des Avions Marcel Bloch or "MB".'},
    deHavilland: { short: 'de Havilland', full: '', details: ' was a British aviation manufacturer established in late 1920 by Geoffrey de Havilland. Known for its innovation, de Havilland was responsible for a number of important aircraft, including the Moth biplane which revolutionised general aviation in the 1920s.'},
    Douglas: { short: 'Douglas', full: 'Douglas Aircraft Company' },
    Embraer: { short: 'Embraer', full: 'Embraer Sociedade Anônima', details: 'is a Brazilian aerospace conglomerate that produces commercial, military, executive and agricultural aircraft[6] and provides aeronautical services. It was founded in 1969 in São José dos Campos, São Paulo, where its headquarters are located. The company is the third largest producer of civil aircraft, after Boeing and Airbus.' },
    Fokker: { short: 'Fokker' },
    Gulfstream: { short: 'Gulfstream', full: 'Gulfstream Aerospace', details: ' is an American aircraft company and a wholly owned subsidiary of General Dynamics. Gulfstream designs, develops, manufactures, markets, and services business jet aircraft. Gulfstream has produced more than 2,000 aircraft since 1958.' },
    HawkerSiddeley: { short: 'Hawker Siddeley', full: 'Hawker Siddeley Group Limited', details: 'as a group of British manufacturing companies engaged in aircraft production. Hawker Siddeley combined the legacies of several British aircraft manufacturers, emerging through a series of mergers and acquisitions as one of only two such major British companies in the 1960s. In 1977, Hawker Siddeley became a founding component of the nationalised British Aerospace (BAe).' }, 
    Lockheed: { short: 'Lockheed', full: 'Lockheed Corporation', details: ' was an American aerospace company, founded in 1926 and later merged with Martin Marietta to form Lockheed Martin in 1995. ' },
    Mitsubishi: { short: 'Mitsubishi', full: 'Mitsubishi Heavy Industries, Ltd.', details: 'Japanese multinational engineering, electrical equipment and electronics company headquartered in Tokyo.' },
    Sikorsky: { short: 'Sikorsky', full: 'Sikorsky Aircraft', details: 'is an American aircraft manufacturer based in Stratford, Connecticut. Established by american aviator Igor Sikorsky in 1923 and was among the first companies to manufacture helicopters for civilian and military use.' },
    SudAviation: { short: 'Sud Aviation', details: 'was a French state-owned aircraft manufacturer, originating from the merger of Sud-Est and Sud-Ouest. The company became a major manufactuter of helicopters, designing and producing several types which went on to be built in large numbers.'},
    Wright: { short: 'Wright', full: 'Brothers Wright', details: 'brothers Orville and Wilbur' },

    Zeppelin: { short: 'Zeppelin', full: 'Luftschiffbau Zeppelin GmbH ', details: 'a German aircraft manufacturing company. It is perhaps best known for its leading role in the design and manufacture of rigid airships, commonly referred to as Zeppelins due to the company\'s prominence.' },
}

export function shortName(builder: AircraftBuilders): string {
    const key = AircraftBuilders[builder]
    const naming = namings[key]

    return !naming ? `\`${key}` :
        naming.short
}
