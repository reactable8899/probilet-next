/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Probilet API
 * A simple instruction manual for those who need the probilet api.
 * OpenAPI spec version: 1.0
 */
import type { PaginatedResponseSchemaEventOutNext } from './paginatedResponseSchemaEventOutNext';
import type { PaginatedResponseSchemaEventOutPrevious } from './paginatedResponseSchemaEventOutPrevious';
import type { EventOut } from './eventOut';

export interface PaginatedResponseSchemaEventOut {
  count: number;
  next: PaginatedResponseSchemaEventOutNext;
  previous: PaginatedResponseSchemaEventOutPrevious;
  results: EventOut[];
}
