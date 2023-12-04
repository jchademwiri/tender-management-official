import prisma from '@/prisma/client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '../ui/table';
import { nextClosingTenders } from '@/actions';

const UpcomingTenders = async () => {
  const nextTenders = await nextClosingTenders();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tenders</CardTitle>
        <CardDescription>Next Upcoming Tenders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tender Number</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className='min-w-[130px]'>Status</TableHead>
              <TableHead className='min-w-[150px]'>Closing Date</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nextTenders.map((tender) => (
              <TableRow key={tender.id}>
                <TableCell>{tender.tenderNumber}</TableCell>
                <TableCell>{tender.tenderClient}</TableCell>
                <TableCell>
                  {tender.Status === 'IN_PROGRESS'
                    ? 'IN PROGRESS'
                    : tender.Status}
                </TableCell>
                <TableCell>{tender.closingDate.toDateString()}</TableCell>
                <TableCell>{tender.tenderDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default UpcomingTenders;
