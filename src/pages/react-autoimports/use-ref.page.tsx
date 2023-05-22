export default function UseRefPage () {
  const textAreaEl = useRef<HTMLTextAreaElement>(null)
  const handleBtnClick = () => {
    if (textAreaEl.current) {
      textAreaEl.current.value =
        "The is the story of your life. You are an human being, and you're on a website about React Hooks"
      textAreaEl.current.focus()
    }
  }
  return (
    <LayoutHooks>
      <div>
        <AntButton onClick={handleBtnClick}>
          Focus and Populate Text Field
        </AntButton>
      </div>
      <label
        htmlFor='story'
        style={{
          display: 'block',
          background: 'olive',
          margin: '1em',
          padding: '1em'
        }}
      >
        The Input box below will be focused and populated with some text
        (imperatively) upon clicking the AntButton above.
      </label>
      <textarea ref={textAreaEl} id='story' rows={5} cols={33} />
    </LayoutHooks>
  )
}
