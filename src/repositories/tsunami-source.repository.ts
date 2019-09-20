import {DefaultCrudRepository} from '@loopback/repository';
import {TsunamiSource, TsunamiSourceRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TsunamiSourceRepository extends DefaultCrudRepository<
  TsunamiSource,
  typeof TsunamiSource.prototype.id,
  TsunamiSourceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TsunamiSource, dataSource);
  }
}
