import { getAllTenders } from '@/actions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

const AllTendersPage = async () => {
  const tenders = await getAllTenders();
  return (
    <>
      <div className='border-dashed border border-zinc-500 w-full rounded-lg'>
        <Card>
          <CardHeader>
            <CardTitle className='text-4xl'>All Tenders</CardTitle>
            <CardDescription>Total Tenders</CardDescription>
          </CardHeader>
          <CardContent>
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
                {tenders.map((tender) => (
                  <TableRow key={tender.id}>
                    <TableCell>{tender.tenderNumber}</TableCell>
                    <TableCell className='hidden lg:block'>
                      {tender.tenderClient}
                    </TableCell>
                    <TableCell>
                      {tender.Status === 'IN_PROGRESS'
                        ? 'IN PROGRESS'
                        : tender.Status}
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
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AllTendersPage;
