import { TAddUser, TUserInvite } from '../types';
import { ApiError, ApiResponse, createAxiosInstance } from './axios';

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
