import type { GetValidatorInfoResponse, IndyVdrPool } from 'indy-vdr-test-nodejs'

import { DID, setupPool } from './utils'

import { GetValidatorInfoAction } from 'indy-vdr-test-nodejs'

describe('GetValidatorInfoAction', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit action', async () => {
    const action = new GetValidatorInfoAction({ submitterDid: DID })
    const response: GetValidatorInfoResponse = await pool.submitAction(action)

    expect(response).toMatchObject({})
  })
})
