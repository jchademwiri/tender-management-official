import { getSubmitedTenders } from '@/actions';
import TenderCard from '@/components/Card';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  Card,
  CardContent,
} from '@/components/ui/card';

const SubmittedTendersPage = async () => {
  const submittedTenders = await getSubmitedTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-4xl'>All Submited Tenders</CardTitle>
        <CardDescription>Total Submited Tenders</CardDescription>
      </CardHeader>
      <CardContent>
        <section className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
          {submittedTenders.map((tender) => (
            <TenderCard key={tender.id} {...tender} />
          ))}
        </section>
      </CardContent>
    </Card>
  );
};

export default SubmittedTendersPage;
