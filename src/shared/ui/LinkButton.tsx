import React, { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type AnchorLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  to?: never;
};

type RouterLinkButtonProps = LinkProps & {
  href?: never;
};

type LinkButtonProps = (AnchorLinkButtonProps | RouterLinkButtonProps) & {
  children: React.ReactNode;
  className?: string;
};

const LinkButton = forwardRef<
  HTMLAnchorElement | HTMLAnchorElement,
  LinkButtonProps
>(({ className, children, ...props }, ref) => {
  const styles = `p-4 border rounded-lg block hover:bg-primary ${className || ''}`;

  if ('to' in props && props.to !== undefined) {
    const { to, ...rest } = props as RouterLinkButtonProps;
    return (
      <Link
        to={to}
        className={styles}
        {...rest}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  const { href, ...rest } = props as AnchorLinkButtonProps;

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={styles}
      {...rest}
      ref={ref as React.Ref<HTMLAnchorElement>}
    >
      {children}
    </a>
  );
});

export default LinkButton;
