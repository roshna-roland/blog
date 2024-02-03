import PostPreview from "./components/PostPreview";
import getPostMetadata from "./components/getPostMetadata";


const HomePage = () => {
  const PostMetadata = getPostMetadata();
  const postPreviews = PostMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-4 gap-4 w-full">{postPreviews}</div>
    </div>
  );
};

export default HomePage;