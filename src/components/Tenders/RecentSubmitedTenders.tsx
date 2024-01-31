import { Tender } from '@/lib/models';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableCaption,
} from '../ui/table';
import { getSubmitedTenders } from '@/lib/db';

const RecentSubmitedTendersTable = async () => {
  const submittedTenders = await getSubmitedTenders();
  return (
    <>
      <Table>
        <TableCaption>A list of recently submitted tenders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tender Number</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Closing Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submittedTenders.map((tender: Tender) => (
            <TableRow key={tender.number}>
              <TableCell>{tender.number}</TableCell>
              <TableCell>{tender.client}</TableCell>
              <TableCell>
                {tender.status === 'IN_PROGRESS'
                  ? 'IN PROGRESS'
                  : tender.status}
              </TableCell>
              <TableCell>
                {tender.closingDate.toDateString()} @ {tender.closingTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default RecentSubmitedTendersTable;
