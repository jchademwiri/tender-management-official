import { getAllOpenTenders } from '@/lib/db';
import TenderCard from '@/components/Card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AllOpenTendersPage = async () => {
  const tenders = await getAllOpenTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Upcoming Tenders</CardTitle>
        {/* <CardDescription>All Upcoming Tenders</CardDescription> */}
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {tenders.map((tender) => (
          <TenderCard key={tender.id} {...tender} />
        ))}
      </CardContent>
    </Card>
  );
};

export default AllOpenTendersPage;
