import * as actions from './index'

describe('todo actions', () => {
  it('addptv should return station', () => {
    expect(actions.addptv('Richmond')).toEqual({
      type: 'GET_DATA',
      stop_id: 0,
      stop_type: 'Richmond'
    })
  })
})
