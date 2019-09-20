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
import {TsunamiRunup} from '../models';
import {TsunamiRunupRepository} from '../repositories';

export class TsunamiRunupController {
  constructor(
    @repository(TsunamiRunupRepository)
    public tsunamiRunupRepository: TsunamiRunupRepository,
  ) {}

  @post('/tsunami-runups', {
    responses: {
      '200': {
        description: 'TsunamiRunup model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(TsunamiRunup)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TsunamiRunup, {
            title: 'NewTsunamiRunup',
            // exclude: ['id'], // BUG
          }),
        },
      },
    })
    tsunamiRunup: Omit<TsunamiRunup, 'id'>,
  ): Promise<TsunamiRunup> {
    return this.tsunamiRunupRepository.create(tsunamiRunup);
  }

  @get('/tsunami-runups/count', {
    responses: {
      '200': {
        description: 'TsunamiRunup model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TsunamiRunup))
    where?: Where<TsunamiRunup>,
  ): Promise<Count> {
    return this.tsunamiRunupRepository.count(where);
  }

  @get('/tsunami-runups', {
    responses: {
      '200': {
        description: 'Array of TsunamiRunup model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TsunamiRunup)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TsunamiRunup))
    filter?: Filter<TsunamiRunup>,
  ): Promise<TsunamiRunup[]> {
    return this.tsunamiRunupRepository.find(filter);
  }

  @patch('/tsunami-runups', {
    responses: {
      '200': {
        description: 'TsunamiRunup PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TsunamiRunup, {partial: true}),
        },
      },
    })
    tsunamiRunup: TsunamiRunup,
    @param.query.object('where', getWhereSchemaFor(TsunamiRunup))
    where?: Where<TsunamiRunup>,
  ): Promise<Count> {
    return this.tsunamiRunupRepository.updateAll(tsunamiRunup, where);
  }

  @get('/tsunami-runups/{id}', {
    responses: {
      '200': {
        description: 'TsunamiRunup model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(TsunamiRunup)},
        },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<TsunamiRunup> {
    return this.tsunamiRunupRepository.findById(id);
  }

  @patch('/tsunami-runups/{id}', {
    responses: {
      '204': {
        description: 'TsunamiRunup PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TsunamiRunup, {partial: true}),
        },
      },
    })
    tsunamiRunup: TsunamiRunup,
  ): Promise<void> {
    await this.tsunamiRunupRepository.updateById(id, tsunamiRunup);
  }

  @put('/tsunami-runups/{id}', {
    responses: {
      '204': {
        description: 'TsunamiRunup PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tsunamiRunup: TsunamiRunup,
  ): Promise<void> {
    await this.tsunamiRunupRepository.replaceById(id, tsunamiRunup);
  }

  @del('/tsunami-runups/{id}', {
    responses: {
      '204': {
        description: 'TsunamiRunup DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tsunamiRunupRepository.deleteById(id);
  }
}
