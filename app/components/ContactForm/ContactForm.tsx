import { Form } from '@remix-run/react';
import React from 'react'
import { Input, Textarea, Button } from "@material-tailwind/react";
import { useNotification } from '~/utils/NotificationProvider/notification-provider';

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

export const validateMessage = (message: string) => {
    if (!message) {
        return "Message is required";
    }
}

const ContactForm: React.FC<ContactFormProps> = (props): React.ReactElement => {
    const { setShowNotification } = useNotification();

    return (
        <div className='flex flex-col 
         dark:border-2 border-darkAubergine rounded-xl shadow-xl 
         py-6 px-8 m-auto 
         max-w-screen-sm w-full
         text-darkAubergine dark:text-canonicalAubergine-400
         bg-white dark:bg-darkAubergine-800'>
            <h1 className='text-2xl text-ubuntuOrange-700 font-bold mb-2'>Contact</h1>

            <div className='mb-6 text-sm font-light'>
                Reach out by using the contact form below!
            </div>

            <Form onSubmit={() => setShowNotification(true)} className='flex flex-col' method='post'>
                <div className='mb-6'>
                    <Input className="text-darkAubergine dark:text-canonicalAubergine-400" color="orange" name='name' label="Name" />
                    {props.actionData?.contactFormErrors?.name ? (
                        <em className='absolute text-ubuntuOrange text-xs'>{props.actionData?.contactFormErrors?.name}</em>
                    ) : null}
                </div>
                <div className='mb-6'>
                    <Input className='text-darkAubergine dark:text-canonicalAubergine-400' color="orange" name='email' label="Email" />
                    {props.actionData?.contactFormErrors?.email ? (
                        <em className='absolute text-ubuntuOrange text-xs'>{props.actionData?.contactFormErrors?.email}</em>
                    ) : null}
                </div>
                <div className='mb-6'>
                    <Textarea className='text-darkAubergine dark:text-canonicalAubergine-400' color="orange" name='message' label="Message" />
                    {props.actionData?.contactFormErrors?.message ? (
                        <em className='absolute text-ubuntuOrange text-xs'>{props.actionData?.contactFormErrors?.message}</em>
                    ) : null}
                </div>
                <Button variant="outlined" color="orange" type='submit'>Submit</Button>
            </Form>
        </div>
    );
};

export default ContactForm;