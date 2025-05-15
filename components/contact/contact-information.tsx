import { FacebookIcon } from '@/components/icons/facebook-icon';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import { Mail, Phone } from 'lucide-react';

export const ContactInformation = () => {
  return (
    <div className="h-full w-full max-w-lg text-primary-foreground flex flex-col items-start justify-center">
      <h3 className="w-full text-left tracking-tight text-3xl text-shadow-lg font-medium mb-2">
        Máte záujem o naše služby?
      </h3>
      <p className="w-full text-left text-lg">
        Vyplňte náš formulár a my Vám s ďalším postupom pomôžeme
      </p>
      <div className="flex flex-col flex-1 w-full h-full items-start justify-center gap-y-3 mt-6">
        <div className="flex flex-row items-center justify-center gap-x-2">
          <FacebookIcon />
          <span className="font-medium text-shadow-md tracking-tight">
            Blueprint Solutions <i>s.r.o.</i>
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <InstagramIcon />
          <span className="font-medium text-shadow-md tracking-tight">
            @blueprintsolutions
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Mail className="w-10 h-10 mx-1" />
          <span className="font-medium text-shadow-md tracking-tight">
            contact@blueprint.com
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Phone className="w-10 h-10 mx-1" />
          <span className="font-medium text-shadow-md tracking-tight">
            0900 123 456
          </span>
        </div>
      </div>
    </div>
  );
};