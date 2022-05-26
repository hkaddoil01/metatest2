import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String', author: 'String', body: 'String' } },
    two: { data: { title: 'String', author: 'String', body: 'String' } },
  },
})

export type StandardScenario = typeof standard
