import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { YearToDateTenders } from '@/actions';

const YearToDate = async () => {
  const totalTendersYearToDate = await YearToDateTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{totalTendersYearToDate}</CardTitle>
        <CardDescription>Total Submitted Tenders This Year</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default YearToDate;
