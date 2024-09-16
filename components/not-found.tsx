import Header from "@/components/content/header/header";
import { getEquipmentCategory } from "@/http/equipment";
import { getFooterInfo, getSocialLinks } from "@/http/main";
import { getServiceCategory } from "@/http/service";
import { getAllSports } from "@/http/sport";
import { useLocale } from "next-intl";
import Footer from "@/components/content/footer";

const NotFound = async ({params}:any) => {
  const locale = useLocale();
  const footerInfo = await getFooterInfo(params.locale);
  const serviceData: any = await getServiceCategory(
    params.locale,
  );
  const equipmentData: any = await getEquipmentCategory(
    params.locale,
  );
  const sportsData = await getAllSports(params.locale);
  const socialLinks = await getSocialLinks();
  return (
    <div>
      <Header
        serviceData={serviceData}
        equipmentData={equipmentData}
        sportsData={sportsData}
        locale={params.locale}
      />
      <div></div>
      <Footer
        locale={params.locale}
        footerInfo={footerInfo}
        links={socialLinks}
      />
    </div>
  )
}

export default NotFound;