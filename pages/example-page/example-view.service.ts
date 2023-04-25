class ExampleViewService {
  getSomeData (): Promise<IExampleInterface> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          body: 'asdf',
          id: 1,
          title: 'test',
          userId: 12
        })
      }, 500)
    })
  }
}

export const exampleViewService = new ExampleViewService()
