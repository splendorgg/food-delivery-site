import Banner from "@/components/Banner";
import Cities from "@/components/Cities";
import DeliveryBanner from "@/components/DeliveryBanner";
import MobileBanner from "@/components/MobileBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Cities></Cities>
      <MobileBanner></MobileBanner>
      <DeliveryBanner></DeliveryBanner>
    </>
  );
}
