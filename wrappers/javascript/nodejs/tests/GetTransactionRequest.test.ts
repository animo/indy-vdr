import type { IndyVdrPool } from 'indy-vdr-test-nodejs'

import { setupPool } from './utils'

import { GetTransactionRequest } from 'indy-vdr-test-nodejs'

describe('GetTransactionRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new GetTransactionRequest({ ledgerType: 1, seqNo: 1 })

    await expect(pool.submitRequest(request)).resolves.toMatchObject({
      op: 'REPLY',
    })
  })
})
