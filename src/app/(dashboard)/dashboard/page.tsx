// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';

import {
  getAllTenders,
  getAllBriefings,
  getTotalTenders,
  getTotalBriefings,
} from '@/actions';
import { MonthToDate, TotalTenders, YearToDate } from '@/components/States';
import {
  RecentSubmitedTenders,
  UpcomingBriefings,
  UpcomingTenders,
} from '@/components/Tenders';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Dashboard = async () => {
  // const session = await getServerSession(authOptions);
  const [allTenders, allBriefings, totalTenders, totalBriefings] =
    await Promise.all([
      getAllTenders(),
      getAllBriefings(),
      getTotalTenders(),
      getTotalBriefings(),
    ]);

  return (
    <section>
      <div className='border-dashed p-2 border border-secondary w-full rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-3 my-4 gap-2'>
          <TotalTenders />
          <YearToDate />
          <MonthToDate />
        </div>

        <div className='grid gap-2'>
          <RecentSubmitedTenders />
          <UpcomingTenders />
          <UpcomingBriefings />
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
