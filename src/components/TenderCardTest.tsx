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
                <CardTitle>{tender.number.toUpperCase()}</CardTitle>
                <CardDescription>
                  {tender.closingDate.toDateString()}
                </CardDescription>
              </div>
              <CardDescription>
                {tender.status === 'IN_PROGRESS'
                  ? 'IN PROGRESS'
                  : tender.status}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>{tender.description}</CardContent>
          <CardFooter>
            <CardDescription>{tender.client}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
export default TenderCardTest;
