// import { messageCount, messages } from '@/actions';

import TenderCard from '@/components/TenderCardTest';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export const metadata = {
  title: 'PMG Messages',
  description: 'PMG Messages',
};

const ContactMessages = async () => {
  return (
    <section className='grid gap-2'>
      <CardTitle>Upcoming Tenders</CardTitle>
      <CardDescription>Next Upcoming Tenders</CardDescription>
      <section className='grid md:grid-cols-3 gap-2'>
        <TenderCard />
      </section>
    </section>
  );
};
export default ContactMessages;
