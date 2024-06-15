import React from 'react';
type Props = {
  params: { category: string; slug: string };
};

function Slug({ params: { category, slug } }: Props) {
  return (
    <>
      <div>{category}</div>
      <div>{slug}</div>
    </>
  );
}

export default Slug;
