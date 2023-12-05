import { getTotalTenders } from '@/actions';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const TotalTenders = async () => {
  const totalTenders = await getTotalTenders();
  return (
    <Card className='hidden md:block'>
      <CardHeader>
        <CardTitle>{totalTenders}</CardTitle>
        <CardDescription>Total Tenders Submited</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default TotalTenders;
