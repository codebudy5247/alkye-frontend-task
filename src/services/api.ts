import axios, { AxiosInstance, AxiosResponse } from "axios";

export class Api {
  protected readonly instance: AxiosInstance;

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  // public async login(
  //   username: string,
  //   password: string
  // ): Promise<AxiosResponse | null> {
  //   try {
  //     const response = await this.instance.post("/api/login/", {
  //       username,
  //       password,
  //     });
  //     return response;
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     return null;
  //   }
  // }

  public async getArcticle(token: string): Promise<AxiosResponse | null> {
    try {
      const response = await this.instance.get("/api/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error("getArcticle failed:", error);
      return null;
    }
  }

  public async customerLogin(token: string): Promise<AxiosResponse | null> {
    try {
      const response = await this.instance.get("/api/customer-list/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error("customerLogin failed:", error);
      return null;
    }
  }
}
