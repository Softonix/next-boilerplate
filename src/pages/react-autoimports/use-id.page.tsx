export default function Main () {
  const id = useId()
  return (
    <CustomLayout>
      <label htmlFor={id} />
      <AntInput type="text" id={id}/>
    </CustomLayout>
  )
}
