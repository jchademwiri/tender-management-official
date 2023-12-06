import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { YearToDateTenders } from '@/actions';

const YearToDate = async () => {
  const totalTendersYearToDate = await YearToDateTenders();
  return (
    <Card>
      <CardHeader className='items-center'>
        <CardDescription>Total Submitted Tenders This Year</CardDescription>
        <CardTitle>{totalTendersYearToDate}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default YearToDate;
