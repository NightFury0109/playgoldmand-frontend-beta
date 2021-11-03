import React from 'react'
import cb from 'classnames'
import NextLink from 'next/link'

export default function Link(
  { children, className, href, external } : {
    children: JSX.Element | JSX.Element[]
    className?: string,
    href: string,
    external?: boolean
  }
): JSX.Element {
  const linkClassNames = cb(
    'focus-visible:ring-1 focus-visible:ring-inset',
    'focus-visible:ring-primary',
    'cursor-pointer',
    className
  )
  if (external)
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={linkClassNames}
      >
        {children}
      </a>
    )
  return (
    <NextLink href={href} passHref>
      <div className={linkClassNames}>
        {children}
      </div>
    </NextLink>
  )
}