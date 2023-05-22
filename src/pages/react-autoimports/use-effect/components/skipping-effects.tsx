export const SkippingEffects = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [effectLogs, setEffectLogs] = useState<(string | number)[]>([])

  useEffect(
    () => {
      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    },
    []
  )

  return (
    <div>
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
    </div>
  )
}
