import service from '@/utils/request';

export async function getCode() {
  return service({
    url: '/api/test',
    method: 'GET',
  })
}

