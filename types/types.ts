export type Element = {
  id: number;
  name: string;
  element_type_name: string;
  team_name: string;
  total_point: number;
  now_cost: number;
};

export type Team = {
  id: number;
  name: string;
  short_name: string;
  color: string;
};
