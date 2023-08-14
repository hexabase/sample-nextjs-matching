import { getCookie } from 'cookies-next';
import { Blob } from 'buffer';

import {
  TCreateJobItem,
  TInputAddJobSeekers,
  TInputCreateItem,
  TInputCreateJobItem,
  TInputGetItemListJobs,
  TInputLogin,
  TInputRegisterUser,
  TJobSearchPayload,
} from '../types';
import { ApiError, ApiResponse, createAxiosInstance } from './axios';

import { AddUserResponse, ConfirmationsFullInfo, FileObject, HexabaseClient, Item, User, UserInviteResponse } from '@hexabase/hexabase-js';

const axiosInstance = createAxiosInstance();
const client = new HexabaseClient('dev', process.env.NEXT_PUBLIC_TOKEN_API);

export const setToken = async (token: string) => {
  await client.setToken(token);
};

export const addUser = async (
  email: string
): Promise<AddUserResponse> => {
  const group = await client.currentWorkspace!
    .group(process.env.NEXT_PUBLIC_GROUP_COMPANY_ID!);
  return await group.addByEmail(email);
};

export const userInvite = async (email: string): Promise<UserInviteResponse> => {
  const res = await client.invite([email], process.env.NEXT_PUBLIC_DOMAIN!, {
    sender_address: `${process.env.NEXT_PUBLIC_SENDER_ADDRESS}`,
    invitation_path: `${process.env.NEXT_PUBLIC_INVITATION_PATH}`,
  });
  return res[0];
};

export const confirmRegistration = async (id: string): Promise<ConfirmationsFullInfo> => client.users.confirm(id);

export const registerUser = async (params: TInputRegisterUser): Promise<string> => {
  const token = await client.users.registerConfirm(params);
  await client.setToken(token);
  debugger;
  return token;
};

export const getUserInfo = (): User => client.currentUser!;

export const createItem = async (params: TInputCreateItem): Promise<boolean> => {
  await client.setWorkspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await client.currentWorkspace!.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_COMPANY_DATASTORE_ID);
  const item = await datastore.item();
  item
    .sets(params)
    .set('user_id', client.currentUser!.id);
  return item.save();
};

export const login = async (params: TInputLogin): Promise<string> => client.auth.login(params);

export const logout = async (): Promise<boolean> => client.auth.logout();

export const searchJob = async (params: TJobSearchPayload): Promise<Item[]> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_JOB_DATASTORE_ID);
  return datastore.items(params);
};

export const uploadFile = async (file: File): Promise<FileObject> => {
  return client.upload(file.name, file as unknown as Blob);
};

export const getPrefecturesItems = async (): Promise<Item[]> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore('prefectures');
  const items = await datastore.items({
    page: 1,
    per_page: 47,
    sort_field_id: 'id',
    sort_order: 'asc',
    use_display_id: true,
  });
  return items;
};

export const updatePrefectures = async (): Promise<void> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore('prefectures');
  const items = await datastore.items({
    page: 1,
    per_page: 47,
    sort_field_id: 'id',
    sort_order: 'asc',
    use_display_id: true,
  });
  items.map(item => item.save('update permission'));
};

export const createJobItems = async (params: TInputCreateJobItem): Promise<Item> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_JOB_DATASTORE_ID);
  const item = await datastore.item();
  params.start_work_date = new Date(params.start_work_date);
  params.end_work_date = new Date(params.end_work_date);
  params.hourly_wage = Number(params.hourly_wage);
  const prefecture = await project.datastore('prefectures');
  params.prefecture = await prefecture.item(params.prefecture as string);
  item.sets(params);
  await item.save();
  return item;
};

export const getItemListCompany = async (): Promise<Item | undefined> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_COMPANY_DATASTORE_ID);
  const items = await datastore.items({
    page: 1,
    per_page: 1,
    conditions: [
      {
        id: 'user_id',
        search_value: [client.currentUser!.id],
        exact_match: true,
      },
    ]
  });
  return items[0];
};

export const getItemListJobs = async ({
  page,
  per_page,
  company_id,
}: TInputGetItemListJobs): Promise<{ items: Item[], totalCount: number}> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_JOB_DATASTORE_ID);
  return datastore.itemsWithCount({
    page,
    per_page,
    conditions: [
      {
        id: 'company_id',
        search_value: [company_id],
        exact_match: true,
      },
    ],
  });
};

export const getItemDetails = async (item_id: string): Promise<Item> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_JOB_DATASTORE_ID);
  return datastore.item(item_id);
};

export const addJobSeekers = async (params: TInputAddJobSeekers): Promise<boolean> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_JOB_SEEKERS_DATASTORE_ID);
  const item = await datastore.item();
  item.sets(params);
  return item.save();
};

export const getJobSeekersCount = async (job: Item): Promise<number> => {
  await client.setWorkspace(process.env.NEXT_PUBLIC_WORKSPACE_ID!);
  const items = await job.links(process.env.NEXT_PUBLIC_JOB_SEEKERS_DATASTORE_ID);
  return items.length;
}

export const getJobSeekers = async (
  page: number,
  per_page: number,
  job_id: string
): Promise<{items: Item[], totalCount: number}> => {
  const workspace = await client.workspace(process.env.NEXT_PUBLIC_WORKSPACE_ID);
  const project = await workspace.project(process.env.NEXT_PUBLIC_PROJECT_ID);
  const datastore = await project.datastore(process.env.NEXT_PUBLIC_JOB_SEEKERS_DATASTORE_ID);
  const res = await datastore.itemsWithCount({
    conditions: [
      {
        id: 'job_id',
        search_value: [job_id],
        exact_match: true,
      },
    ],
    page,
    per_page,
  });
  return res;
};
