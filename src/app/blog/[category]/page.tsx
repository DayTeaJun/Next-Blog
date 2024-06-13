import { getPostList } from '@/lib/post';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: { category: string };
};

const Category = async ({ params }: Props) => {
  const postList = await getPostList(params.category);

  return (
    <section className=" mx-auto w-[900px] h-[100vh] mt-8">
      <ul className="flex flex-row justify-between w-full">
        {postList.map((post) => (
          <li
            key={post.url}
            className="w-[400px] h-[350px] border  border-neutral-700 rounded-xl cursor-pointer"
          >
            <Link
              className=" w-full h-full  flex flex-col gap-3"
              href={post.url}
            >
              <div className=" relative aspect-video bg-neutral-600 rounded-t-xl">
                <Image
                  alt={post.title}
                  src={post.thumbnail}
                  fill
                  sizes="500px, 450px"
                  style={{
                    objectFit: 'cover',
                    padding: '16px',
                  }}
                />
              </div>
              <div className="flex flex-col gap-4 justify-between items-center">
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
                <p>{post.dateString}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
