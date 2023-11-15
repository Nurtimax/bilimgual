import { ReactNode } from 'react';

export interface ISocials {
   icon: ReactNode;
   id: string;
   link: string;
}

export interface ITeamImageCard {
   staticImage: string;
   borderRadius: string;
   name: string;
   figCaption: string;
   socials: ISocials[];
   id: number;
   fullName: string;
   email: string;
   phoneNumber: string;
   country: string;
   stateRegion: string;
   city: string;
   address: string;
   zipCode: string;
   company: string;
   role: string;
}

export interface InitialStateTeamForms extends ITeamImageCard {
   github?: string;
   telegram?: string;
   instagram?: string;
   linkedIn?: string;
   portfolio?: string;
   youtube?: string;
   facebook?: string;
   afterSubmit?: IAfterSubmit;
}

export interface IAfterSubmit {
   name?: string;
   message?: string;
}
