// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';

import { MonthToDate, TotalTenders, YearToDate } from '@/components/States';
import { RecentSubmitedTenders, UpcomingBriefings } from '@/components/Tenders';
import RecentSubmitedTendersTable from '@/components/Tenders/RecentSubmitedTenders';
import UpcomingTendersTable from '@/components/Tenders/UpcomingTenders';
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
      <div className='border-dashed p-2 border border-secondary w-full rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-3 mb-2 gap-2'>
          <TotalTenders />
          <YearToDate />
          <MonthToDate />
        </div>

        <div className='grid gap-2'>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tenders</CardTitle>
              <CardDescription>Next Upcoming Tenders</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingTendersTable />
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
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
