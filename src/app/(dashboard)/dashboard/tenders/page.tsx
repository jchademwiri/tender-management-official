import { getAllTenders } from '@/lib/db';
import TenderCard from '@/components/Card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AllTendersPage = async () => {
  const tenders = await getAllTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Tenders</CardTitle>
        <CardDescription>All Tenders</CardDescription>
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {tenders.map((tender) => (
          <TenderCard key={tender.id} {...tender} />
        ))}
      </CardContent>
    </Card>
  );
};

export default AllTendersPage;
