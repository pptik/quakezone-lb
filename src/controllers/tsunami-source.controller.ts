import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {TsunamiSource} from '../models';
import {TsunamiSourceRepository} from '../repositories';

export class TsunamiSourceController {
  constructor(
    @repository(TsunamiSourceRepository)
    public tsunamiSourceRepository: TsunamiSourceRepository,
  ) {}

  @post('/tsunami-sources', {
    responses: {
      '200': {
        description: 'TsunamiSource model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(TsunamiSource)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TsunamiSource, {
            title: 'NewTsunamiSource',
            // exclude: ['id'], // FIXME: graphql BUG
          }),
        },
      },
    })
    tsunamiSource: Omit<TsunamiSource, 'id'>,
  ): Promise<TsunamiSource> {
    return this.tsunamiSourceRepository.create(tsunamiSource);
  }

  @get('/tsunami-sources/count', {
    responses: {
      '200': {
        description: 'TsunamiSource model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TsunamiSource))
    where?: Where<TsunamiSource>,
  ): Promise<Count> {
    return this.tsunamiSourceRepository.count(where);
  }

  @get('/tsunami-sources', {
    responses: {
      '200': {
        description: 'Array of TsunamiSource model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TsunamiSource)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TsunamiSource))
    filter?: Filter<TsunamiSource>,
  ): Promise<TsunamiSource[]> {
    return this.tsunamiSourceRepository.find(filter);
  }

  @patch('/tsunami-sources', {
    responses: {
      '200': {
        description: 'TsunamiSource PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TsunamiSource, {partial: true}),
        },
      },
    })
    tsunamiSource: TsunamiSource,
    @param.query.object('where', getWhereSchemaFor(TsunamiSource))
    where?: Where<TsunamiSource>,
  ): Promise<Count> {
    return this.tsunamiSourceRepository.updateAll(tsunamiSource, where);
  }

  @get('/tsunami-sources/{id}', {
    responses: {
      '200': {
        description: 'TsunamiSource model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(TsunamiSource)},
        },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<TsunamiSource> {
    return this.tsunamiSourceRepository.findById(id);
  }

  @patch('/tsunami-sources/{id}', {
    responses: {
      '204': {
        description: 'TsunamiSource PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TsunamiSource, {partial: true}),
        },
      },
    })
    tsunamiSource: TsunamiSource,
  ): Promise<void> {
    await this.tsunamiSourceRepository.updateById(id, tsunamiSource);
  }

  @put('/tsunami-sources/{id}', {
    responses: {
      '204': {
        description: 'TsunamiSource PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tsunamiSource: TsunamiSource,
  ): Promise<void> {
    await this.tsunamiSourceRepository.replaceById(id, tsunamiSource);
  }

  @del('/tsunami-sources/{id}', {
    responses: {
      '204': {
        description: 'TsunamiSource DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tsunamiSourceRepository.deleteById(id);
  }
}
