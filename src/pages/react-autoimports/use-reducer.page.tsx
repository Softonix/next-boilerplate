const initialState = { width: 15 }

const reducer = (
  state: { width: number },
  action: { type: 'plus' | 'minus' }
) => {
  switch (action.type) {
  case 'plus':
    return { ...state, width: state.width + 15 }
  case 'minus':
    return { ...state, width: Math.max(state.width - 15, 2) }
  default:
    throw new Error("what's going on?")
  }
}

export default function UseReducerPage () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LayoutHooks>
      <div
        style={{ background: 'teal', height: '30px', width: state.width }}
      ></div>
      <div style={{ marginTop: '3rem' }}>
        <AntButton onClick={() => dispatch({ type: 'plus' })}>
          Increase bar size
        </AntButton>
        <AntButton onClick={() => dispatch({ type: 'minus' })}>
          Decrease bar size
        </AntButton>
      </div>
    </LayoutHooks>
  )
}
