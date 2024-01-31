import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

import { MyLink } from '@/types';

const links: MyLink[] = [
  {
    title: 'Add New Tender',
    path: '/dashboard/tenders/add-tender',
  },
  // {
  //   title: 'Add Company',
  //   path: '/dashboard/companies/add-company',
  // },
];

const CreateLinks = () => {
  return (
    <div className='space-x-3 text-primary'>
      {links.map(({ path, title }: MyLink) => (
        <Button key={path} variant={'outline'} className='gap-2'>
          <Plus />
          <Link href={path}>{title}</Link>
        </Button>
      ))}
    </div>
  );
};
export default CreateLinks;
