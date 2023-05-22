import { memo, ReactNode } from 'react'

interface ISlowListProps {
  text: string
}

const SlowList = memo(function SlowList ({ text }: ISlowListProps): JSX.Element {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />')

  const items: ReactNode[] = []
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />)
  }

  return (
    <ul className="items">
      {items}
    </ul>
  )
})

interface ISlowItemProps {
  text: string
}

function SlowItem ({ text }: ISlowItemProps): JSX.Element {
  const startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Text: {text}
    </li>
  )
}

export default SlowList
