'use client'
import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import { Tooltip } from "@nextui-org/tooltip";
import toast from 'react-hot-toast';

export const CopyButton = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copy(code);
    toast.success('Code copied to clipboard.');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <Tooltip content="Copy">
      <button onClick={handleCopy} aria-label="Copy to clipboard" disabled={isCopied}>
        {isCopied ? <IconCheck size={16} /> : <IconCopy size={16} />}
      </button>
    </Tooltip>
  );
};
