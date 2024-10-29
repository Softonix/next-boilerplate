import Dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import isBetween from 'dayjs/plugin/isBetween'
import relativeTime from 'dayjs/plugin/relativeTime'

Dayjs.extend(isToday)
Dayjs.extend(isYesterday)
Dayjs.extend(isBetween)
Dayjs.extend(relativeTime)

export const dayjsService = Dayjs
