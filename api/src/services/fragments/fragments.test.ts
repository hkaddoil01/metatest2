import {
  fragments,
  fragment,
  createFragment,
  updateFragment,
  deleteFragment,
} from './fragments'
import type { StandardScenario } from './fragments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('fragments', () => {
  scenario('returns all fragments', async (scenario: StandardScenario) => {
    const result = await fragments()

    expect(result.length).toEqual(Object.keys(scenario.fragment).length)
  })

  scenario('returns a single fragment', async (scenario: StandardScenario) => {
    const result = await fragment({ id: scenario.fragment.one.id })

    expect(result).toEqual(scenario.fragment.one)
  })

  scenario('creates a fragment', async () => {
    const result = await createFragment({
      input: { title: 'String', body: 'String', fragmentTime: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.fragmentTime).toEqual('String')
  })

  scenario('updates a fragment', async (scenario: StandardScenario) => {
    const original = await fragment({ id: scenario.fragment.one.id })
    const result = await updateFragment({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a fragment', async (scenario: StandardScenario) => {
    const original = await deleteFragment({ id: scenario.fragment.one.id })
    const result = await fragment({ id: original.id })

    expect(result).toEqual(null)
  })
})
