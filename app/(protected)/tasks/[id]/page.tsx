import { Metadata } from 'next'

type TParams = {
  params: {id: string}
}

export async function generateMetadata (
  { params }: TParams
): Promise<Metadata> {
  const id = params.id

  const task = /* await trpc.getTask(id) */ {
    name: id
  }

  return {
    title: `Task ${task.name}`
  }
}

export default function Tasks ({ params }: TParams) {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-4'>Tasks {params.id}</h1>
    </div>
  )
}
