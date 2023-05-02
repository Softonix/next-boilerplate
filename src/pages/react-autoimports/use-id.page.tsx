export default function Main () {
  const id = useId()
  return (
    <LayoutHooks>
      <label htmlFor={id} />
      <AntInput type="text" id={id}/>
    </LayoutHooks>
  )
}
