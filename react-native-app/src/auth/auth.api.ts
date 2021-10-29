import Api from "../apis/api";

export const login = async (formInput: LoginFormInput) => {
  // try {
  const { data } = await Api.post<UserAuthResponse, LoginFormInput>({
    url: "/auth/login",
    data: formInput,
  });
  // } catch (err) {
  //   console.log(JSON.stringify(err));
  //   console.log(err.response);
  //   console.log(err.statusCode);
  // }
  const rest = await Api.get('/collections');
  console.log(rest)
};

export const register = async (registerInput: RegisterFormInput) => {
  console.log(registerInput)
  const { data } = await Api.post<UserAuthResponse, RegisterFormInput>({
    url: "/auth/register",
    data: registerInput,
  });
};

export interface RegisterFormInput {
  email: string;
  name: string;
  surname: string;
  password: string;
}

export interface LoginFormInput {
  email: string;
  password: string;
}

interface UserAuthResponse {
  id: string;
  email: string;
}
