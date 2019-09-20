import {DefaultCrudRepository} from '@loopback/repository';
import {TsunamiRunup, TsunamiRunupRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TsunamiRunupRepository extends DefaultCrudRepository<
  TsunamiRunup,
  typeof TsunamiRunup.prototype.id,
  TsunamiRunupRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TsunamiRunup, dataSource);
  }
}
