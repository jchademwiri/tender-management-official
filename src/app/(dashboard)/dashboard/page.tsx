import { MonthToDate, TotalTenders, YearToDate } from '@/components/States';
import {
  RecentSubmitedTendersTable,
  UpcomingTenders,
} from '@/components/Tenders';

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
      </section>
    </section>
  );
};
export default Dashboard;
