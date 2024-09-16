import { Typography } from "antd";
import { FC, ReactNode } from "react";

const { Title } = Typography;

interface IPageTitlePage {
  title: string;
  children: ReactNode;
  extra?: ReactNode;
}

const PageTitle: FC<IPageTitlePage> = ({ title, children, extra }) => {
  return (
    <div
      className={"bg-white"}
      style={{ padding: "24px 33px", borderRadius: "20px" }}
    >
      <header className={"flex items-center justify-between"}>
        <Title className={"!mb-0"} level={3}>
          {title}
        </Title>
        <div>{extra}</div>
      </header>
      <div className={"mt-6"}>{children}</div>
    </div>
  );
};

export default PageTitle;
