import TenderCard from '../Card';
import { nextClosingTenders } from '@/lib/db';

const UpcomingTenders = async () => {
  const nextTenders = await nextClosingTenders();

  return (
    <section className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
      {nextTenders.map((tender) => (
        <TenderCard key={tender.id} {...tender} />
      ))}
    </section>
  );
};
export default UpcomingTenders;
