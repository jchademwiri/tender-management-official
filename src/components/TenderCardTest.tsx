import { nextClosingTenders } from '@/lib/db';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const TenderCardTest = async () => {
  const nextTenders = await nextClosingTenders();
  return (
    <>
      {nextTenders.map((tender) => (
        <Card key={tender.id}>
          <CardHeader>
            <div className='flex justify-between items-center '>
              <div>
                <CardTitle>{tender.tenderNumber.toUpperCase()}</CardTitle>
                <CardDescription>
                  {tender.closingDate.toDateString()}
                </CardDescription>
              </div>
              <CardDescription>
                {tender.Status === 'IN_PROGRESS'
                  ? 'IN PROGRESS'
                  : tender.Status}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>{tender.tenderDescription}</CardContent>
          <CardFooter>
            <CardDescription>{tender.tenderClient}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
export default TenderCardTest;
