/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Probilet API
 * A simple instruction manual for those who need the probilet api.
 * OpenAPI spec version: 1.0
 */
import type { EventGroupOut } from './eventGroupOut';
import type { FavouriteOutId } from './favouriteOutId';

export interface FavouriteOut {
  created_at: string;
  customer: number;
  event_group: EventGroupOut;
  id?: FavouriteOutId;
}
