import Head from 'next/head';
import cn from 'classnames';
import Seo from './seo';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Page({
  title,
  description,
  children,
  className,
  ...props
}: IProps) {
  return (
    <>
      <Seo/>
      <div className={cn('min-h-full selection:bg-gray-800 selection:text-white', className)} {...props}>
        {children}
      </div>
    </>
  );
}
