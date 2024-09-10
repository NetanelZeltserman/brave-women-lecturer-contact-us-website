import ContactForm from '@/components/forms/contact';

export default function ContactSection() {
  return (
    <section className='flex flex-col items-center mb-12'>
      <h2 className='mb-8 text-3xl font-bold text-center text-primary'>
        יצירת קשר
      </h2>
      <ContactForm />
    </section>
  );
}