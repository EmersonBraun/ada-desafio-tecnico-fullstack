export interface HttpResponse {
  statusCode: number
  errorMessage?: any
  body: any
}

export interface HttpRequest {
  headers?: any
  body?: any
  query?: any
  params?: any
}
