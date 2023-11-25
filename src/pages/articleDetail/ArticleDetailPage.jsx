import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import Images from "../../assets/post.jpg";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postData = [
  {
    _id: "1",
    Image: Images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-20T15:35:53.607+0000",
  },
  {
    _id: "2",
    Image: Images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-20T15:35:53.607+0000",
  },
  {
    _id: "3",
    Image: Images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-20T15:35:53.607+0000",
  },
  {
    _id: "4",
    Image: Images.PostImage,
    title: "Help children get better education",
    createdAt: "2023-01-20T15:35:53.607+0000",
  },
];

const tagsData = ["Medical", "Lifestyle", "Healthy", "Education"];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img className="rounded-xl w-full" src={Images} alt="pen&paper" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base "
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ex
              dolorum. Hic, porro illo. Quam, laudantium inventore? Sequi ullam
              laboriosam velit, dolores non, perspiciatis voluptatem nobis, quo
              totam ipsum dolore?
            </p>
          </div>
          <CommentsContainer className="mt-10" logginedUseId="a" />
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
