export default function ReactVsVue () {
  const [list, setList] = useState([{ firstName: 'John', lastName: 'Doe' }])
  const [currentUser, setCurrentUser] = useState({ firstName: '', lastName: '' })

  function onSubmitForm () {
    setList([...list, currentUser])
    setCurrentUser({ firstName: '', lastName: '' })

    // Log new list length
    console.log('New list length is:', list.length)
  }

  const [lastUser, setLastUser] = useState('')
  useEffect(() => {
    const lastUser = list.slice(-1)[0]
    setLastUser(`Last user is: ${lastUser.firstName} | ${lastUser.lastName}`)
  }, [list])

  return (
    <>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl">React VS Vue example</h1>
          <hr className="my-2"/>
          <h3 className="mb-4 text-lg">Users list</h3>

          {
            list.map((user, index) => (
              <div key={index}>- { user.firstName } { user.lastName }</div>
            ))
          }
          <div className="text-green-800 font-semibold">{lastUser}</div>

          <hr className="my-2"/>

          {/* Form */}
          <h3 className="mb-4 text-lg">New user form</h3>

          <div className="flex space-x-4">
            <input
              className="border border-gray-400 rounded-sm px-2"
              placeholder="First name"
              value={currentUser.firstName}
              onInput={(e: any) => (setCurrentUser({ firstName: e.target.value, lastName: currentUser.lastName })) }
            />
            <input
              className="border border-gray-400 rounded-sm px-2"
              placeholder="Last name"
              value={currentUser.lastName}
              onInput={(e: any) => (setCurrentUser({ firstName: currentUser.firstName, lastName: e.target.value })) }
            />

            <button onClick={onSubmitForm} disabled={!currentUser.firstName}>Add me</button>
          </div>
        </div>
      </Layout>
    </>
  )
}
