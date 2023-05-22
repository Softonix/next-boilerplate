export default function UseCallbackPage () {
  const [age, setAge] = useState(99)
  const handleClick = () => setAge(age + 1)
  const someValue = 'someValue'
  const doSomething = useCallback(() => {
    return someValue
  }, [someValue])

  return (
    <LayoutHooks>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </LayoutHooks>
  )
}

const Age = ({ age, handleClick }: {age: number; handleClick: () => void}) => {
  return (
    <div>
      <div>
        Today I am {age} Years of Age
      </div>
      <pre> - click the Button below 👇 </pre>
      <AntButton onClick={handleClick}>Get older! </AntButton>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Instructions = memo(({ doSomething }: {doSomething: () => void}) => {
  return (
    <div style={{ background: 'black', color: 'yellow', padding: '1rem' }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  )
})
