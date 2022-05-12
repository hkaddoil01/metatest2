import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const fragments = () => {
  return db.fragment.findMany()
}

export const fragment = ({ id }: Prisma.FragmentWhereUniqueInput) => {
  return db.fragment.findUnique({
    where: { id },
  })
}

interface CreateFragmentArgs {
  input: Prisma.FragmentCreateInput
}

export const createFragment = ({ input }: CreateFragmentArgs) => {
  return db.fragment.create({
    data: input,
  })
}

interface UpdateFragmentArgs extends Prisma.FragmentWhereUniqueInput {
  input: Prisma.FragmentUpdateInput
}

export const updateFragment = ({ id, input }: UpdateFragmentArgs) => {
  return db.fragment.update({
    data: input,
    where: { id },
  })
}

export const deleteFragment = ({ id }: Prisma.FragmentWhereUniqueInput) => {
  return db.fragment.delete({
    where: { id },
  })
}

export const Fragment = {
  attachments: (_obj, { root }: ResolverArgs<ReturnType<typeof fragment>>) =>
    db.fragment.findUnique({ where: { id: root.id } }).attachments(),
}
