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

const Dashboard = async () => {
  return (
    <section>
      <header className='grid my-4 grid-cols-2  md:grid-cols-3 gap-2'>
        <MonthToDate />
        <YearToDate />
        <TotalTenders />
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
