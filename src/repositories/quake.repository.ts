import {DefaultCrudRepository} from '@loopback/repository';
import {Quake, QuakeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QuakeRepository extends DefaultCrudRepository<
  Quake,
  typeof Quake.prototype.id,
  QuakeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Quake, dataSource);
  }
}
