import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';

type Tender = {
  number: String;
  closingDate: Date;
  Status: String;
  description: String;
  client: String;
  briefing?: String;
};

const TenderCard = ({
  number,
  closingDate,
  Status,
  description,
  client,
  briefing,
}: Tender) => {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center '>
          <div>
            <CardTitle>{number.toUpperCase()}</CardTitle>
            <CardDescription>{closingDate.toDateString()}</CardDescription>
            <CardDescription>{briefing}</CardDescription>
          </div>
          <CardDescription>
            {Status === 'IN_PROGRESS' ? 'IN PROGRESS' : Status}
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
