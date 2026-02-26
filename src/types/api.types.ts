export interface BaseResponse {
  status: number;
  success: boolean;
  message: string;
}

export interface MetaResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface MongoResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SuccessResponse<T> extends BaseResponse {
  data?: T;
  meta?: MetaResponse;
}
