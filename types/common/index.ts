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
};

export type TInputCreateItem = {
  user_id: string;
  company_name: string;
  company_address: string;
  business: string;
  url: string;
};
