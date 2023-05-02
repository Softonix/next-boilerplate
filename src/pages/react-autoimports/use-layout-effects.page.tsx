export default function Main () {
  const [randomNumber, setRandomNumber] = useState(0)
  const [effectLogs, setEffectLogs] = useState<(number | string)[]>([])

  useLayoutEffect(
    () => {
      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    },
    [randomNumber]
  )

  return (
    <LayoutHooks>
      <h1>{randomNumber}</h1>
      <AntButton
        onClick={() => {
          setRandomNumber(Math.random())
        }}
      >
        Generate random number!
      </AntButton>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'🍔'.repeat(index) + effect}</div>
        ))}
      </div>
    </LayoutHooks>
  )
}
