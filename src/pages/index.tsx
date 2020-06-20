import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next/types";

import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";
import { IAllPostData } from "../lib/posts";

import utilStyles from "../styles/utils.module.css";
import { useEffect, useState } from "react";

export default function Home({
  allPostsData,
}: {
  allPostsData: IAllPostData[];
}) {
  const [state, setState] = useState("");
  useEffect(() => {
    const a = fetch("/api")
      .then((res) => res.json())
      .then((res) => setState(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout home>
      <Head>
        <title>Starter Next-Express-TS</title>
      </Head>
      <section className={utilStyles.headingMd}>{`${JSON.stringify(
        state
      )}`}</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
