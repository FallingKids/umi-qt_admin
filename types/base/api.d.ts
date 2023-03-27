interface Resp<T> {
  code: number;
  message: string;
  timestamp: number;
  data: T;
}

export { Resp };
