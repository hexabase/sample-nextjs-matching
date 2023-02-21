import {
  TAddUser,
  TConfirmRegistration,
  TGetUserInfo,
  TInputCreateItem,
  TInputRegisterUser,
  TRegisterUser,
  TUserInvite,
} from '../types';
import { ApiError, ApiResponse, createAxiosInstance } from './axios';
import { getCookie } from 'cookies-next';

const axiosInstance = createAxiosInstance();

export const addUser = async (
  email: string
): Promise<ApiResponse<TAddUser>> => {
  try {
    const response = await axiosInstance.post<TAddUser>(
      '/users',
      {
        email: email,
        g_id: '63e0972d8278e0b8462cf3ba',
        w_id: '63e093c42fdd258450406e09',
      },
      {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_TOKEN_API}`,
        },
      }
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Unknown error');
  }
};

export const userInvite = async (
  email: string
): Promise<ApiResponse<TUserInvite[]>> => {
  try {
    const response = await axiosInstance.post<TUserInvite[]>(
      '/userinvite',
      {
        users: [
          {
            email: email,
          },
        ],
        domain: `${process.env.NEXT_PUBLIC_DOMAIN}`,
        sender_address: `${process.env.NEXT_PUBLIC_SENDER_ADDRESS}`,
        invitation_path: `${process.env.NEXT_PUBLIC_INVITATION_PATH}`,
      },
      {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_TOKEN_API}`,
        },
      }
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Unknown error');
  }
};

export const confirmRegistration = async (
  id: string
): Promise<ApiResponse<TConfirmRegistration>> => {
  try {
    const response = await axiosInstance.get<TConfirmRegistration>(
      `/users/registration/confirm?id=${id}`
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Unknown error');
  }
};

export const registerUser = async ({
  confirmation_id,
  email,
  username,
  password,
  workspace,
}: TInputRegisterUser): Promise<ApiResponse<TRegisterUser>> => {
  try {
    const response = await axiosInstance.post<TRegisterUser>(
      '/users/registration/confirm',
      {
        confirmation_id,
        email,
        username,
        password,
        workspace,
      }
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Unknown error');
  }
};

export const getUserInfo = async (): Promise<ApiResponse<TGetUserInfo>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.get<TGetUserInfo>('/userinfo', {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Unknown error');
  }
};

export const createItem = async ({
  user_id,
  company_name,
  company_address,
  business,
  url,
}: TInputCreateItem): Promise<ApiResponse<any>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.post<any>(
      '/applications/hexa-job/datastores/companies/items/new',
      {
        item: {
          user_id,
          company_name,
          company_address,
          business,
          url,
        }
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      }
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Unknown error');
  }
};