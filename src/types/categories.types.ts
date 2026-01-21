import { BaseResponse } from '@/types';

export interface Category extends BaseResponse {
  name: string;
  description: string;
  imageUrl: string;
}
