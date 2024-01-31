import { getAllOpenTenders } from '@/lib/db';
import TenderCard from '@/components/Card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tender } from '@/components/Forms/CreateTender';

const AllOpenTendersPage = async () => {
  const tenders = await getAllOpenTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Open Upcoming Tenders</CardTitle>
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {tenders.length > 0 ? (
          tenders.map((tender: Tender) => (
            <TenderCard key={tender.number} {...tender} />
          ))
        ) : (
          <CardDescription>No Open Tenders</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default AllOpenTendersPage;
