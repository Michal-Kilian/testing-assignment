import { Form } from '@/components/ui/form';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { contactSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { ContactFormField } from '@/components/contact/contact-form-field';

/**
 * Contact Form component with fields for email, service & description
 *
 * @returns {ReactElement}
 */
export const ContactForm = (): ReactElement => {
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

      console.log('Contact data:', contactData);

      toast.success('Úspešne odoslané', {
        description: 'Ďakujeme, že ste vyjadrili záujem o naše služby',
      });
    }, 2000);
  };

  return (
    <div className='flex w-full max-w-md flex-row items-center justify-center gap-6 px-6 transition-all duration-200'>
      <Card className='bg-primary w-full'>
        <CardContent className='w-full'>
          <Form {...form}>
            <form className='w-full'>
              <fieldset disabled={false} className='w-full space-y-3'>
                <ContactFormField
                  form={form}
                  name='email'
                  label='Email'
                  type='email'
                  placeholder='johndoe@mail.sk'
                />

                <ContactFormField
                  form={form}
                  name='serviceId'
                  label='Služba'
                  type='text'
                  placeholder='Vyberte službu'
                />

                <ContactFormField
                  form={form}
                  name='description'
                  label='Popis'
                  type='text'
                  placeholder='V krátkosti opíšte, o čo konkrétne máte záujem'
                />

                <Button
                  type='submit'
                  variant='outline'
                  size='default'
                  className='mt-6 w-full cursor-pointer'
                  onClick={form.handleSubmit(handleOnValidForm)}
                  disabled={
                    Object.keys(form.formState.touchedFields).length < 2
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
    </div>
  );
};
