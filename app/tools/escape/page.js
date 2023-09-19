'use client'
import { useState } from 'react';
import { Textarea, Button, Code } from "@nextui-org/react";
import { ArrowLeftRight} from 'react-bootstrap-icons';

export default function EscapeTool() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Function to handle the text escaping logic
  function handleEscape() {
    // Define a function to escape text
    const escapeChars = (str) => {
      return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '{"\""}') // JSX-friendly form for double quotes
          .replace(/'/g, '{"\'"}'); // JSX-friendly form for single quotes
  }

    // Use regex to match text outside of tags, and apply the escape function to that text
    const escapedText = inputText.replace(/(>)([^<]*)(<)/g, function(match, p1, p2, p3) {
        return p1 + escapeChars(p2) + p3;
    });

    setOutputText(escapedText);
}

  // Function to clear both input and output fields
  function clearFields() {
    setInputText('');
    setOutputText('');
  }

  return (
    <section id='recent' className='py-20'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10'>
        <div className="container mx-auto mt-10">
          <h1 className='custom-heading from-[#FF705B] to-[#FFB457]'>Text Escaper Tool</h1>
          <p className='mb-10'>
  In web development, especially when dealing with HTML and JavaScript, certain characters can cause issues if not properly {"\""}escaped{"\""}. These characters have special meanings in HTML and JS, and using them as-is can lead to unexpected results or even code vulnerabilities. Our Text Escaper Tool helps you seamlessly convert these problematic characters into their corresponding escape sequences, ensuring that your code remains clean and behaves as intended. The following symbols will be converted: 
  <Code className='mx-1'>&amp; to &amp;amp;</Code> 
  <Code className='mx-1'>&lt; to &amp;lt;</Code> 
  <Code className='mx-1'>&gt; to &amp;gt;</Code> 
  <Code className='mx-1'>{"\""} to &amp;quot;</Code> 
  <Code className='mx-1'>{"'"} to &amp;apos;</Code> 
  Simply input your text, and let the tool handle the rest!
</p>


          
          <div className='flex flex-col md:flex-row w-full'>
            {/* Input field */}
            <div className='md:w-1/3'>
              <Textarea 
                color='warning'
                minRows={17}
                maxRows={100}
                fullWidth
                label="Input"
                placeholder="Enter your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            
            {/* Button controls */}
            <div className="md:w-1/3 text-center my-10 flex flex-col items-center">
    <Button className='mx-5 mb-4 bg-gradient-to-tr from-[#FF705B] to-[#FFB457] text-black shadow-lg' size='lg' onClick={handleEscape}><ArrowLeftRight />Escape Text</Button>
    <Button color='default' className='mx-5' size='lg' onClick={clearFields}>Clear</Button>
</div>



            {/* Output field */}
            <div className='md:w-1/3'>
              <Textarea
                color='warning'
                minRows={17}
                maxRows={100}
                fullWidth
                label="Output"
                variant="bordered"
                isReadOnly
                value={outputText}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
