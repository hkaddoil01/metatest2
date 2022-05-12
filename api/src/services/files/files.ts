import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const files = () => {
  return db.file.findMany()
}

export const file = ({ id }: Prisma.FileWhereUniqueInput) => {
  return db.file.findUnique({
    where: { id },
  })
}

interface CreateFileArgs {
  input: Prisma.FileCreateInput
}

export const createFile = ({ input }: CreateFileArgs) => {
  return db.file.create({
    data: input,
  })
}

interface UpdateFileArgs extends Prisma.FileWhereUniqueInput {
  input: Prisma.FileUpdateInput
}

export const updateFile = ({ id, input }: UpdateFileArgs) => {
  return db.file.update({
    data: input,
    where: { id },
  })
}

export const deleteFile = ({ id }: Prisma.FileWhereUniqueInput) => {
  return db.file.delete({
    where: { id },
  })
}

export const File = {
  fragment: (_obj, { root }: ResolverArgs<ReturnType<typeof file>>) =>
    db.file.findUnique({ where: { id: root.id } }).fragment(),
}
