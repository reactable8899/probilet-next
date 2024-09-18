"use client";
import React, { ReactNode, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Auth } from "@/components/blocks/Auth/Auth";
import { useQueryParams } from "@/hooks/useQueryParams";
import { STEPS } from "@/constants/enums";
import { useGetApiV1CustomerProfile } from "@/api/requests/customer/customer";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";

interface IAuthWrapper {
  children?: ReactNode;
}

export const AuthWrapper: React.FC<IAuthWrapper> = (props) => {
  const { params, updateSearchParams } = useQueryParams();
  const { setUser } = useUserStore();
  const step = params.get("step");

  const { setShowAuth, setIsLoggedIn, setAuthShown, authShown, showAuth } =
    useAuthStore();

  const profile = useGetApiV1CustomerProfile({
    query: {
      retry: false,
    },
  });

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (profile.status === "success") {
      setShowAuth(false);
      updateSearchParams("step", undefined);
      setIsLoggedIn(true);
      setUser(profile.data);
    } else if (
      profile.status === "error" &&
      profile?.error?.response?.status === 401 &&
      !refreshToken
    ) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      setUser(null);
    }
  }, [profile.status]);

  const onClose = () => {
    setShowAuth(false);
  };

  const openSignInModal = useMemo(() => {
    if (showAuth && !!step) {
      return true;
    }
  }, [, showAuth, step]);

  return (
    <>
      {props.children}
      {!!step && <Auth onClose={onClose} open={openSignInModal} />}
    </>
  );
};
