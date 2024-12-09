import Banner from "@/components/HomePage/Banner";
import Cities from "@/components/HomePage/Cities";
import DeliveryBanner from "@/components/HomePage/DeliveryBanner";
import MobileBanner from "@/components/HomePage/MobileBanner";

export default function Home() {
  return (
    <>
        <Banner></Banner>
        <Cities></Cities>
        <MobileBanner></MobileBanner>
        <DeliveryBanner></DeliveryBanner>
    </>
  );
}
