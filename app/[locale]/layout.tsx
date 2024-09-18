import "../../style/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });
import { useLocale } from "next-intl";
import ProviderClientIntl from "@/components/provider/provider-client-intl";
import LoadingScreen from "./loading";
import Carcas from "@/components/ui/carcas";
import { ConfigProvider } from "antd";
import { QueryWrapper } from "@/providers/QueryWrapper";

export const metadata: Metadata = {
  title: "Probilet KASSA",
  description: "desc",
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <QueryWrapper>
      <html lang="en">
        <body className={inter.className}>
          <ProviderClientIntl locale={params.locale}>
            <AntdRegistry>
              <Suspense fallback={<LoadingScreen />}>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#dc153d",
                    },
                  }}
                >
                  <Carcas children={children} />
                </ConfigProvider>
              </Suspense>
            </AntdRegistry>
          </ProviderClientIntl>
        </body>
      </html>
    </QueryWrapper>
  );
};

export default RootLayout;
