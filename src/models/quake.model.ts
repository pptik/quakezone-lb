import {Entity, model, property} from '@loopback/repository';

interface GeoPoint {
  type: string;
  coordinates: number[];
}

/**
 * Quake
 */
@model({name: 'quake', settings: {}})
export class Quake extends Entity {
  /**
   * ID as MongoDB ObjectId
   */
  @property({
    id: true,
    type: 'string',
    description: 'ID as MongoDB ObjectId',
  })
  id?: string;

  /**
   *
   */
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  /**
   * USGS ID
   */
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
    title: 'USGS ID',
  })
  usgsId?: string;

  /**
   * USGS name
   */
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
    title: 'USGS name',
  })
  usgsName?: string;

  /**
   * Origin time
   */
  @property({
    type: 'Date',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Origin time',
  })
  originTime?: Date;

  /**
   * Origin time (USGS)
   */
  @property({
    type: 'Date',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Origin time (USGS)',
  })
  usgsOriginTime?: Date;

  /**
   * Origin time (IRIS)
   */
  @property({
    type: 'Date',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Origin time (IRIS)',
  })
  irisOriginTime?: Date;

  /**
   * Location (NOAA)
   */
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Location (NOAA)',
  })
  noaaLocation?: string;

  /**
   * Rupture duration (Novianty)
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Rupture duration (Novianty)',
  })
  noviantyRuptureDuration?: number;

  /**
   * P-wave dominant period (Novianty)
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'P-wave dominant period (Novianty)',
  })
  noviantyPWaveDominantPeriod?: number;

  /**
   * T0 × Td (Novianty)
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'T0 × Td (Novianty)',
  })
  noviantyT0xtd?: number;

  /**
   * Mw (Novianty)
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Mw (Novianty)',
  })
  noviantyMw?: number;

  /**
   * Mw
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Mw',
  })
  mw?: number;

  /**
   * Mw (USGS)
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Mw (USGS)',
  })
  usgsMw?: number;

  /**
   * Mw (IRIS)
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Mw (IRIS)',
  })
  irisMw?: number;

  /**
   * Tsunami potential (NOAA)
   */
  @property({
    type: 'boolean',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Tsunami potential (NOAA)',
  })
  noaaTsunami?: boolean;

  /**
   * NOAA tsunami event ID
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'NOAA tsunami event ID',
  })
  noaaTsunamiEventId?: number;

  /**
   * Unknown 1
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Unknown 1',
  })
  unknown1?: number;

  /**
   * Depth (USGS)
   *
   * Depth in kilometers.
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Depth (USGS)',
    description: 'Depth in kilometers.',
  })
  usgsDepth?: number;

  /**
   * Collection name
   */
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Collection name',
  })
  collectionName?: string;

  /**
   * Collection pos
   */
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Collection pos',
  })
  collectionPos?: number;

  /**
   * Epicenter (USGS)
   */
  @property({
    type: 'object',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Epicenter (USGS)',
  })
  usgsEpicenter?: GeoPoint;

  /**
   * Tsunami source ID
   *
   * Tsunami source ID in QuakeZone database.
   */
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
    title: 'Tsunami source ID',
    description: 'Tsunami source ID in QuakeZone database.',
  })
  tsunamiSourceId?: string;

  constructor(data?: Partial<Quake>) {
    super(data);
  }
}

export interface QuakeRelations {
  // describe navigational properties here
}

export type QuakeWithRelations = Quake & QuakeRelations;
