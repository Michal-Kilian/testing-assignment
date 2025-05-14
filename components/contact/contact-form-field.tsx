import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FileText, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { contactSchema } from '@/lib/schemas';
import { FormFieldName, Service } from '@/lib/types';
import { HTMLInputTypeAttribute } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SERVICES } from '@/lib/services';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormFieldProps {
  form: UseFormReturn<z.infer<typeof contactSchema>>;
  name: FormFieldName;
  label: string;
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string;
}

export const ContactFormField = ({
  form,
  name,
  label,
  type,
  placeholder,
}: ContactFormFieldProps) => {
  const getInputField = (
    field: ControllerRenderProps<
      {
        email: string;
        serviceId: string;
        description: string;
      },
      FormFieldName
    >,
  ) => {
    switch (name) {
      case 'email':
        return (
          <FormControl>
            <div className='relative'>
              <Mail className='text-muted-foreground absolute top-2.5 left-3 h-4 w-4' />
              <Input
                type={type}
                placeholder={placeholder}
                className='pl-9'
                {...field}
              />
            </div>
          </FormControl>
        );
      case 'serviceId':
        return (
          <Select onValueChange={field.onChange}>
            <FormControl className='w-full'>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
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
        );
      case 'description':
        return (
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
        );
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel className='text-muted-foreground'>{label}</FormLabel>
          {getInputField(field)}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
