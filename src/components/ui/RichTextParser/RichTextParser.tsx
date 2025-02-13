import { JSX } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';
import { IRichTextContent } from '@/interfaces/newsInstanse.localization';

import Heading from '../Heading/Heading';
import { THeading } from '../Heading/Heading.props';

import styles from './RichTextParser.module.scss';

const RichTextParser = ({ node }: { node: IRichTextContent }): JSX.Element => {
  switch (node.type) {
    case 'heading': {
      return (
        <Heading
          heading={('h' + node.level) as THeading}
          textColor={EColor.dark}
          className={clsx(styles.title, styles[`titleH${node.level}`], {
            ['font-bold']: node.bold,
            ['italic']: node.italic,
            ['underline']: node.underline,
            ['line-through']: node.strikethrough,
          })}
        >
          {node.children?.map((child, i) => (
            <RichTextParser key={i} node={child} />
          ))}
        </Heading>
      );
    }
    case 'text': {
      // Render plain text
      return (
        <span
          className={clsx({
            ['font-bold']: node.bold,
            ['italic']: node.italic,
            ['underline']: node.underline,
            ['line-through']: node.strikethrough,
          })}
        >
          {node.text}
        </span>
      );
    }
    case 'paragraph': {
      // Render paragraph with children
      return (
        <p
          className={clsx(styles.paragraph, {
            ['font-bold']: node.bold,
            ['italic']: node.italic,
            ['underline']: node.underline,
            ['line-through']: node.strikethrough,
          })}
        >
          {node.children?.map((child, i) => (
            <RichTextParser key={i} node={child} />
          ))}
        </p>
      );
    }
    case 'link': {
      return (
        <a href={node.url} target='_blank' className={styles.link}>
          {node.children?.map((child, i) => (
            <RichTextParser key={i} node={child} />
          ))}
        </a>
      );
    }
    case 'list': {
      // Render a list
      return (
        <ul
          className={clsx(styles.list, {
            ['list-disc']: node.format === 'unordered',
            ['list-decimal']: node.format === 'ordered',
          })}
        >
          {node.children?.map((child, i) => (
            <RichTextParser key={i} node={child} />
          ))}
        </ul>
      );
    }
    case 'list-item': {
      // Render a list
      return (
        <li>
          {node.children?.map((child, i) => (
            <RichTextParser key={i} node={child} />
          ))}
        </li>
      );
    }
    default:
      return <span>{node.text}</span>; // Default rendering for unsupported types
  }
};

export default RichTextParser;
