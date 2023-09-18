import {Image} from "@nextui-org/image";
import NextImage from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface DescriptionAsset {
  sys: {
    id: string
  };
  url: string;
  description: string;
}

interface DescriptionAssetLink {
  block: DescriptionAsset[]
}

interface DescriptionData {
  json: any;
  links: {
    assets: DescriptionAssetLink;
  };
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: DescriptionAsset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return <Image as={NextImage} src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}

export function DescriptionRenderer({ description }: { description: DescriptionData }) {
  return documentToReactComponents(description.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node?.data?.target?.sys?.id}
          assets={description?.links?.assets?.block}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className='text-base my-4'>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className='text-4xl font-bold my-8'>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className='text-3xl font-semibold my-6'>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className='text-2xl font-semibold my-5'>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <h4 className='text-xl font-medium my-4'>{children}</h4>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className='pl-5 my-4'>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className='pl-5 my-4'>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className='my-2'>{children}</li>
      ),
    },
  });
}
