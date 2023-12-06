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

const UpcomingTendersTable = async () => {
  const nextTenders = await nextClosingTenders();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tender Number</TableHead>
          <TableHead className='hidden lg:block'>Client</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Closing Date</TableHead>
          {/* <TableHead className='hidden lg:block'>Description</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {nextTenders.map((tender) => (
          <TableRow key={tender.id}>
            <TableCell>{tender.tenderNumber}</TableCell>
            <TableCell className='hidden lg:block'>
              {tender.tenderClient}
            </TableCell>
            <TableCell>
              {tender.Status === 'IN_PROGRESS' ? 'IN PROGRESS' : tender.Status}
            </TableCell>
            <TableCell>{tender.closingDate.toDateString()}</TableCell>
            {/* <TableCell className='hidden lg:block'>
                  {tender.tenderDescription &&
                  tender.tenderDescription.length > 50
                    ? `${tender.tenderDescription.slice(0, 50)}...`
                    : tender.tenderDescription}
                </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default UpcomingTendersTable;
