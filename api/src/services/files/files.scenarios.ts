import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FileCreateArgs>({
  file: {
    one: { data: { url: 'String', filetype: 'String' } },
    two: { data: { url: 'String', filetype: 'String' } },
  },
})

export type StandardScenario = typeof standard
