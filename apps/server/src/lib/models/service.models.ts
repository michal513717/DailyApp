import { AuthServices } from "../services/auth.services";
import { TokenServices } from "../services/token.services";

export type Services = {
  AUTH_SERVICES: AuthServices;
  TOKEN_SERVICES: TokenServices;
};

export type Service = AuthServices | TokenServices | null;