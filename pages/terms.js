import Link from 'next/link';

export default function Terms() {
  return (
    <section id='terms' className=' pt-20'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='container mx-auto mb-20'>
          <h1 className='custom-heading from-[#FF705B] to-[#FFB457] mb-6'>Terms &amp; Conditions</h1>
          <div className='pb-5 space-y-6'>
            <h2 className='text-2xl font-bold mb-2'>1. Introduction</h2>
            <p className='text-lg'>
              Welcome to the developer portfolio of Chris Waitt. This website aims to showcase the professional and developmental work of Chris Waitt. By accessing or using this website, you agree to abide by the terms and conditions set out below.
            </p>

            <h2 className='text-2xl font-bold mb-2'>2. Intellectual Property</h2>
            <p className='text-lg'>
              All content, including text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork, and computer code (collectively, "Content"), including but not limited to the design, structure, selection, coordination, expression, "look and feel", and arrangement of such Content contained on the website is owned, controlled, or licensed by or to Chris Waitt, and is protected by trade dress, copyright, patent, and trademark laws, and various other intellectual property rights.
            </p>

            <h2 className='text-2xl font-bold mb-2'>3. Restrictions</h2>
            <p className='text-lg'>
              You are specifically restricted from all of the following:
              <ul className='list-disc pl-6 mt-2'>
                <li className='text-lg'>Using the website in any way that impacts user access;</li>
                <li className='text-lg'>Engaging in data mining, data harvesting, data extracting, or any similar activity in relation to this website;</li>
                <li className='text-lg'>Using the website contrary to applicable laws and regulations, or in a way that causes harm to the website, or any person or business entity;</li>
                <li className='text-lg'>Using this website to engage in advertising or marketing.</li>
              </ul>
            </p>

            <h2 className='text-2xl font-bold mb-2'>4. Limitation of Liability</h2>
            <p className='text-lg'>
              Chris Waitt, nor any of his officers, directors, and employees, shall be held liable for anything arising out of or in any way connected with your use of this website. Chris Waitt shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
            </p>

            <h2 className='text-2xl font-bold mb-2'>5. Severability</h2>
            <p className='text-lg'>
              If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>

            <h2 className='text-2xl font-bold mb-2'>6. Variation of Terms</h2>
            <p className='text-lg'>
              Chris Waitt is permitted to revise these terms at any time as he sees fit, and by using this website, you are expected to review these terms regularly.
            </p>

            <h2 className='text-2xl font-bold mb-2'>7. Governing Law & Jurisdiction</h2>
            <p className='text-lg'>
              These terms will be governed by and interpreted in accordance with the laws of the United Kingdom, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the UK for the resolution of any disputes.
            </p>

            <p className="mt-4 text-lg">
              If you have any questions about these terms, please <Link className="text-indigo-600 hover:text-indigo-500" href="/contact">contact me</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
