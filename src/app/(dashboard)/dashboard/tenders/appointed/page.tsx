import TenderCard from '@/components/Card';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAppointedTenders } from '@/lib/db';
import { Tender } from '@/lib/models';

const AppointedTendersPage = async () => {
  const tenders = await getAppointedTenders();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointed Tenders</CardTitle>
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {tenders.length > 0 ? (
          tenders.map((tender: Tender) => (
            <TenderCard key={tender.number} {...tender} />
          ))
        ) : (
          <CardDescription>No Appointed Tenders Yet</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default AppointedTendersPage;
