/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Probilet API
 * A simple instruction manual for those who need the probilet api.
 * OpenAPI spec version: 1.0
 */
import type { OrderOutId } from './orderOutId';
import type { OrderOutPaidAt } from './orderOutPaidAt';
import type { OrderOutPayment } from './orderOutPayment';

export interface OrderOut {
  created_at: string;
  customer: number;
  id?: OrderOutId;
  paid_at?: OrderOutPaidAt;
  payment: OrderOutPayment;
  /** @maxLength 6 */
  pin_code: string;
  price: number;
  should_be_payed_at: string;
  source: string;
  status: string;
  type: string;
}
