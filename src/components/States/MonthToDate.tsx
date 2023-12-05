import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { MonthToDateTenders } from '@/actions';

const MonthToDate = async () => {
  const totalTendersMonthToDate = await MonthToDateTenders();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{totalTendersMonthToDate}</CardTitle>
        <CardDescription>Total Submitted Tenders This month</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default MonthToDate;
