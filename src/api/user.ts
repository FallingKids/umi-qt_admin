import * as UserApiType from '@/../types/api/user';
import request from '@/utils/axios';
import { Resp } from 'types/base/api';

const loginByPassword = async (
  params: UserApiType.LoginByPasswordReq,
): Promise<Resp<UserApiType.LoginByPasswordRes>> => {
  return await request.post(`/business/user/loginByPassword`, params);
};

export { loginByPassword };
