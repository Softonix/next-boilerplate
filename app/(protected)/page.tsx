import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test head'
}

export default function Home () {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-4'>Main</h1>
    </div>
  )
}
