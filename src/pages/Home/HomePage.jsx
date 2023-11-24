import React from "react";
import MainLayout from "../../components/MainLayout";
import ArticleCard from "../../components/ArticleCard";
import  Cta  from "/src/pages/Home/container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <ArticleCard />
      <Cta />
      <Hero />
    </MainLayout>
  );
};

export default HomePage;
