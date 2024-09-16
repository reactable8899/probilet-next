import React, { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function ProviderClientIntl({ children, locale }: Props) {
  let messages;
  try {
    messages = (await import(`./../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
