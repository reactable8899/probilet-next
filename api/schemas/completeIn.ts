/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Probilet API
 * A simple instruction manual for those who need the probilet api.
 * OpenAPI spec version: 1.0
 */

export interface CompleteIn {
  action: number;
  amount: number;
  click_paydoc_id: number;
  click_trans_id: number;
  error: number;
  error_note: string;
  merchant_prepare_id: number;
  merchant_trans_id: string;
  service_id: number;
  sign_string: string;
  sign_time: string;
}
