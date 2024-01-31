import { getTotalSubmitedTenders } from '@/lib/db';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const TotalSubmittedTenders = async () => {
  const totalSubmitedTenders = await getTotalSubmitedTenders();
  return (
    <Card className='hidden md:block'>
      <CardHeader className='items-center'>
        <CardDescription>Total Tenders Submited</CardDescription>
        <CardTitle>{totalSubmitedTenders}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default TotalSubmittedTenders;
