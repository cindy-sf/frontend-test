export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type BackendApiResponse<T> = Partial<{
  status: number
  error: string | null
  data: T
}>
