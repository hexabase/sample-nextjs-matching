export type LJobDetail = {
  id?: string;
  price: number;
  title: string;
  content: string;
  workplace: string;
  jobDetail: string[];
  des: string;
  startTime: string;
  endTime: string;
  tag: string;
  imgUrl?: string;
};

type TItem = {
  i_id: string;
  type: string;
};

type TLink = {
  d_id: string;
  item_count: number;
  items: TItem[];
};

export type TItemLinks = {
  db_count: number;
  item_count: number;
  links: TLink[];
};

export type TJobsItems = {
  i_id: string;
  address: string;
  city: string;
  company_id: string;
  created_at: string;
  created_by: string;
  d_id: string;
  start_work_date: string;
  end_work_date: string;
  hourly_wage: string;
  id: string;
  image: string;
  item_links: TItemLinks;
  job_title: string;
  p_id: string;
  postal_code: string;
  prefecture: string;
  rev_no: string;
  sub_title: string;
  title: string;
  unread: string;
  updated_at: string;
  updated_by: string;
  work_content: string;
};

export type TGetJobsItems = {
  items: TJobsItems[];
  totalItems: number;
};

export type LJobSeekers = {
  i_id: string;
  name: string;
  email: string;
  self_promotion: string;
};

export type TGetJobSeekers = {
  items: LJobSeekers[];
  totalItems: number;
};

export type TCompaniesItems = {
  business: string;
  company_address: string;
  company_name: string;
  created_at: string;
  created_by: string;
  d_id: string;
  i_id: string;
  id: string;
  p_id: string;
  rev_no: string;
  status_id: string;
  title: string;
  unread: string;
  url: string;
  user_id: string;
};

export type TGetCompaniesItems = {
  items: TCompaniesItems[];
  totalItems: number;
};

export type TJobSearchPayloadOption = {
  conditions: TJobSearchCondition[];
  sort_field_id?: string;
  sort_order?: string;
  use_or_condition?: boolean;
};

export type TJobSearchPayload = {
  conditions: TJobSearchCondition[];
  sort_field_id?: string;
  sort_order?: string;
  use_or_condition?: boolean;
  page: number;
  per_page: number;
  use_display_id?: boolean;
};

export type TJobSearchCondition = {
  id?: string;
  search_value: string[];
};

export type TJobSearchResult = {
  items: TJobSearchDetail[];
  totalItems: number;
};

export type TJobSearchDetail = {
  '08cc962a-c93f-4a2d-9a0d-d347710d31d1': string;
  '764eb0c2-52fd-44a6-8a14-f5d10c880686': string;
  '772920ec-df90-421d-b204-bd41e733d9a9': string;
  address: string;
  city: string;
  company_id: string;
  created_at: string;
  created_by: string;
  d_id: string;
  end_work_date: string;
  'f80fb843-30aa-40bf-a44d-5f834bf11e78': string;
  hourly_wage: string;
  i_id: string;
  id: string;
  image: string;
  job_title: string;
  p_id: string;
  postal_code: string;
  prefecture: string;
  rev_no: string;
  start_work_date: string;
  sub_title: string;
  title: string;
  unread: string;
  updated_at: string;
  updated_by: string;
  work_content: string;
};
