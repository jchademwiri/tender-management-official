import { getTotalTenders } from '@/actions';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const TotalTenders = async () => {
  const totalTenders = await getTotalTenders();
  return (
    <Card className='hidden md:block'>
      <CardHeader className='items-center'>
        <CardDescription>Total Tenders Submited</CardDescription>
        <CardTitle>{totalTenders}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default TotalTenders;
