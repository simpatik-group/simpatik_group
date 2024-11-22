import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from 'react';

interface IBreaks
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  description: string;
  boldParagraphs?: number[] | true;
}

export const Breaks: FC<IBreaks> = ({ description, boldParagraphs }) => {
  const lines = description.split('\n');
  const parseBr = (line: string, index: number) => {
    return index !== description.split('\n').length - 1 ? (
      <>
        {line}
        <br />
      </>
    ) : (
      <>{line}</>
    );
  };
  return (
    <>
      {lines.map((line, index) => {
        const isLastLine = index === lines.length - 1;
        const shouldBold =
          boldParagraphs === true
            ? isLastLine
            : Array.isArray(boldParagraphs) && boldParagraphs.includes(index);

        return (
          <Fragment key={index}>
            {shouldBold ? (
              <span className='font-semibold'>{parseBr(line, index)}</span>
            ) : (
              parseBr(line, index)
            )}
          </Fragment>
        );
      })}
    </>
  );
};
