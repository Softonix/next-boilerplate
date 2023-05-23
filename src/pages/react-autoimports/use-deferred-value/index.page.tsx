import SlowList from './components/SlowText'

export default function useDeferredValuePage () {
  const [text, setText] = useState<string>('')
  const deferredText = useDeferredValue<string>(text)

  return (
    <LayoutHooks>
      <AntInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='type fast'
      />
      <SlowList text={deferredText} />
    </LayoutHooks>
  )
}
