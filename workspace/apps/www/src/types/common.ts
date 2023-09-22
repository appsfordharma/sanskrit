import { User as AuthUser } from "firebase/auth";
import { Timestamp } from "firebase/firestore";

import {
  ENUM_ACCOUNT_TYPE,
  ENUM_PERMISSIONS,
  ENUM_PRIVACY,
} from "../constants/enums";
// import { Timestamp } from "firebase/firestore";

export interface TypeUser {
  id: string;
  phoneNumber: string;
  username: string;

  address: string;
  avatar?: string;
  email?: string;

  name?: string;
  description?: string;

  accountType: ENUM_ACCOUNT_TYPE;
  privacy: ENUM_PRIVACY;
  permissions: ENUM_PERMISSIONS[];

  isActive: boolean;
  isEmailVerified: boolean;
  isProfileComplete: boolean;
  isVerified: boolean;

  createdAt: Timestamp | string;
  updatedAt: Timestamp | string;
}

export interface TypeCurrentUser extends TypeUser {
  authUser: AuthUser;
  isSignedIn: boolean;
  isLoading: boolean;
  isLoaded: boolean;
}

export interface TypeCreateUserInput {
  uid: string;
  phoneNumber: string;
  accountType?: ENUM_ACCOUNT_TYPE;
  permissions?: ENUM_PERMISSIONS[];
  privacy?: ENUM_PRIVACY;

  createdAt: Timestamp | string;
  updatedAt: Timestamp | string;
}
