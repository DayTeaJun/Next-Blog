import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

function CategoryButton({ isCurrent, displayName, href, count }: Props) {
  return (
    <li>
      <Button asChild size="sm" variant={isCurrent ? 'default' : 'ghost'}>
        <Link href={href}>
          {displayName} ({count})
        </Link>
      </Button>
    </li>
  );
}

export default CategoryButton;
