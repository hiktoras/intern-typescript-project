export interface NavMenuData {
  name: string;
  subNavMenu: SubNavMenuData[];
  iconName: string;
  isSelected: boolean;
}

export interface SubNavMenuData {
  name: string;
  address: string;
}

export interface TransactionData {
  name: string;
  imageName: string;
  business: string;
  date: string;
  time: string;
  invoiceId: string;
  amount: number;
  currency: string;
  status: string;
  actions: string;
}

export interface RecipientData {
  name: string;
  imageName: string;
  email: string;
  accountType: string;
  currency: string;
  date: string;
}

export interface UserData {
  userName: string;
  imageName: string;
}
