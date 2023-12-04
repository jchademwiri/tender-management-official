import { getTotalTenders } from '@/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const TotalTenders = async () => {
  const totalTenders = await getTotalTenders();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{totalTenders}</CardTitle>
          <CardDescription>Total Tenders Submited</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
export default TotalTenders;
