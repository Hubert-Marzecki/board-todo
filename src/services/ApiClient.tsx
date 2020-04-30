import axios, { AxiosResponse } from "axios";

export const BACKEND_URL = "https://aqueous-coast-23804.herokuapp.com";

export type ResultSuccess<T> = { type: "SUCCESS"; value: T  };
export type ResultFailure = { type: "FAILURE"; cause: string };
export type Result<T> = ResultSuccess<T> | ResultFailure;

export function registerUser(userRequest: {
  username: string;
  email: string;
  password: string;
}): Promise<Result<undefined>> {
  return axios
    .post<void>(BACKEND_URL + "/api/auth/register", userRequest)
    .then<Result<undefined>>((response) => {
      if (response.status === 200) {
        return { type: "SUCCESS", value: undefined};
      }
      return { type: "FAILURE", cause: "" };
    });
}

// promise tego ze kiedys dostaniemy result operacji
// jezeli ta operacja sie udala. to bedzie zawierac jakas wartosc
// jezeli nie -> to result bedzie FAILURE
export function postApiRequest<B, R>(body: B, url: string) : Promise<Result<R>> {
  return axios.post<R>(BACKEND_URL + url , body).then<Result<R>>((response: AxiosResponse<R>) => {
    if (response.status === 201) {
      return {type: "SUCCESS", value: response.data }
    }
    console.error(response);
    return { type: "FAILURE", cause: "does not work"}
  })
}

// export function loginUser()

// export function getFromUrl<T>(url: string): Promise<T> {
//   return axios.get<T>(url).then((response: AxiosResponse<T>) => {
//     return response.data;
//   });
// }
