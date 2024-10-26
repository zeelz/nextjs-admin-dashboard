import { enumColors } from "./eums";

export type UserData = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  verified?: boolean;
  created_at?: string;
  avatar?: string;
  location?: string;
  gender?: string;
  fcm_token?: string;
  role: string;
};
