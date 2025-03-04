export interface ServiceAreaData {
  title: string;
  description: string;
  content: string;
  equipmentNeeded: string[];
  commonProjects: string[];
  postcodes: string[];
  nearbyAreas: string[];
}

export interface ServiceAreasDataMap {
  [key: string]: ServiceAreaData;
}

export const serviceablePostcodes = [
  // Geelong and immediate surrounds
  '3214', // Corio, North Shore, Norlane
  '3215', // Bell Park, Bell Post Hill, Drumcondra, Hamlyn Heights, North Geelong, Rippleside
  '3216', // Belmont, Grovedale, Highton, Marshall, Waurn Ponds
  '3218', // Geelong West, Herne Hill, Manifold Heights, Newtown
  '3219', // Breakwater, East Geelong, Newcomb, St Albans Park, Thomson, Whittington
  '3220', // Geelong, Geelong City Centre, South Geelong
  
  // Northern suburbs and surrounds
  '3212', // Avalon, Lara, Little River, Point Wilson
  '3213', // Anakie, Lovely Banks, Staughton Vale
  
  // Western suburbs and surrounds
  '3211', // Little River
  '3221', // Batesford, Ceres, Fyansford, Moorabool
  '3340', // Balliang
  
  // Southern suburbs and surrounds
  '3217', // Armstrong Creek, Charlemont, Mount Duneed
  
  // Bellarine Peninsula
  '3222', // Clifton Springs, Curlewis, Drysdale, Mannerim, Marcus Hill
  '3223', // Indented Head, Portarlington, St Leonards
  '3224', // Leopold, Moolap
  '3225', // Point Lonsdale, Queenscliff
  '3226', // Ocean Grove, Wallington
  '3227', // Barwon Heads, Breamlea, Connewarre
  
  // Additional postcodes for wider Geelong region
  '3228', // Torquay, Jan Juc
  '3230', // Anglesea
  '3231', // Aireys Inlet
  '3232', // Lorne
  '3240', // Winchelsea
  '3241', // Moriac
  '3321', // Bannockburn
  '3331', // Lethbridge
  '3332', // Meredith
];
