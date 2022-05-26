import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import * as Filestack from 'filestack-js'

export const mediaFiles = () => {
  return db.mediaFile.findMany()
}

export const mediaFile = ({ id }: Prisma.MediaFileWhereUniqueInput) => {
  return db.mediaFile.findUnique({
    where: { id },
  })
}

interface CreateMediaFileArgs {
  input: Prisma.MediaFileCreateInput
}

export const createMediaFile = ({ input }: CreateMediaFileArgs) => {
  return db.mediaFile.create({
    data: input,
  })
}

interface UpdateMediaFileArgs extends Prisma.MediaFileWhereUniqueInput {
  input: Prisma.MediaFileUpdateInput
}

export const updateMediaFile = ({ id, input }: UpdateMediaFileArgs) => {
  return db.mediaFile.update({
    data: input,
    where: { id },
  })
}

export const deleteMediaFile = async ({ id }: Prisma.MediaFileWhereUniqueInput) => {
  const client = Filestack.init(process.env.REDWOOD_ENV_FILESTACK_API_KEY)

  const mediaFile = await db.mediaFile.findUnique({ where: { id } })

  // The `security.handle` is the unique part of the Filestack file's url.
  const handle = mediaFile.url.split('/').pop()

  const security = Filestack.getSecurity(
    {
      // We set `expiry` at `now() + 5 minutes`.
      expiry: new Date().getTime() + 5 * 60 * 1000,
      handle,
      call: ['remove'],
    },
    process.env.REDWOOD_ENV_FILESTACK_SECRET
  )

  await client.remove(handle, security)

  return db.mediaFile.delete({
    where: { id },
  })
}

export const MediaFile = {
  post: (_obj, { root }: ResolverArgs<ReturnType<typeof mediaFile>>) =>
    db.mediaFile.findUnique({ where: { id: root.id } }).post(),
}
