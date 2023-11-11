import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import hljs from 'highlight.js';
import { IconCodeCircle } from '@tabler/icons-react';

import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);

interface EmbeddedEntry {
  code: string;
  language: string;
  sys: {
      id: string;
  };
}

interface DescriptionAsset {
    sys: { id: string };
    url: string;
    description: string;
}

interface DescriptionData {
    json: any;
    links: { 
        assets: { block: DescriptionAsset[] };
        entries: { block: EmbeddedEntry[] };
    };
}

const RichTextAsset: React.FC<{ id: string; assets?: DescriptionAsset[] }> = ({ id, assets }) => {
    const asset = assets?.find(a => a.sys.id === id);

    if (!asset?.url) return null;

    return (
        <Image
            as={NextImage}
            src={`${asset.url}?fit=fill&w=2400&h=1260`}
            width={2400}
            height={1260}
            alt={asset.description}
            className="my-10"
        />
    );
};

interface RichTextRendererProps {
    description: DescriptionData;
}

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ description }) => {
    const options: {
        renderNode: {
            [key in BLOCKS]?: (node: any, children: React.ReactNode) => React.ReactNode
        }
    } = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <RichTextAsset id={node?.data?.target?.sys?.id} assets={description?.links?.assets?.block} />
            ),
            [BLOCKS.PARAGRAPH]: (_, children) => <p className='text-base my-4'>{children}</p>,
            [BLOCKS.HEADING_1]: (_, children) => <h1 className='text-4xl font-bold my-8'>{children}</h1>,
            [BLOCKS.HEADING_2]: (_, children) => <h2 className='text-3xl font-semibold my-6'>{children}</h2>,
            [BLOCKS.HEADING_3]: (_, children) => <h3 className='text-2xl font-semibold my-5'>{children}</h3>,
            [BLOCKS.HEADING_4]: (_, children) => <h4 className='text-xl font-medium mb-4 mt-10'>{children}</h4>,
            [BLOCKS.UL_LIST]: (_, children) => <ul className='space-y-1 list-inside list-disc'>{children}</ul>,
            [BLOCKS.OL_LIST]: (_, children) => <ol className='space-y-1 list-inside list-decimal'>{children}</ol>,
            [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const entryId = node.data.target.sys.id;
                const entry = description.links.entries.block.find(e => e.sys.id === entryId);
                if (!entry) return null;
                const highlightedCode = hljs.highlight(entry.code, { language: entry.language }).value;
                return (
                    <div className="my-10">
                        <p className="text-tiny uppercase font-bold text-secondary bg-gray-200 dark:bg-gray-900 px-4 pb-2 pt-3 rounded-t-lg">
                            <IconCodeCircle width={16} height={16} className="inline mr-1" />{entry.language}
                        </p>
                        <div className='syntax-custom overflow-x-auto border-x-2 border-b-2 rounded-b-lg dark:border-gray-900'>
                            <pre className='text-sm p-4'>
                                <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                            </pre>
                        </div>
                    </div>
                );
            }
        },
    };
    return documentToReactComponents(description.json, options);
};
