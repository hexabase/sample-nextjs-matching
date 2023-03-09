export type TImageValue = {
  file_id: string;
};

export type TFieldValue = {
  field_id: string;
  dataType: string;
  value: any;
};

export type TListFieldValues = {
  field_values: TFieldValue[];
};

export type TFieldValueConvert = {
  [key: string]: any;
};
