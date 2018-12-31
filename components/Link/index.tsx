import Link, { LinkProps } from "next/link";
import React, { Children, FunctionComponent } from "react";
import { withRouter, WithRouterProps } from "next/router";

interface ActiveLink extends LinkProps, WithRouterProps {
  partial?: boolean;
}

export const match = (exact: boolean) => (href: string, pathname: string) => {
  if (exact) return pathname.includes(href);
  return href === pathname;
};

const ActiveLink: FunctionComponent<ActiveLink> = ({
  router,
  children,
  partial = false,
  ...props
}) => {
  const child = Children.only(children);

  let className = null;
  const test = match(partial);

  if (router && test(props.href as string, router.pathname)) {
    className = "active";
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
