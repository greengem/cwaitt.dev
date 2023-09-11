import Link from 'next/link';
import { useRouter } from 'next/router';
import { ExclamationCircle } from 'react-bootstrap-icons';

export default function Custom404() {
  const router = useRouter();

  return (
    <section id='projects' className="pt-20 min-h-screen flex flex-col justify-center">
      <div className='max-w-screen-xl mx-auto text-center'>
        <div className='container mx-auto mb-20'>
          <ExclamationCircle className="w-16 h-16 mx-auto text-red-500" />
          <h1 className="custom-heading from-[#FF705B] to-[#FFB457] my-6">Oops! Page Not Found</h1>
          <div className='pb-5 space-y-6'>
            <p className="text-3xl font-bold mb-4">404</p>
            <p className="text-lg text-gray-700">We can&apos;t find the page you&apos;re looking for. It might have been moved or deleted.</p>
            <div className="mt-8">
              <Link className='bg-gradient-to-r from-[#FF705B] to-[#FFB457] text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90' href="/">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
