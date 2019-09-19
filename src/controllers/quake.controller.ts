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
import {Quake} from '../models';
import {QuakeRepository} from '../repositories';

export class QuakeController {
  constructor(
    @repository(QuakeRepository)
    public quakeRepository: QuakeRepository,
  ) {}

  @post('/quakes', {
    responses: {
      '200': {
        description: 'Quake model instance',
        content: {'application/json': {schema: getModelSchemaRef(Quake)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quake, {
            title: 'NewQuake',
            // https://github.com/IBM/openapi-to-graphql/issues/197#issuecomment-530234909
            // exclude: ['id'],
          }),
        },
      },
    })
    quake: Omit<Quake, 'id'>,
  ): Promise<Quake> {
    return this.quakeRepository.create(quake);
  }

  @get('/quakes/count', {
    responses: {
      '200': {
        description: 'Quake model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Quake)) where?: Where<Quake>,
  ): Promise<Count> {
    return this.quakeRepository.count(where);
  }

  @get('/quakes', {
    responses: {
      '200': {
        description: 'Array of Quake model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Quake)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Quake))
    filter?: Filter<Quake>,
  ): Promise<Quake[]> {
    return this.quakeRepository.find(filter);
  }

  @patch('/quakes', {
    responses: {
      '200': {
        description: 'Quake PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quake, {partial: true}),
        },
      },
    })
    quake: Quake,
    @param.query.object('where', getWhereSchemaFor(Quake)) where?: Where<Quake>,
  ): Promise<Count> {
    return this.quakeRepository.updateAll(quake, where);
  }

  @get('/quakes/{id}', {
    responses: {
      '200': {
        description: 'Quake model instance',
        content: {'application/json': {schema: getModelSchemaRef(Quake)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Quake> {
    return this.quakeRepository.findById(id);
  }

  @patch('/quakes/{id}', {
    responses: {
      '204': {
        description: 'Quake PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quake, {partial: true}),
        },
      },
    })
    quake: Quake,
  ): Promise<void> {
    await this.quakeRepository.updateById(id, quake);
  }

  @put('/quakes/{id}', {
    responses: {
      '204': {
        description: 'Quake PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() quake: Quake,
  ): Promise<void> {
    await this.quakeRepository.replaceById(id, quake);
  }

  @del('/quakes/{id}', {
    responses: {
      '204': {
        description: 'Quake DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quakeRepository.deleteById(id);
  }
}
