import { urlFor } from "@/sanity";
import { Post } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BookmarkIcon,
  MinusCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

interface Posts {
  posts: [Post];
}

export function Posts({ posts }: Posts) {
  return (
    <div className="mx-auto p-2">
      {posts &&
        React.Children.toArray(
          posts.map((post) => (
            <Link href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden border-b border-gray-200 pb-2">
                <div className="flex items-center p-5 text-black">
                  <div className="mb-2 ">
                    {/* avatar */}
                    <div className="flex space-x-2 mb-2">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[28px] mx-2 h-[28px] rounded-full object-cover"
                        src={urlFor(post.author.image.asset._ref).url()!}
                        alt={post.author.name}
                      />
                     <div className="flex items-center space-x-3"> <p className="text-lg">{post.author.name}</p>
                     <p className="text-xs text-gray-500">{post._createdAt} 5 months ago</p></div>
                    </div>

                    {/* title & description */}
                    <div className="mb-2">
                      <p className="text-lg font-bold">{post.title}</p>
                      <p className="text-xs">{post.description}</p>
                    </div>
                    {/* tags & buttons */}
                  <div className="flex items-center space-x-3 text-gray-500 justify-between">
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="bg-gray-200 px-2 py-1 rounded-md">
                        <span>#javascript</span>
                      </div>
                      <div>
                        <span>4min</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500">
                      <BookmarkIcon className="h-6 w-6" />
                      <MinusCircleIcon className="h-6 w-6" />
                      <EllipsisHorizontalIcon className="h-6 w-6" />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </Link>
          )),
        )}
    </div>
  );
}
