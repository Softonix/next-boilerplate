type TApiPaths = import('./v1').paths

type TPathKeys = keyof TApiPaths

type TPathMethods<Path extends TPathKeys> = keyof TApiPaths[Path]

type TResponse<
  Path extends TPathKeys,
  Method extends TPathMethods<Path>,
> = TApiPaths[Path][Method]['responses']['200']['content']['application/json']

type TRequestParameters<
  Path extends TPathKeys,
  Method extends TPathMethods<Path>,
> = TApiPaths[Path][Method]['parameters']

type TRequestBody<Path extends TPathKeys, Method extends TPathMethods<Path>> = Required<
  TApiPaths[Path][Method]
>['requestBody']['content']['application/json']
