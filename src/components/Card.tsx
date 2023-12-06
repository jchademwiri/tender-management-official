import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';

const TenderCard = ({
  tenderNumber,
  closingDate,
  Status,
  tenderDescription,
  tenderClient,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center '>
          <div>
            <CardTitle>{tenderNumber.toUpperCase()}</CardTitle>
            <CardDescription>{closingDate.toDateString()}</CardDescription>
          </div>
          <CardDescription>
            {Status === 'IN_PROGRESS' ? 'IN PROGRESS' : Status}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>{tenderDescription}</CardContent>
      <CardFooter>
        <CardDescription>{tenderClient}</CardDescription>
      </CardFooter>
    </Card>
  );
};
export default TenderCard;
