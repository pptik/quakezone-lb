import {Entity, model, property} from '@loopback/repository';

interface GeoPoint {
  type: string;
  coordinates: number[];
}

@model({
  name: 'quake',
  settings: {},
})
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

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
  })
  usgsId?: string;

  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
  })
  usgsName?: string;

  @property({
    type: 'Date',
    required: false,
    jsonSchema: {nullable: true},
  })
  originTime?: Date;

  @property({
    type: 'Date',
    required: false,
    jsonSchema: {nullable: true},
  })
  usgsOriginTime?: Date;

  @property({
    type: 'Date',
    required: false,
    jsonSchema: {nullable: true},
  })
  irisOriginTime?: Date;

  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
  })
  noaaLocation?: string;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  noviantyRuptureDuration?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  noviantyPWaveDominantPeriod?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  noviantyT0xtd?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  noviantyMw?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  mw?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  usgsMw?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  irisMw?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  noaaTsunamiId?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  unknown1?: number;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  usgsDepth?: number;

  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
  })
  collectionName?: string;

  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: true},
  })
  collectionPos?: number;

  /**
   * Epicenter location according to USGS.
   */
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: true},
  })
  usgsEpicenter?: string;

  @property({
    type: 'boolean',
    required: false,
    jsonSchema: {nullable: true},
  })
  noaaTsunami?: boolean;

  constructor(data?: Partial<Quake>) {
    super(data);
  }
}

export interface QuakeRelations {
  // describe navigational properties here
}

export type QuakeWithRelations = Quake & QuakeRelations;
