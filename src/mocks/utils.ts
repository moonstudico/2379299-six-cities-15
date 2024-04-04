import moment from 'moment';

export const formattedDate = (date: moment.MomentInput): string => moment(date).format('MMMM YY');

export const formattedDateTime = (date: moment.MomentInput): string => moment(date).format('YYYY-MM-DD');

