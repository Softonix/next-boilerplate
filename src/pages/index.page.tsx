export default function Home () {
  const router = useRouter()
  return <>
    <NextLink href="/example-page">To Example Page</NextLink>

    <AntButton
      type="primary"
      className="ml-4"
      onClick={() => router.push('/example-page')}
    >To ExamplePage</AntButton>
    <AntButton
      type="primary"
      className="ml-4"
      onClick={() => router.push('/react-autoimports')}
    >To ReactHooksPage </AntButton>
  </>
}
