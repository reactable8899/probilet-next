import { ConfigProvider, Button } from "antd";
interface Props {
  searchParams: { page: string };
  params: { locale: string };
}

const Page = async ({ params, searchParams }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#dc153d",
        },
      }}
    >
      {/* <Component {...pageProps} /> */} asfsf{" "}
      <Button type="primary">asfasf</Button>
    </ConfigProvider>
  );
};

export default Page;
