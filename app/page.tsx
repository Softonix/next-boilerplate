// import Image from "next/image";

export default function Home () {
  const { isLoading } = trpc
  return (
    <Layout>
      <NextHead>
        <title>Test head({isLoading})</title>
      </NextHead>
      <main className="flex min-h-screen h-full flex-col items-center center p-4/">
        main
      </main>
    </Layout>
  )
}
