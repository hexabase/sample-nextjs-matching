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

type TItemLinks = {
  db_count: number;
  item_count: number;
  links: TLink[];
};

export type TLJobDetail = {
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

export type TGetLJobDetail = {
  items: TLJobDetail[];
  totalItems: number;
};

export type LJobSeekers = {
  id?: string;
  name: string;
  mail: string;
};
