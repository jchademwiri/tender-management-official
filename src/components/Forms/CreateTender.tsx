'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { toast } from '../ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const companieSchema = z.object({
  name: z.string().min(2, {
    message: 'A company name is required.',
  }),
});

const tenderFormSchema = z.object({
  number: z.string().min(2, {
    message: 'Tender Number must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Tender description must be at least 2 characters.',
  }),
  closingDate: z.date({
    required_error: 'A closing date is required.',
  }),
  closingTime: z.string().min(2, {
    message: 'Closing Time must be at least 2 characters.',
  }),
  status: z.string({
    required_error: 'A status is required.',
  }),
  client: z.string({
    required_error: 'A client is required.',
  }),
  hasBriefing: z.string({
    required_error: 'A client is required.',
  }),
  companies: z.array(companieSchema),
});

const CreateTender = () => {
  const form = useForm<z.infer<typeof tenderFormSchema>>({
    resolver: zodResolver(tenderFormSchema),
    defaultValues: {
      number: '',
    },
  });

  function onSubmit(data: z.infer<typeof tenderFormSchema>) {
    toast({
      title: 'Tender Details:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* tender number  */}
          <FormField
            control={form.control}
            name='number'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tender Number</FormLabel>
                <FormControl>
                  <Input placeholder='Tender Number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* tender description  */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tender Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Tender Description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex gap-3 flex-col lg:flex-row justify-between'>
            {/* tender Closing Time and Date  */}
            <FormField
              control={form.control}
              name='closingDate'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full max-w-xs'>
                  <FormLabel>Closing Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Closing Date</span>
                          )}
                          <CalendarIcon className='ml-auto w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* tender closing time  */}
            <FormField
              control={form.control}
              name='closingTime'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full max-w-xs'>
                  <FormLabel>Closing Time</FormLabel>
                  <FormControl>
                    <Input
                      type='time'
                      //  defaultValue='10:00'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full max-w-xs'>
                  <FormLabel>Tender Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select tender Status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='OPEN'>OPEN</SelectItem>
                      <SelectItem value='IN_PROGRESS'>IN PROGRESS</SelectItem>
                      <SelectItem value='SUBMITTED'>SUBMITTED</SelectItem>
                      <SelectItem value='APPOINTED'>APPOINTED</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex gap-3 flex-col lg:flex-row justify-between'>
            <FormField
              control={form.control}
              name='client'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full max-w-xs'>
                  <FormLabel>Tender Status</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select tender Status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='City of Tshwane'>
                        City of Tshwane
                      </SelectItem>
                      <SelectItem value='IN_PROGRESS'>IN PROGRESS</SelectItem>
                      <SelectItem value='SUBMITTED'>SUBMITTED</SelectItem>
                      <SelectItem value='APPOINTED'>APPOINTED</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='hasBriefing'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full max-w-xs'>
                  <FormLabel>Briefing Status</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select Briefing Status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='NO'>NO</SelectItem>
                      <SelectItem value='YES'>YES</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <FormField
            control={form.control}
            name='companies'
            render={({ field }) => (
              <FormItem className='flex flex-col w-full max-w-xs'>
                <FormLabel>Briefing Status</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Briefing Status' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='NO'>Sithembe</SelectItem>
                    <SelectItem value='YES'>Livhu</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type='submit'>Create Tender</Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateTender;
