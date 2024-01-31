import { getAllTenders } from '@/lib/db';
import TenderCard from '@/components/Card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tender } from '@/lib/models';

const AllTendersPage = async () => {
  const tenders = await getAllTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Tenders</CardTitle>
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {tenders.length > 0 ? (
          tenders.map((tender: Tender) => (
            <TenderCard key={tender.number} {...tender} />
          ))
        ) : (
          <CardDescription>No Tenders</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default AllTendersPage;
