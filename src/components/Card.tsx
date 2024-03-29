import { cn } from '@/lib/utils';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Tender } from '@/lib/models';

const TenderCard = ({
  number,
  closingDate,
  description,
  client,
  closingTime,
  status,
  company,
}: Tender) => {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between'>
          <div>
            <CardDescription>{company}</CardDescription>
            <CardTitle>{number.toUpperCase()}</CardTitle>
            <CardDescription>
              {closingDate.toDateString()} @ {closingTime}
            </CardDescription>
          </div>
          <CardDescription
            className={cn({
              'text-destructive': status === 'OPEN',
              'text-green-400': status === 'IN_PROGRESS',
              'text-primary': status === 'SUBMITTED',
              'text-green-600': status === 'APPOINTED',
            })}
          >
            {status === 'IN_PROGRESS' ? 'IN PROGRESS' : status}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <CardDescription>{client}</CardDescription>
      </CardFooter>
    </Card>
  );
};
export default TenderCard;
