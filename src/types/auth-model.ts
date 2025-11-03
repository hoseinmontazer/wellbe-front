export type LoginPayloadModel = {
  username: string;
  password: string;
};

export type RegisterPayloadModel = {
  username: string;
  email: string;
  password: string;
  re_password: string;
  sex: string;
};

export type AuthResponseModel = {
  _id: string;
  username: string;
  email: string;
  sex: string;
};
