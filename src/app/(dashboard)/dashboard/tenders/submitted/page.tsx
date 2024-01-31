import { getSubmitedTenders } from '@/lib/db';
import TenderCard from '@/components/Card';
import {
  CardHeader,
  CardTitle,
  Card,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Tender } from '@/lib/models';


const SubmittedTendersPage = async () => {
  const tenders = await getSubmitedTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Submited Tenders</CardTitle>
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {tenders.length > 0 ? (
          tenders.map((tender: Tender) => (
            <TenderCard key={tender.number} {...tender} />
          ))
        ) : (
          <CardDescription>No Submited Tenders Yet</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default SubmittedTendersPage;
