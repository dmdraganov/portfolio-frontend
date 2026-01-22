import React, { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type AnchorLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  to?: never;
};

type RouterLinkButtonProps = LinkProps & {
  href?: never;
};

type LinkButtonProps = AnchorLinkButtonProps | RouterLinkButtonProps;

function isRouterProps(props: LinkButtonProps): props is RouterLinkButtonProps {
  return 'to' in props;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, ...props }, ref) => {
    const styles =
      'p-4 border border-secondary rounded-lg block hover:border-primary hover:bg-background-secondary transition-colors text-center';
    const anchorRef = ref as React.Ref<HTMLAnchorElement>;

    if (isRouterProps(props)) {
      const { to, ...rest } = props;

      return (
        <Link to={to} {...rest} ref={anchorRef} className={styles}>
          {children}
        </Link>
      );
    }

    const { href, ...rest } = props;

    return (
      <a
        href={href}
        {...rest}
        ref={anchorRef}
        className={styles}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
