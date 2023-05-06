import { Form } from '@remix-run/react';
import React from 'react'
import { Input, Textarea, Button } from "@material-tailwind/react";

export interface ContactFormProps {
    actionData: any;
}

export const validateName = (name: string) => {
    if (!name) {
        return "Name is required";
    } else if (typeof name !== "string" || name.length < 3) {
        return `Name must be at least 3 characters long`;
    }
};

export const validateEmail = (email: string) => {
    if (!email) {
        return "Email is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Invalid emaill address";
    }
};

export const validatePhone = (phone: any) => {
    if (/^(\+?1\s*(?:[-\.\s])?)?\(?(\d{3})\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)) {
        return "Invalid phone number";
    }
}

export const validateMessage = (message: string) => {
    if (!message) {
        return "Message is required";
    }
}

const ContactForm: React.FC<ContactFormProps> = (props): React.ReactElement => {
    return (
        <div className='flex flex-col border border-2 rounded-2xl shadow-xl py-6 px-8 max-w-screen-sm w-full'>
            <h1 className='text-2xl font-bold mb-2'>Contact</h1>

            <div className='mb-6 text-sm font-light'>
                Reach out by using the contact form below to kickstart your fencing project today!
            </div>

            <Form className='flex flex-col' method='post'>
                <div className='mb-6'>
                    <Input name='name' label="Name" />
                    {props.actionData?.contactFormErrors?.name ? (
                        <em className='absolute text-red-500 text-xs'>{props.actionData?.contactFormErrors?.name}</em>
                    ) : null}
                </div>
                <div className='mb-6'>
                    <Input name='email' label="Email" />
                    {props.actionData?.contactFormErrors?.email ? (
                        <em className='absolute text-red-500 text-xs'>{props.actionData?.contactFormErrors?.email}</em>
                    ) : null}
                </div>
                <div className='mb-6'>
                    <Input name='phone' label="Phone" className='mb-6' />
                    {props.actionData?.contactFormErrors?.phone ? (
                        <em className='absolute text-red-500 text-xs'>{props.actionData?.contactFormErrors?.phone}</em>
                    ) : null}
                </div>
                <div className='mb-6'>
                    <Textarea name='message' label="Message" />
                    {props.actionData?.contactFormErrors?.message ? (
                        <em className='absolute text-red-500 text-xs'>{props.actionData?.contactFormErrors?.message}</em>
                    ) : null}
                </div>
                <Button variant="outlined" type='submit'>Submit</Button>
            </Form>
        </div>
    );
};

export default ContactForm;