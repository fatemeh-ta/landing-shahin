import type { TimeRangeId, TimeRangeResult } from "@/types/timeRange";
import {
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  subDays,
  subMonths,
  //   subMinutes,
} from "date-fns";

import {
  startOfDay as startOfDayJ,
  endOfDay as endOfDayJ,
  startOfMonth as startOfMonthJ,
  endOfMonth as endOfMonthJ,
  subDays as subDaysJ,
  subMonths as subMonthsJ,
} from "date-fns-jalali";

type Locale = "fa" | "en";

export function calcTimeRange(
  time: TimeRangeId,
  locale: Locale = "en",
  nowDate: Date = new Date(),
): TimeRangeResult {
  const isFa = locale === "fa";
  const now = nowDate;

  const SOD = (d: Date) => (isFa ? startOfDayJ(d) : startOfDay(d));
  const EOD = (d: Date) => (isFa ? endOfDayJ(d) : endOfDay(d));
  const SOM = (d: Date) => (isFa ? startOfMonthJ(d) : startOfMonth(d));
  const EOM = (d: Date) => (isFa ? endOfMonthJ(d) : endOfMonth(d));
  const SUB_DAYS = (d: Date, n: number) =>
    isFa ? subDaysJ(d, n) : subDays(d, n);
  const SUB_MONTHS = (d: Date, n: number) =>
    isFa ? subMonthsJ(d, n) : subMonths(d, n);

  let from = now;
  let to = now;

  switch (time) {
    case "yesterday": {
      const y = SUB_DAYS(now, 1);
      from = SOD(y);
      to = EOD(y);
      break;
    }

    case "now": {
      from = SOD(now);
      to = now;
      break;
    }

    case "7days": {
      from = SOD(SUB_DAYS(now, 7));
      to = now;
      break;
    }

    case "30days": {
      from = SOD(SUB_DAYS(now, 30));
      to = now;
      break;
    }

    case "last28Days": {
      from = SOD(SUB_DAYS(now, 28));
      to = now;
      break;
    }

    case "month": {
      const prev = SUB_MONTHS(now, 1);
      from = SOD(SOM(prev));
      to = EOD(EOM(prev));
      break;
    }

    case "thisMonth": {
      from = SOD(SOM(now));
      to = now;
      break;
    }

    case "last3Months": {
      from = SOD(SUB_MONTHS(now, 3));
      to = now;
      break;
    }

    case "last6Months": {
      from = SOD(SUB_MONTHS(now, 6));
      to = now;
      break;
    }

    case "last12Months": {
      from = SOD(SUB_MONTHS(now, 12));
      to = now;
      break;
    }

    case "last16Months": {
      from = SOD(SUB_MONTHS(now, 16));
      to = now;
      break;
    }

    case "custom": {
      from = SOD(now);
      to = now;
      break;
    }

    default: {
      from = SOD(now);
      to = now;
    }
  }

  return {
    fromDateTime: from.toISOString(),
    endDateTime: to.toISOString(),
  };
}
