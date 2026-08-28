export type Permission =
  | "products.view"
  | "products.create"
  | "products.edit"
  | "products.delete"
  | "orders.view"
  | "orders.edit"
  | "orders.status"
  | "orders.cancel"
  | "orders.refund"
  | "customers.view"
  | "customers.edit"
  | "customers.ban"
  | "staff.view"
  | "staff.create"
  | "staff.edit"
  | "staff.delete"
  | "staff.permissions"
  | "settings.store"
  | "settings.payment"
  | "settings.telegram"
  | "analytics.view";

export const OWNER_PERMISSIONS: Permission[] = [
  "products.view","products.create","products.edit","products.delete",
  "orders.view","orders.edit","orders.status","orders.cancel","orders.refund",
  "customers.view","customers.edit","customers.ban",
  "staff.view","staff.create","staff.edit","staff.delete","staff.permissions",
  "settings.store","settings.payment","settings.telegram","analytics.view"
];

export function hasPermission(role: string, permission: Permission) {
  if (role === "OWNER") return true;
  return false;
}
