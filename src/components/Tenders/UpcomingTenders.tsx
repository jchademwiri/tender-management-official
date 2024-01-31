import { Tender } from '@/lib/models';
import TenderCard from '../Card';
import { nextClosingTenders } from '@/lib/db';

const UpcomingTenders = async () => {
  const nextTenders = await nextClosingTenders();

  return (
    <section className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
      {nextTenders.map((tender: Tender) => (
        <TenderCard key={tender.number} {...tender} />
      ))}
    </section>
  );
};
export default UpcomingTenders;
