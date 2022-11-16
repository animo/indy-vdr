import type { IndyVdrPool } from 'indy-vdr-test-nodejs'

import { setupPool } from './utils'

import { GetTransactionAuthorAgreementRequest } from 'indy-vdr-test-nodejs'

describe('GetTransactionAuthorAgreementRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new GetTransactionAuthorAgreementRequest({})

    await expect(pool.submitRequest(request)).resolves.toMatchObject({
      op: 'REPLY',
    })
  })
})
