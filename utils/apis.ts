import { getCookie } from 'cookies-next';

import {
  TAddUser,
  TConfirmRegistration,
  TCreateJobItem,
  TGetCompaniesItems,
  TGetJobSeekers,
  TGetJobsItems,
  TGetPrefecturesItems,
  TGetUserInfo,
  TInputAddJobSeekers,
  TInputCreateItem,
  TInputCreateJobItem,
  TInputGetItemListJobs,
  TInputLogin,
  TInputRegisterUser,
  TJobSearchPayload,
  TJobSearchResult,
  TListFieldValues,
  TLogin,
  TRegisterUser,
  TUploadFileImages,
  TUserInvite,
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

export const uploadFile = async (
  formData: FormData
): Promise<ApiResponse<TUploadFileImages>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.post<TUploadFileImages>(
      '/files',
      formData,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'multipart/form-data boundary="yet another boundary"',
        },
        transformRequest: (formData) => formData,
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

export const getPrefecturesItems = async (): Promise<
  ApiResponse<TGetPrefecturesItems>
> => {
  try {
    const response = await axiosInstance.post<TGetPrefecturesItems>(
      '/applications/hexa-job/datastores/prefectures/items/search',
      {
        conditions: [],
        page: 1,
        sort_field_id: 'id',
        sort_order: 'asc',
        use_display_id: true,
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_TOKEN_API,
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

export const createJobItems = async ({
  company_id,
  job_title,
  sub_title,
  image,
  start_work_date,
  end_work_date,
  work_content,
  work_details,
  postal_code,
  prefecture,
  city,
  address,
  hourly_wage,
}: TInputCreateJobItem): Promise<ApiResponse<TCreateJobItem>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.post<TCreateJobItem>(
      '/applications/hexa-job/datastores/jobs/items/new',
      {
        item: {
          company_id,
          job_title,
          sub_title,
          image,
          start_work_date,
          end_work_date,
          work_content,
          work_details,
          postal_code,
          prefecture,
          city,
          address,
          hourly_wage,
        },
        is_force_update: true,
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

export const getItemListCompanies = async (
  user_id: string
): Promise<ApiResponse<TGetCompaniesItems>> => {
  try {
    const token = getCookie('token');
    const page = 1;
    const per_page = 1;

    const response = await axiosInstance.post<TGetCompaniesItems>(
      '/applications/hexa-job/datastores/companies/items/search',
      {
        conditions: [
          {
            id: 'user_id',
            search_value: [user_id],
            exact_match: true,
          },
        ],
        include_links: true,
        page,
        per_page,
        use_display_id: true,
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

export const getItemListJobs = async ({
  page,
  per_page,
  company_id,
}: TInputGetItemListJobs): Promise<ApiResponse<TGetJobsItems>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.post<TGetJobsItems>(
      '/applications/hexa-job/datastores/jobs/items/search',
      {
        conditions: [
          {
            id: 'company_id',
            search_value: [company_id],
            exact_match: true,
          },
        ],
        include_links: true,
        page,
        per_page,
        use_display_id: true,
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

export const getFile = async (file_id: string) => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.get(`/files/${file_id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
      responseType: 'arraybuffer',
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

export const getItemDetails = async (
  item_id: string
): Promise<ApiResponse<TListFieldValues>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.get<TListFieldValues>(
      `applications/hexa-job/datastores/jobs/items/details/${item_id}`,
      {
        headers: {
          Authorization: token
            ? `Bearer ${token}`
            : process.env.NEXT_PUBLIC_TOKEN_API,
        },
        params: {
          include_linked_items: true,
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
  use_or_condition,
  page,
  per_page,
  use_display_id,
}: TJobSearchPayload): Promise<ApiResponse<TJobSearchResult>> => {
  try {
    const response = await axiosInstance.post<TJobSearchResult>(
      '/applications/hexa-job/datastores/jobs/items/search',
      {
        conditions,
        sort_field_id,
        sort_order,
        use_or_condition,
        page,
        per_page,
        use_display_id,
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

export const addJobSeekers = async ({
  job_id,
  name,
  email,
  self_promotion,
}: TInputAddJobSeekers) => {
  try {
    const response = await axiosInstance.post(
      '/applications/hexa-job/datastores/job_seekers/items/new',
      {
        item: {
          job_id,
          name,
          email,
          self_promotion,
        },
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_TOKEN_API,
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

export const getJobSeekers = async (
  page: number,
  per_page: number,
  job_id: string
): Promise<ApiResponse<TGetJobSeekers>> => {
  try {
    const token = getCookie('token');

    const response = await axiosInstance.post<TGetJobSeekers>(
      'applications/hexa-job/datastores/job_seekers/items/search',
      {
        conditions: [
          {
            id: 'job_id',
            search_value: [job_id],
            exact_match: true,
          },
        ],
        page,
        per_page,
        use_display_id: true,
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
