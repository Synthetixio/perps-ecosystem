import { PositionOrderBy } from '../v3_perp/__generated__/graphql';

// Type guard to check if the value is a valid PositionOrderBy
export function isValidPositionOrderBy(value: any): value is PositionOrderBy {
  return Object.values(PositionOrderBy).includes(value);
}
