import { getAllSubmitedTenders } from '@/lib/db';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const TotalSubmittedTenders = async () => {
  const allSubmitedTenders = await getAllSubmitedTenders();
  return (
    <Card className='hidden md:block'>
      <CardHeader className='items-center'>
        <CardDescription>Total Tenders Submited</CardDescription>
        <CardTitle>{allSubmitedTenders}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default TotalSubmittedTenders;
