import { z } from 'zod';

/**
 * Contact Zod schema for the contact form
 */
export const contactSchema = z.object({
  email: z.string().email(),
  serviceId: z.string(),
  description: z.string(),
});
