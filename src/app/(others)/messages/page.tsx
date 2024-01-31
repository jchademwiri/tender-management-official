import { CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'PMG Messages',
  description: 'PMG Messages',
};

const ContactMessages = async () => {
  return (
    <>
      <span className='font-bold text-4xl'>Help</span>

      <div className='border-dashed border border-zinc-500 w-full h-12 rounded-lg'></div>
      <div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
    </>
  );
};
export default ContactMessages;
