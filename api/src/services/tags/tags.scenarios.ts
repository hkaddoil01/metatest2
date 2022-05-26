import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: { data: { type: 'CHARACTER', name: 'String5053678' } },
    two: { data: { type: 'CHARACTER', name: 'String325207' } },
  },
})

export type StandardScenario = typeof standard
