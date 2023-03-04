import { Dayjs } from 'dayjs';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

const dateTypes = ['holiday', 'weekend', 'normal'] as const;
export type TDateType = (typeof dateTypes)[number];

export type TDateHoliday = {
  date: Dayjs;
  nameHoliday: string | null;
  dateType: TDateType;
  dayOfWeek: string;
  day: number;
  month: number;
};

export type TJob = {
  id: string;
  imgUrl: string;
  jobName: string;
  des: string;
  date: string;
  startTime: string;
  endTime: string;
  tags: string[];
  hourlyWage: number;
};

export type TProfilePic = {
  mediaLink: string;
};

export type TAddUser = {
  added: boolean;
  exists: boolean;
  profile_pics?: TProfilePic[];
  u_id?: string;
  username?: string;
};

export type TUserInviteStatus = {
  email: string;
  stats: number;
};

export type TUserInvite = TUserInviteStatus[] | null;

export type TPwdPolicy = {
  expired_day: number;
  is_expired_day_warn: boolean;
  lockout_count: number;
  lockout_time: number;
  max_length: number;
  min_length: number;
  pattern_check_type: number;
  same_limit: number;
  use_expired_day: boolean;
  use_language_en: boolean;
  use_language_ja: boolean;
  use_lockout_count: boolean;
  use_lockout_time: boolean;
  use_max_length: boolean;
  use_min_length: boolean;
  use_pattern_check: boolean;
  use_same_limit: boolean;
};

export type TWorkspace = {
  access_key: string;
  created_at: string;
  disable_ui_access: boolean;
  display_id: string;
  g_id: string;
  id: string;
  index: number;
  is_root: boolean;
  name: string;
};

export type TUserConfirm = {
  confirmation_id: string;
  confirmed: boolean;
  current_workspace_id: string;
  email: string;
  email_confirmed: boolean;
  id: string;
  isElapsed: boolean;
  pwd_policy: TPwdPolicy;
  workspace: TWorkspace;
};

export type TConfirmRegistration = {
  user: TUserConfirm;
};

export type TRegisterUser = {
  token: string;
};

export type TInputRegisterUser = {
  confirmation_id: string;
  email: string;
  username: string;
  password: string;
  workspace: string;
};

export type TGetUserInfo = {
  u_id: string;
  username: string;
  email: string;
  is_ws_admin: boolean;
  profile_pic: string;
};

export type TInputCreateItem = {
  user_id: string;
  company_name: string;
  company_address: string;
  business: string;
  url: string;
};

export enum EType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

const notificationTypes = [EType.SUCCESS, EType.ERROR, EType.WARNING] as const;
export type TNotificationTypes = (typeof notificationTypes)[number];

export type TNotification = {
  open: boolean;
  type?: TNotificationTypes;
  message?: string;
};

export type TLogin = {
  token: string;
};

export type TInputLogin = {
  email: string;
  password: string;
};

export enum EMessageError {
  ERR_01 = '予期せぬエラーが発生しました',
}

export type TUploadFileImages = {
  file_id: string;
};

export type TPrefectureItems = {
  name: string;
  created_at: string;
  created_by: string;
  d_id: string;
  i_id: string;
  id: string;
  p_id: string;
  rev_no: string;
  title: string;
  unread: string;
};

export type TGetPrefecturesItems = {
  items: TPrefectureItems[];
  totalItems: number;
};

export type TInputCreateJobItem = {
  company_id: string;
  job_title: string;
  sub_title: string;
  image: string[];
  start_work_date: string;
  end_work_date: string;
  work_content: string;
  work_details: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address: string;
  hourly_wage: string;
};

export type TCreateJobItem = {
  history_id: string;
  item_id: string;
};

export type TImage = string | undefined;

export type TInputGetItemListJobs = {
  page: number;
  per_page: number;
  company_id: string;
};
