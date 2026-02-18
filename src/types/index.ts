export interface ParamsProps {
  params: {
    id: string;
  };
}

export interface BaseResponse<T> {
  success: boolean;
  message: string;
  token?: string;
  data: T;
}

export interface MongoResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
