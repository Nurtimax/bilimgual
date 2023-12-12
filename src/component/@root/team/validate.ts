import * as Yup from 'yup';

export const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

const validationSchema = Yup.object({
   fullName: Yup.string().required('Full Name is required'),
   email: Yup.string().email('Invalid email address').required('Email is required'),
   phoneNumber: Yup.string(),
   country: Yup.string().required('Country is required'),
   stateRegion: Yup.string(),
   city: Yup.string().required('City is required'),
   address: Yup.string(),
   zipCode: Yup.string(),
   company: Yup.string().required('Company is required'),
   role: Yup.string().required('Role is required'),
   github: Yup.string().required('GitHub is required'),
   telegram: Yup.string(),
   instagram: Yup.string(),
   linkedin: Yup.string(),
   portfolio: Yup.string(),
   youtube: Yup.string(),
   facebook: Yup.string()
});

export default validationSchema;
