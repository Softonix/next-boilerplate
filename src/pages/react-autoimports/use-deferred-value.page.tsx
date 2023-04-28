import { ChangeEvent } from 'react'

export default function Main () {
  const [searchQuery, setSearchQuery] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [searchResults, setSearchResults] = useState<{id: string; title: string}[]>([])

  const deferredSearchQuery = useDeferredValue(searchQuery)

  useEffect(() => {
    // Fetch search results using deferredSearchQuery
    // Update setSearchResults with the new results
  }, [deferredSearchQuery])

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <CustomLayout>
      <AntInput type="text" value={searchQuery} onChange={handleSearchInputChange} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </CustomLayout>
  )
}
