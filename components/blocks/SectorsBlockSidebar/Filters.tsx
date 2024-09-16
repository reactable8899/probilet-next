"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/router";
import { useForm, useWatch } from "react-hook-form";
import { FormGenerator } from "@/components/custom/FormItem/FormItem";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useParams } from "next/navigation";
import { useGetApiV1EventEventgroupIdPaged } from "@/api/requests/event/event";
import moment from "moment";
import { useGetApiV1EventpriceruleEventIdPaged } from "@/api/requests/event-price-rule/event-price-rule";
import { customUpdateSearchParams, formatPrice } from "@/lib/utils";

interface IFilters {}

export const Filters: React.FC<IFilters> = (props) => {
  const t = useTranslations();
  const methods = useForm();
  const { params, updateSearchParams } = useQueryParams();

  const { id } = useParams();
  const activeEventId = params.get("active_event");
  const activePriceRuleId = params.get("price");

  const events = useGetApiV1EventEventgroupIdPaged(
    +id!,
    {
      page: 1,
      page_size: 10,
    },
    {
      query: {
        enabled: !!id,
        select: (data) =>
          data?.results?.map((item) => ({
            title: `${moment(item.started_at).locale("ru").format("DD MMM")} | ${moment(item.started_at).locale("ru").format("HH:mm")}`,
            value: String(item.id!),
          })),
      },
    }
  );

  const prices = useGetApiV1EventpriceruleEventIdPaged(
    +id!,
    {
      page: 1,
      page_size: 10,
    },
    {
      query: {
        enabled: !!id,
        select: (data) =>
          data?.results?.map((item) => ({
            title: String(formatPrice(item.price) + " " + t("sum")),
            value: String(item.id),
          })),
      },
    }
  );

  useEffect(() => {
    if (events?.status === "success" && activeEventId) {
      methods.setValue("event", activeEventId);
      if (activePriceRuleId) {
        methods.setValue("price", activePriceRuleId);
      }
    }
  }, [events, activeEventId, activePriceRuleId]);

  useEffect(() => {
    const price = methods.getValues().price;
    if (price) {
      customUpdateSearchParams({ price: price });
    } else if (!price) {
      customUpdateSearchParams({ price: undefined });
    }
  }, [useWatch({ control: methods.control, name: "price" })]);

  useEffect(() => {
    const event = methods.getValues().event;
    if (event) {
      customUpdateSearchParams({ active_event: event });
    }
  }, [useWatch({ control: methods.control, name: "event" })]);

  return (
    <div className={"w-full space-y-1.5"}>
      <Form {...methods}>
        <form className={"md:space-y-1.5 max-md:flex max-md:gap-md"}>
          <div className={"md:w-full max-md:w-[50%]"}>
            <FormGenerator
              control={methods.control}
              name={"event"}
              options={events?.data ?? []}
              type={"select"}
            />
          </div>

          <div className={"md:w-full max-md:w-[50%]"}>
            <FormGenerator
              control={methods.control}
              name={"price"}
              placeholder={t("price_not_selected")}
              options={prices?.data ?? []}
              type={"select"}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
