'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, Loader2, Mail, Send } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/schemas';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SERVICES } from '@/lib/services';
import { Service } from '@/lib/types';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const [submitPending, setSubmitPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      serviceId: '',
      description: '',
    },
  });

  const handleOnValidForm = (contactData: z.infer<typeof contactSchema>) => {
    setSubmitPending(true);
    setTimeout(() => {
      setSubmitPending(false);
      console.log(contactData);
      toast.success('Ďakujeme, že ste vyjadrili záujem');
    }, 2000);
  };

  return (
    <section
      id='contactSection'
      className='flex w-full flex-col items-center justify-center p-6'
    >
      <Card className='flex w-full flex-row justify-between'>
        <CardHeader className='flex w-1/2 flex-col items-start justify-start'>
          <CardTitle className='text-primary flex w-full flex-row items-center justify-start gap-x-2 text-left text-3xl font-medium tracking-tight'>
            <Mail />
            Kontakt
          </CardTitle>
          <CardDescription className='text-primary w-full text-left'>
            Ozvite sa nám a my Vám predostrieme bezplatnú cenovú ponuku.
          </CardDescription>
        </CardHeader>
        <CardContent className='flex w-1/2 flex-row items-center justify-center gap-6 px-6 transition-all duration-200'>
          <Card className='w-full'>
            <CardHeader className='flex flex-row items-center justify-between'>
              <div className='w-full'>
                <CardTitle>Máte záujem o naše služby?</CardTitle>
                <CardDescription>Vyplňte náš formulár</CardDescription>
              </div>
              <Send />
            </CardHeader>
            <CardContent className='w-full'>
              <Form {...form}>
                <form>
                  <fieldset disabled={false} className='w-full space-y-3'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='text-muted-foreground'>
                            Email
                          </FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <Mail className='text-muted-foreground absolute top-2.5 left-3 h-4 w-4' />
                              <Input
                                type='email'
                                placeholder='johndoe@mail.sk'
                                className='pl-9'
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='serviceId'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='text-muted-foreground'>
                            Služba
                          </FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl className='w-full'>
                              <SelectTrigger>
                                <SelectValue placeholder='Vyberte službu' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className='w-full'>
                              {SERVICES.map((service: Service) => (
                                <SelectItem
                                  key={service.id}
                                  value={service.id}
                                  className='hover:bg-accent flex cursor-pointer flex-row items-center justify-start gap-x-2'
                                >
                                  <service.icon />
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='description'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel className='text-muted-foreground'>
                            Popis
                          </FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <FileText className='text-muted-foreground absolute top-2.5 left-3 h-4 w-4' />
                              <Textarea
                                placeholder='V krátkosti opíšte, o čo konkrétne máte záujem'
                                className='min-h-24 resize-none pt-2 pl-9'
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type='submit'
                      variant='default'
                      size='default'
                      className='w-full'
                      onClick={form.handleSubmit(handleOnValidForm)}
                      disabled={
                        Object.keys(form.formState.touchedFields).length === 0
                      }
                    >
                      {submitPending ? (
                        <Loader2 className='animate-spin' />
                      ) : (
                        <Send />
                      )}
                      {submitPending ? 'Posiela sa...' : 'Poslať'}
                    </Button>
                  </fieldset>
                </form>
              </Form>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
};
