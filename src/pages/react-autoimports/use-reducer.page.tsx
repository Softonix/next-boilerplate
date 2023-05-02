const initialState = { width: 15 }

const reducer = (state: {width: number}, action : ('plus' | 'minus')) => {
  switch (action) {
  case 'plus':
    return { width: state.width + 15 }
  case 'minus':
    return { width: Math.max(state.width - 15, 2) }
  default:
    throw new Error("what's going on?")
  }
}

export default function Main () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <LayoutHooks>
    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{ marginTop: '3rem' }}>
      <AntButton onClick={() => dispatch('plus')}>Increase bar size</AntButton>
      <AntButton onClick={() => dispatch('minus')}>Decrease bar size</AntButton>
    </div>
  </LayoutHooks>
}
