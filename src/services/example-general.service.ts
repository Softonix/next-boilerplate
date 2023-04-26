class ExampleGeneralService {
  getSomeData () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ name: 'test' })
      }, 500)
    })
  }
}

export const exampleGeneralService = new ExampleGeneralService()
