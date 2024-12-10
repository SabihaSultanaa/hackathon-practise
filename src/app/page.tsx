import Category from "@/components/category";
import Feature from "@/components/feature";
import FlashSale from "@/components/flashSale";
import Hero from "@/components/hero";
import Month from "@/components/month";
import OurProducts from "@/components/ourProducts";
import Service from "@/components/service";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="px-[135px]">
      <Hero/>
      <FlashSale/>
      <Category/>
      <Month/>
      <OurProducts/>
      <Feature/>
      <Service/>
    </div>
    </>
  );
}
