import { ReactNode } from 'react';

export interface ISocials {
   icon: ReactNode;
   id: number;
   link: string;
}

export interface ITeamImageCard {
   staticImage: string;
   borderRadius: string;
   name: string;
   figCaption: string;
   socials: ISocials[];
   id: number;
}
