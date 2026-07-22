export interface QuickActionData {
  buyingPower: number;
  buyingPowerLabel: string;
  progressPercent: number;
}

export const DEFAULT_QUICK_ACTION: QuickActionData = {
  buyingPower: 12240.00,
  buyingPowerLabel: "$12,240.00",
  progressPercent: 70,
};
