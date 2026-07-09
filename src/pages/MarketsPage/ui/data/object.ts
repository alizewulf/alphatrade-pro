export const BTCObject:ObjectType = {
  name: "Bitcoin",
  price: 43256.78,
  category: "Technology • Consumer Electronics • Cupertino, CA",
  change: 2.45,
};

export interface ObjectType {
  name: string;
  price: number;
  category: string;
  change: number;
}