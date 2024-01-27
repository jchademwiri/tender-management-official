'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from '../ui/use-toast';
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
import { addCompany } from '@/actions';

export const companyFormSchema = z.object({
  name: z.string().min(2, {
    message: 'A company name is required.',
  }),
});

export type Company = z.infer<typeof companyFormSchema>;

const CreateCompany = () => {
  const form = useForm<Company>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      name: '',
    },
  });

  // async function OriginalonSubmit(data: Company) {
  const onSubmit = async (data: Company) => {
    try {
      await addCompany(data);
      toast({
        title: 'Tender Details:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: 'Error:',
        description: error.message,
      });
      throw error;
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder='Company Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Create Company</Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateCompany;
