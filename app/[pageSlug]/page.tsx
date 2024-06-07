"use client";
import { usePageBySlug } from "@/cms-services/get-pages-by-slug";
import GridItem from "@/components/GridItem";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import SectionContainer from "@/components/SectionContainer";
import { urlForImage } from "@/sanity/lib/image";
import { Image as ImageIcon } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { pageSlug } = useParams<{ pageSlug: string }>();
  const { error, loading, page } = usePageBySlug(pageSlug);
  if (loading) {
    return (
      <>
        <SectionContainer className="mb-0 mt-0">
          <div className="grid gap-6 grid-cols-3">
            <GridItem className=" lg:col-span-2 col-span-3  pt-20">
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-neutral-700 max-w-[360px]  mb-4"></div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-neutral-700 w-48 mb-2.5"></div>
                <span className="sr-only">Loading...</span>
              </div>
            </GridItem>
            <GridItem className="lg:block hidden p-0">
              <div
                role="status"
                className="flex items-center justify-center h-full w-full max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-neutral-700"
              >
                {/*  */}
                <ImageIcon />
                <span className="sr-only">Loading...</span>
              </div>
            </GridItem>
          </div>
        </SectionContainer>
      </>
    );
  }
  if(!page) redirect("/")
  return (
    <>
      {page && (
        <Hero
          heroImage={
            page?.heroImage ? urlForImage(page.heroImage.asset._ref) : undefined
          }
          description={""}
          title={page.title}
        />
      )}
      {page?.projects && page?.projects.length >= 0 && (
        <Projects
          projects={page.projects}
          title={`${page.title} WEBSITE EXAMPLES.`}
        />
      )}
    </>
  );
};

export default Page;
