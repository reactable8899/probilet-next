/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Probilet API
 * A simple instruction manual for those who need the probilet api.
 * OpenAPI spec version: 1.0
 */
import type { PaginatedResponseSchemaNewsOutNext } from './paginatedResponseSchemaNewsOutNext';
import type { PaginatedResponseSchemaNewsOutPrevious } from './paginatedResponseSchemaNewsOutPrevious';
import type { NewsOut } from './newsOut';

export interface PaginatedResponseSchemaNewsOut {
  count: number;
  next: PaginatedResponseSchemaNewsOutNext;
  previous: PaginatedResponseSchemaNewsOutPrevious;
  results: NewsOut[];
}
