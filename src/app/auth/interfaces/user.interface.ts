export interface User {
  _id:      string;
  email:    string;
  name:     string;
  isActive: boolean;
  roles:    any[];
  __v:      number;
}
