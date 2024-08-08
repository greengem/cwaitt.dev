import { codeToHtml } from "./shiki";
import type { BundledLanguage } from "shiki/bundle/web";
import { IconCodeCircle } from "@tabler/icons-react";
import { CopyButton } from "./CopyButton";

interface ICodeProps {
  code: string;
  language: BundledLanguage;
}

export default async function Code({ code, language }: ICodeProps) {
  const html = await codeToHtml({ code, language });

  return (
    <div className="my-10">
      <CodeBlockHeader language={language} code={code} />
      <div className="overflow-x-auto border-x-2 border-b-2 rounded-b-lg dark:border-default-50">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

function CodeBlockHeader({ language, code }: ICodeProps) {
  return (
    <div className="text-xs uppercase font-bold text-secondary bg-[#17191e] px-4 pb-2 pt-3 rounded-t-lg flex justify-between border-b border-zinc-800">
      <span>
        <IconCodeCircle size={16} className="inline mr-1" />
        {language}
      </span>
      <span>
        <CopyButton code={code} />
      </span>
    </div>
  );
}
