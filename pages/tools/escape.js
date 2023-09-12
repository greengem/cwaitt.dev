import { useState } from 'react';
import {Textarea, Button, Code} from "@nextui-org/react";

export default function EscapeTool() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  function handleEscape() {
    const escapedText = inputText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    setOutputText(escapedText);
  }

  return (
    <section id='recent' className='py-20'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10'>
        <div className="container mx-auto mt-10">
          <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>Text Escaper Tool</h1>
          <p className='mb-10'>In web development, especially when dealing with HTML and JavaScript, certain characters can cause issues if not properly "escaped". These characters have special meanings in HTML and JS, and using them as-is can lead to unexpected results or even code vulnerabilities. Our Text Escaper Tool helps you seamlessly convert these problematic characters into their corresponding escape sequences, ensuring that your code remains clean and behaves as intended. The following symbols will be converted: <Code>&amp; to &amp;amp;</Code> <Code>&lt to &amp;lt;</Code> <Code>&gt; to &amp;gt;</Code> <Code>" to &amp;quot;</Code> <Code>' to &amp;apos;</Code> Simply input your text, and let the tool handle the rest!</p>
            <div className='flex flex-col md:flex-row w-full'>
              <div className='md:w-1/3'>
                <Textarea 
                  color='warning'
                  minRows={17}
                  maxRows={100}
                  fullWidth
                  label="Input"
                  placeholder="Enter your text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}>
                </Textarea>
              </div>
              <div className="md:w-1/3 text-center my-10">
              <Button className='mx-5 bg-gradient-to-tr from-[#FF705B] to-[#FFB457] text-black shadow-lg' size='lg' onClick={handleEscape}>Escape Text</Button>
            </div>
              <div className='md:w-1/3'>
                <Textarea
                  color='warning'
                  minRows={17}
                  maxRows={100}
                  fullWidth
                  label="Output"
                  variant="bordered"
                  isReadOnly
                  value={outputText}>
                </Textarea>
              </div>
            </div>

          </div>
          
        </div>
      </section>
  );
}


