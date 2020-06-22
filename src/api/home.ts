import { request } from './request';

export function getHomeMultidata(): Promise<any> {
  return request({
    url: '/home/multidata',
  });
}

export function getHomeGood(type: string, page: number): Promise<any> {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    },
  });
}
