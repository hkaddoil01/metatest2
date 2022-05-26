import {
  mediaFiles,
  mediaFile,
  createMediaFile,
  updateMediaFile,
  deleteMediaFile,
} from './mediaFiles'
import type { StandardScenario } from './mediaFiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('mediaFiles', () => {
  scenario('returns all mediaFiles', async (scenario: StandardScenario) => {
    const result = await mediaFiles()

    expect(result.length).toEqual(Object.keys(scenario.mediaFile).length)
  })

  scenario('returns a single mediaFile', async (scenario: StandardScenario) => {
    const result = await mediaFile({ id: scenario.mediaFile.one.id })

    expect(result).toEqual(scenario.mediaFile.one)
  })

  scenario('creates a mediaFile', async () => {
    const result = await createMediaFile({
      input: { title: 'String', url: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a mediaFile', async (scenario: StandardScenario) => {
    const original = await mediaFile({ id: scenario.mediaFile.one.id })
    const result = await updateMediaFile({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a mediaFile', async (scenario: StandardScenario) => {
    const original = await deleteMediaFile({ id: scenario.mediaFile.one.id })
    const result = await mediaFile({ id: original.id })

    expect(result).toEqual(null)
  })
})
