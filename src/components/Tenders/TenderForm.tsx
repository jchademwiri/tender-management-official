import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
// import { useState } from 'react';

export default function TenderForm() {
  // State to track the selected value of "Has Briefing" dropdown
  //   const [hasBriefing, setHasBriefing] = useState('NO');

  // Function to handle changes in the "Has Briefing" dropdown
  //   const handleHasBriefingChange = (
  //     event: React.ChangeEvent<HTMLSelectElement>
  //   ) => {
  //     setHasBriefing(event.target.value);
  //   };
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='w-full max-w-md'>
        <Card>
          <CardHeader>
            <CardTitle>Tender Form</CardTitle>
            <CardDescription>
              Fill out the details of the tender.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='number'>Tender Number</Label>
                <Input id='number' placeholder='Enter tender number' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='description'>Tender Description</Label>
                <Textarea
                  className='min-h-[100px]'
                  id='description'
                  placeholder='Enter tender description'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='closing-date'>Closing Date</Label>
                <Input id='closing-date' type='date' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='closing-time'>Closing Time</Label>
                <Input defaultValue='10:00' id='closing-time' type='time' />
              </div>
              {/* <div className='space-y-2'>
                <Label htmlFor='closing-time'>Closing Time</Label>
                <Select defaultValue='10:00'>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='09:00'>09:00 AM</SelectItem>
                    <SelectItem value='09:30'>09:30 AM</SelectItem>
                    <SelectItem value='10:00'>10:00 AM</SelectItem>
                    <SelectItem value='10:30'>10:30 AM</SelectItem>
                    <SelectItem value='11:00'>11:00 AM</SelectItem>
                    <SelectItem value='11:30'>11:30 AM</SelectItem>
                    <SelectItem value='12:00'>12:00 PM</SelectItem>
                    <SelectItem value='12:30'>12:30 PM</SelectItem>
                    <SelectItem value='13:00'>01:00 PM</SelectItem>
                    <SelectItem value='13:30'>01:30 PM</SelectItem>
                    <SelectItem value='14:00'>02:00 PM</SelectItem>
                    <SelectItem value='14:30'>02:30 PM</SelectItem>
                    <SelectItem value='15:00'>03:00 PM</SelectItem>
                    <SelectItem value='15:30'>03:30 PM</SelectItem>
                    <SelectItem value='16:00'>04:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div className='space-y-2'>
                <Label htmlFor='status'>Status</Label>
                <Select defaultValue='OPEN'>
                  <SelectTrigger id='status'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='OPEN'>OPEN</SelectItem>
                    <SelectItem value='IN_PROGRESS'>IN PROGRESS</SelectItem>
                    <SelectItem value='SUBMITTED'>SUBMITTED</SelectItem>
                    <SelectItem value='APPOINTED'>APPOINTED</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='client'>Client</Label>
                <Input id='client' placeholder='Enter client name' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='has-briefing'>Has Briefing</Label>
                <Select defaultValue='NO'>
                  <SelectTrigger id='has-briefing'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='YES'>YES</SelectItem>
                    <SelectItem value='NO'>NO</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2' id='briefing-section'>
                <Label htmlFor='briefing-date'>Briefing Date</Label>
                <Input id='briefing-date' type='date' />
                <Label htmlFor='briefing-location'>Briefing Location</Label>
                <Input
                  id='briefing-location'
                  placeholder='Enter briefing location'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='companies'>Companies</Label>
                <Select
                //  multiple
                >
                  <SelectTrigger id='companies'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='sithembe'>
                      Sithembe Transportation and Projects
                    </SelectItem>
                    <SelectItem value='livhu-musa'>
                      Livhu and Musa Enterprise
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className='w-full' type='submit'>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
