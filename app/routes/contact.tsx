import { ActionFunction, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import ContactForm from "~/components/ContactForm/ContactForm";
import { validateEmail, validateMessage, validateName } from "~/components/ContactForm/ContactForm";
import sendContactEmail from "./models/contact.server";
import { useNotification } from "~/utils/NotificationProvider/notification-provider";

export type ContactFormData = {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  console.log(data);

  const contactFormErrors: ContactFormData = {
    name: validateName(data.name.toString()),
    email: validateEmail(data.email.toString()),
    message: validateMessage(data.message.toString())
  }

  if (Object.values(contactFormErrors).some(Boolean)) {
    return { contactFormErrors };
  }

  const contactFormValues: ContactFormData = {
    name: data.name.toString(),
    email: data.email.toString(),
    message: data.message.toString()
  }
  sendContactEmail(contactFormValues);

  return redirect("/");
}

export default function Contact() {
  const actionData = useActionData();

  return (
    <main className="flex flex-col items-center justify-center
      bg-warmGrey-100 dark:bg-darkAubergine-900 
      w-full min-h-screen">
      <div className="my-32 px-5 max-w-screen-xl w-full m-auto">
        <ContactForm actionData={actionData} />
      </div>
    </main>
  );
}
