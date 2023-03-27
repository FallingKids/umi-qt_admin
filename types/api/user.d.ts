interface LoginByPasswordReq {
  uid: string;
  password: string;
}

interface LoginByPasswordRes {
  token: string;
}

export { LoginByPasswordReq, LoginByPasswordRes };
