import SubmittedTendersTable from '@/components/Tenders/SubmittedTenders';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  Card,
  CardContent,
} from '@/components/ui/card';

const SubmittedTendersPage = () => {
  return (
    <>
      <div className='border-dashed border border-zinc-500 w-full rounded-lg'>
        <Card>
          <CardHeader>
            <CardTitle className='text-4xl'>All Submited Tenders</CardTitle>
            <CardDescription>Total Submited Tenders</CardDescription>
          </CardHeader>
          <CardContent>
            <SubmittedTendersTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SubmittedTendersPage;
