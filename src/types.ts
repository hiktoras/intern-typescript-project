export interface NavMenuData {
  name: string;
  addresses: string[];
  subNavMenu: SubNavMenuData[];
  iconName: string;
}

export interface SubNavMenuData {
  name: string;
  address: string;
}

export interface TransactionData {
  id: number;
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
export interface InvoiceData {
  id: number;
  name: string;
  invoiceId: string;
  date: string;
  client: string;
  price: number;
  currency: string;
  status: string;
}

export interface InvoiceItemData {
  item: string;
  qty: number;
  hours: number;
  rate: string;
  total: string;
  currency: string;
}
