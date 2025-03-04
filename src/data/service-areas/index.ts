import { ServiceAreasDataMap } from './types';
import { areaDataAB } from './a-b';
import { areaDataCD } from './c-d';
import { areaDataEG } from './e-g';
import { areaDataHL } from './h-l';

// Combine all service area data into a single object
export const serviceAreasData: ServiceAreasDataMap = {
  ...areaDataAB,
  ...areaDataCD,
  ...areaDataEG,
  ...areaDataHL,
};

// Re-export types and constants
export * from './types';
