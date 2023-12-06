// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';

import { MonthToDate, TotalTenders, YearToDate } from '@/components/States';
import {
  RecentSubmitedTenders,
  UpcomingBriefings,
  UpcomingTenders,
} from '@/components/Tenders';

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
          <UpcomingTenders />
          <RecentSubmitedTenders />
          <UpcomingBriefings />
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
