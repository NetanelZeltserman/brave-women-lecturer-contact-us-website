'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='block text-base font-medium text-black'
        >
          שם<span className="text-red-500">*</span>
        </label>
        <input
          type='text'
          className='w-full px-2 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-primary focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='phone'
          className='block text-base font-medium text-black'
        >
          טלפון<span className="text-red-500">*</span>
        </label>
        <input
          type='phone'
          className='w-full px-2 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-primary focus:shadow-md'
          {...register('phone', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='block text-base font-medium text-black'
        >
          אימייל<span className="text-red-500">*</span>
        </label>
        <input
          type='email'
          className='w-full px-2 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-primary focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='companyName'
          className='block text-base font-medium text-black'
        >
          שם חברה
        </label>
        <input
          type='text'
          className='w-full px-2 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-primary focus:shadow-md'
          {...register('companyName', { required: false })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='block text-base font-medium text-black'
        >
          הודעה<span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          className='w-full px-2 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none resize-none focus:border-primary focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='w-full px-8 py-3 text-base font-semibold text-white transition-all duration-200 rounded-md outline-none bg-primary hover:shadow-form hover:bg-primaryHover focus:ring-4 focus:ring-tertiary'>
          שלח
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
