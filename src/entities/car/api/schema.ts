export type TCarDetailsRequest = TRequestParameters<'/api/car/{carId}/', 'get'>['path']['carId']
export type TCarDetailsResponse = TResponse<'/api/car/{carId}/', 'get'>['car']