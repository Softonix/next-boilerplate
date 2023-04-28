export const BasicEffect = () => {
  const [age, setAge] = useState(0)
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = 'You are ' + age + ' years old!'
  })

  return <div>
    <p> Look at the title of the current tab in your browser </p>
    <AntButton onClick={handleClick}>Update Title!! </AntButton>
  </div>
}
