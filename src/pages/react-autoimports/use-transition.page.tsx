export default function Main () {
  const [isPending, startTransition] = useTransition()
  const [textInput, setTextInput] = useState('')
  const [listItems, setListItems] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value)
    const list: string[] = []
    startTransition(() => {
      for (let i = 0; i < 10000; i++) {
        list.push(e.target.value)
      }
      setListItems(list)
    })
  }
  return (
    <LayoutHooks>
      <AntInput type="text" value={textInput} onChange={handleChange} />
      {isPending
        ? 'Loading'
        : listItems.map((item, ind) => {
          return <p key={ind}>{item}</p>
        })}
    </LayoutHooks>
  )
}
