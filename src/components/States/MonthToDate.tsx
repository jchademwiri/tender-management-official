import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { MonthToDateTenders } from '@/actions';

const MonthToDate = async () => {
  const totalTendersMonthToDate = await MonthToDateTenders();

  return (
    <Card>
      <CardHeader className='items-center'>
        <CardDescription>Total Submitted Tenders This month</CardDescription>
        <CardTitle>{totalTendersMonthToDate}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default MonthToDate;
