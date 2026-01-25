export const timeRangeIds = [
  "yesterday",
  "now",
  "7days",
  "30days",
  "month",
  "thisMonth",
  "custom",
  "last28Days",
  "last3Months",
  "last6Months",
  "last12Months",
  "last16Months",
] as const;

export type TimeRangeId = (typeof timeRangeIds)[number];

export const defaultTimeRange: TimeRangeId = "yesterday";

export type TimeRangeResult = {
  fromDateTime: string;
  endDateTime: string;
};
