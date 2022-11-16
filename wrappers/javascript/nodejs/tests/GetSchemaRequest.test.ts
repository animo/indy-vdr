import type { IndyVdrPool } from 'indy-vdr-test-nodejs'

import { SCHEMA_ID, setupPool } from './utils'

import { GetSchemaRequest } from 'indy-vdr-test-nodejs'

describe('GetSchemaRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new GetSchemaRequest({
      schemaId: SCHEMA_ID,
    })

    await expect(pool.submitRequest(request)).resolves.toMatchObject({
      op: 'REPLY',
    })
  })
})
