'use client'
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";
import toast from 'react-hot-toast';
import { IconMailFilled } from '@tabler/icons-react';

export const ContactForm = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          toast.success('Email successfully sent!');
        }, (error) => {
          toast.error('Failed to send email. Please try again.');
        });
    }
  };

  return (
    <>
      <Button size='lg' onPress={onOpen} className='mb-5 gap-unit-1 bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg'>
        <IconMailFilled />
        Contact Form
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form ref={form} onSubmit={sendEmail}>
                <ModalHeader className="flex flex-col gap-1">Contact Form</ModalHeader>
                <ModalBody>
                    <Input type="text" name="user_name" label="Name" placeholder="Joey Blogs" isRequired />
                    <Input type="email" name="user_email" label="Email" placeholder="name@example.com" isRequired />
                    <Textarea label="Message" placeholder="Enter your message" name="message" isRequired />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color='primary' type="submit" onPress={onClose} value="Send">Send</Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
};
