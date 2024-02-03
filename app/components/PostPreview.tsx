import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-yellow-400 p-4 rounded-3xl shadow-sm"
    >

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-red-400 text-xl hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-400">{props.date}</p>
      <p className="text-slate-500">{props.author}</p>
    </div>
  );
};

export default PostPreview;