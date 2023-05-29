export default function Home () {
  return (
    <>
      <Layout>
        <NextHead>
          <title>test head</title>
        </NextHead>
      </Layout>
    </>
  )
}

export function getServerSideProps () {
  return {
    redirect: { destination: '/example-page' }
  }
}
