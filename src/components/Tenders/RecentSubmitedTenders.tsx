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
import { getSubmitedTenders } from '@/actions';

const RecentSubmitedTendersTable = async () => {
  const submittedTenders = await getSubmitedTenders();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tender Number</TableHead>
          <TableHead className='hidden lg:block'>Client</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Closing Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submittedTenders.map((tender) => (
          <TableRow key={tender.id}>
            <TableCell>{tender.tenderNumber}</TableCell>
            <TableCell className='hidden lg:block'>
              {tender.tenderClient}
            </TableCell>
            <TableCell>
              {tender.Status === 'IN_PROGRESS' ? 'IN PROGRESS' : tender.Status}
            </TableCell>
            <TableCell>{tender.closingDate.toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default RecentSubmitedTendersTable;
