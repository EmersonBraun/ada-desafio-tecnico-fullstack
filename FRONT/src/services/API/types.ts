export interface Headers {
  Accept: string;
  "Content-Type": "application/json" | "multipart/form-data";
  Authorization: string | null;
}

type Error = {
  path: string;
  message: string;
};

interface Info {
  statusCode: number;
  returnType: "success" | "error";
  message: string;
  contentError: any;
}

export interface IResponse {
  statusCode: number;
  data: any;
  info: Info;
  ok: boolean;
  messageErrors?: Error[];
}

export interface ReponseData {
  statusCode: number;
  info: Info;
  ok: boolean;
  messageErrors?: Error[];
}

export interface Options {
  silent?: boolean;
  debug?: boolean;
}

export interface IRequest {
  silent?: boolean;
  file?: boolean;
  msg?: string;
  debug?: boolean;
  noRedirect?: boolean;
}
