// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';

import { MonthToDate, TotalTenders, YearToDate } from '@/components/States';
import { UpcomingBriefings, UpcomingTenders } from '@/components/Tenders';
import RecentSubmitedTendersTable from '@/components/Tenders/RecentSubmitedTenders';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const Dashboard = async () => {
  return (
    <section>
      <div className='space-x-3 text-primary'>
        <Button variant={'outline'} className='gap-2'>
          <Plus />
          <Link href={''}>Create tender</Link>
        </Button>
        <Button variant={'outline'} className='gap-2'>
          <Plus />
          <Link href={''}>Create Company</Link>
        </Button>
        <Button variant={'outline'} className='gap-2'>
          <Plus />
          <Link href={''}>Create Briefing</Link>
        </Button>
      </div>
      <header className='grid my-4 grid-cols-2  md:grid-cols-3 gap-2'>
        <TotalTenders />
        <YearToDate />
        <MonthToDate />
      </header>

      <section className='grid gap-2'>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tenders</CardTitle>
            <CardDescription>Next Upcoming Tenders</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingTenders />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recently Submited Tenders</CardTitle>
            <CardDescription>
              Total Submitted Tenders This month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSubmitedTendersTable />
          </CardContent>
        </Card>
        <UpcomingBriefings />
      </section>
    </section>
  );
};
export default Dashboard;
