import { tags, tag, createTag, updateTag, deleteTag } from './tags'
import type { StandardScenario } from './tags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tags', () => {
  scenario('returns all tags', async (scenario: StandardScenario) => {
    const result = await tags()

    expect(result.length).toEqual(Object.keys(scenario.tag).length)
  })

  scenario('returns a single tag', async (scenario: StandardScenario) => {
    const result = await tag({ id: scenario.tag.one.id })

    expect(result).toEqual(scenario.tag.one)
  })

  scenario('creates a tag', async () => {
    const result = await createTag({
      input: { type: 'CHARACTER', name: 'String3167033' },
    })

    expect(result.type).toEqual('CHARACTER')
    expect(result.name).toEqual('String3167033')
  })

  scenario('updates a tag', async (scenario: StandardScenario) => {
    const original = await tag({ id: scenario.tag.one.id })
    const result = await updateTag({
      id: original.id,
      input: { type: 'OTHER' },
    })

    expect(result.type).toEqual('OTHER')
  })

  scenario('deletes a tag', async (scenario: StandardScenario) => {
    const original = await deleteTag({ id: scenario.tag.one.id })
    const result = await tag({ id: original.id })

    expect(result).toEqual(null)
  })
})
