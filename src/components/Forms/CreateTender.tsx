'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import {
  Form,
  FormControl,
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
import { addTender } from '@/actions';

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
  status: z.string().optional(),
  client: z.string().min(2, {
    message: 'Company  must be at least 2 characters.',
  }),
  company: z.string({
    required_error: 'A client is required.',
  }),
});

export type Tender = z.infer<typeof tenderFormSchema>;

const CreateTender = () => {
  const form = useForm<Tender>({
    resolver: zodResolver(tenderFormSchema),
    defaultValues: {
      number: '',
      description: '',
      client: '',
      closingTime: '10:00',
      company: 'Sithembe Transportation and Projects',
    },
  });

  function onSubmit(data: Tender) {
    try {
      addTender(data);
      form.reset();
      toast({
        title: 'Tender Details:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });

      // console.log(data);
    } catch (error: any) {
      toast({
        title: 'Error:',
        description: error.message,
      });
      throw error;
    }
  }
  return (
    <div className='max-w-3xl'>
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
          <FormField
            control={form.control}
            name='client'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Name</FormLabel>
                <FormControl>
                  <Input placeholder='Client Name' {...field} />
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
              name='company'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full max-w-xs'>
                  <FormLabel>Company Name</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select Company Name' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='Sithembe Transportation and Projects'>
                        Sithembe Transportation and Projects
                      </SelectItem>
                      <SelectItem value='Livhu and Musa Enterprise'>
                        Livhu and Musa Enterprise
                      </SelectItem>
                      <SelectItem value='Sithembe and Livhu'>
                        Sithembe and Livhu
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type='submit'>Create Tender</Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateTender;
