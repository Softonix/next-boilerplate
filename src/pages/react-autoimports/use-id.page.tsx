export default function Main () {
  const id = useId()
  const [uniqueId, setUniqueId] = useState('')
  const handleUniqueId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUniqueId(event.target.value + id)
  }

  return (
    <LayoutHooks>
      <AntInput
        type='text'
        id={id}
        onChange={handleUniqueId}
        placeholder='Enter prefix to your unique id'
      />
      <div>Your unique id with prefix: {uniqueId}</div>
    </LayoutHooks>
  )
}
