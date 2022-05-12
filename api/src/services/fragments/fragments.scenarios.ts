import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FragmentCreateArgs>({
  fragment: {
    one: { data: { title: 'String', body: 'String', fragmentTime: 'String' } },
    two: { data: { title: 'String', body: 'String', fragmentTime: 'String' } },
  },
})

export type StandardScenario = typeof standard
