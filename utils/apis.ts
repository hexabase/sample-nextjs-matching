import { getCookie } from 'cookies-next';

import {
  TAddUser,
  TConfirmRegistration,
  TGetCompaniesItems,
  TGetJobsItems,
  TCreateJobItem,
  TGetPrefecturesItems,
  TGetUserInfo,
  TInputCreateItem,
  TInputCreateJobItem,
  TInputGetItemListJobs,
  TInputLogin,
  TInputRegisterUser,
  TLogin,
  TRegisterUser,
  TUploadFileImages,
  TUserInvite,
  TListFieldValues,
  TJobSearchPayload,
  TJobSearchResult,
} from '../types';
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
        },
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

export const login = async ({
  email,
  password,
}: TInputLogin): Promise<ApiResponse<TLogin>> => {
  try {
    const response = await axiosInstance.post<TLogin>('/login', {
      email,
      password,
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

export const logout = async () => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.post(
      '/users/logout',
      {},
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

export const searchJob = async ({
  conditions,
  sort_field_id,
  sort_order,
  page,
  per_page
}: TJobSearchPayload): Promise<ApiResponse<TJobSearchResult>> => {
  try {
    const token = `eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzg0MjIxNDIsImlhdCI6MTY3ODA3NjU0Miwic3ViIjoiNjNlNGFhODJiYTkzYzQ4NmVkYTU1ZThmIiwidW4iOiJ0aGFpc29uIn0.C0ttC3Gsbd1Coh0gs07J05uvVIaczfOh4AOEAhOTuBwYMybNQWKGCq2mMili1PuD8OcK7SYm_oGBcuSgRpRfdvwXqKFhKLPpiURYI4qpqnNtbcs-8VIIUZasM_AU2XW4gDMhTA30p4eNrWn5wnhg1Q0KOloci4JUOBeglvqCGekB5qfdE371_VMSNfXVChiA2M0aboyQDdu7rC7Vj5KNIAqVJHlDTsqmCRMD2aHvWCxzPW9XhAVhEnydT5L9bsKF50Om9kpMXxNh5UjKBqvQlcdCplk-XYff_a0k4Kw4IDcO8I281Z2Qdcdc3wxZjBRpqsso8BsJEqznGjpNN9awXw`;

    const response = await axiosInstance.post<TJobSearchResult>('/applications/hexa-job/datastores/jobs/items/search', {
      conditions,
      sort_field_id,
      sort_order,
      page,
      per_page
    }, {
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
