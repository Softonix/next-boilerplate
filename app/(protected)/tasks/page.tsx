import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tasks'
}

export default function Tasks () {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-4'>Tasks</h1>
    </div>
  )
}
