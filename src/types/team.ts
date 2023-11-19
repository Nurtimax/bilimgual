export interface ISocials {
   icon: string;
   id: string;
   link: string;
   socialColor?: string;
}

export interface ITeamImageCard {
   staticImage: string;
   borderRadius: string;
   socials: ISocials[];
   id: string;
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
   position: string;
   profileBackground: string;
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
