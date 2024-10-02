import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";

import os from "../../../public/icons/os.svg";
import cpu from "../../../public/icons/cpu.svg";
import ram from "../../../public/icons/ram.svg";
import ssd from "../../../public/icons/ssd.svg";
import bandwidth from "../../../public/icons/speed.svg";
import ip from "../../../public/icons/ip.svg";
import license from "../../../public/icons/license.svg";
import { Link } from "react-router-dom";

// type Props = {};

const ServicePackages = () => {
  return (
    <div className="relative flex flex-col  h-full w-full p-4">
      <Tabs
        defaultValue="vps"
        className="w-full flex flex-col justify-center items-center ease-in"
      >
        <TabsList>
          <TabsTrigger value="vps">VPS</TabsTrigger>
          <TabsTrigger value="rdp">RDP</TabsTrigger>
        </TabsList>
        <TabsContent value="vps">
          <div className=" text-white rounded-md">
            <div className="text-center py-2">
              <h5 className="text-2xl text-blue-200 uppercase">Next Level</h5>
              <h1 className="text-3xl font-bold uppercase">Bulletproof VPS</h1>
            </div>

            <div className="grid group md:grid-cols-2 mx-auto gap-8 text-center">
              {/* Hyper Linux*/}
              <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100 bg-white/10 p-8 rounded-xl mix-blend-luminosity">
                <Badge variant="destructive">HYPERDRIVE </Badge>
                <h4 className="text-2xl font-bold mx-auto my-4 tracking-widest ">
                  Hyper Linux 🚀
                </h4>

                {/* Pricing */}
                <h1 className="text-4xl font-bold my-5">
                  $50<span className="text-lg text-gray-300">/month</span>{" "}
                </h1>

                {/* OS */}
                <div className="flex items-center justify-start gap-2">
                  <img src={os} alt="os" width={25} />
                  <p>Any Linux Distro</p>
                </div>
                <Separator className="my-1 " />

                {/* CPU */}
                <div className="flex items-center justify-start gap-2">
                  <img src={cpu} alt="cpu" width={25} />
                  <p>4 Cores</p>
                </div>
                <Separator className="my-1" />
                {/* RAM */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ram} alt="ram" width={25} />
                  <p>16 GB DDR4</p>
                </div>
                <Separator className="my-1" />
                {/* SSD */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ssd} alt="ssd" width={25} />
                  <p>250GB NVMe SSD</p>
                </div>
                <Separator className="my-1" />
                {/* Bandwidth */}
                <div className="flex items-center justify-start gap-2">
                  <img src={bandwidth} alt="bandwidth" width={25} />
                  <p>Unlimited Bandwidth</p>
                </div>
                <Separator className="my-1" />
                {/* IP */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ip} alt="ip" width={25} />
                  <p>Dedicated IP</p>
                </div>
                <Separator className="my-1" />
                {/* License */}
                <div className="flex items-center justify-start gap-2">
                  <img src={license} alt="license" width={25} />
                  <p>Renewable (Up to 2 Years)</p>
                </div>
                <Separator className="my-1" />

                <Link to={"payment"}>
                  <Button>Purchase</Button>
                </Link>
              </div>

              {/*Blaze Linux */}
              <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100 bg-white/10 p-8 rounded-xl mix-blend-luminosity">
                <Badge variant="destructive" className="">
                  VOLCANO
                </Badge>
                <h4 className="text-2xl font-bold mx-auto my-4 tracking-widest">
                  Blaze Linux🔥
                </h4>

                {/* Pricing */}
                <h1 className="text-4xl font-bold my-5">
                  $40<span className="text-lg text-gray-300">/month</span>{" "}
                </h1>

                {/* OS */}
                <div className="flex items-center justify-start gap-2">
                  <img src={os} alt="os" width={25} />
                  <p>Any Linux Distro</p>
                </div>
                <Separator className="my-1 " />

                {/* CPU */}
                <div className="flex items-center justify-start gap-2">
                  <img src={cpu} alt="cpu" width={25} />
                  <p>4 Cores</p>
                </div>
                <Separator className="my-1" />
                {/* RAM */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ram} alt="ram" width={25} />
                  <p>8 GB DDR4</p>
                </div>
                <Separator className="my-1" />
                {/* SSD */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ssd} alt="ssd" width={25} />
                  <p>150GB NVMe SSD</p>
                </div>
                <Separator className="my-1" />
                {/* Bandwidth */}
                <div className="flex items-center justify-start gap-2">
                  <img src={bandwidth} alt="bandwidth" width={25} />
                  <p>Unlimited Bandwidth</p>
                </div>
                <Separator className="my-1" />
                {/* IP */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ip} alt="ip" width={25} />
                  <p>Dedicated IP</p>
                </div>
                <Separator className="my-1" />
                {/* License */}
                <div className="flex items-center justify-start gap-2">
                  <img src={license} alt="license" width={25} />
                  <p>Renewable (Up to 2 Years)</p>
                </div>
                <Separator className="my-1" />

                <Link to={"payment"}>
                  <Button>Purchase</Button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="rdp">
          <div className=" text-white rounded-md">
            <div className="text-center py-2">
              <h5 className="text-2xl  text-blue-200 uppercase">Top Notch</h5>
              <h1 className="text-3xl font-bold uppercase">RDP Reapers</h1>
            </div>

            <div className="grid group md:grid-cols-2 mx-auto gap-8 text-center">
              {/* RDP Supreme*/}
              <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100 bg-white/10 p-8 rounded-xl mix-blend-luminosity">
                <Badge variant="destructive">Diamond</Badge>
                <h4 className="text-2xl font-bold mx-auto my-4 tracking-widest ">
                  RDP Supreme 💎
                </h4>

                {/* Pricing */}
                <h1 className="text-4xl font-bold my-5">
                  $60<span className="text-lg text-gray-300">/month</span>{" "}
                </h1>

                {/* OS */}
                <div className="flex items-center justify-start gap-2">
                  <img src={os} alt="os" width={25} />
                  <p>Any Windows OS</p>
                </div>
                <Separator className="my-1 " />

                {/* CPU */}
                <div className="flex items-center justify-start gap-2">
                  <img src={cpu} alt="cpu" width={25} />
                  <p>4 Cores</p>
                </div>
                <Separator className="my-1" />
                {/* RAM */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ram} alt="ram" width={25} />
                  <p>16 GB DDR4</p>
                </div>
                <Separator className="my-1" />
                {/* SSD */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ssd} alt="ssd" width={25} />
                  <p>400GB NVMe SSD</p>
                </div>
                <Separator className="my-1" />
                {/* Bandwidth */}
                <div className="flex items-center justify-start gap-2">
                  <img src={bandwidth} alt="bandwidth" width={25} />
                  <p>Unlimited Bandwidth</p>
                </div>
                <Separator className="my-1" />
                {/* IP */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ip} alt="ip" width={25} />
                  <p>Dedicated IP</p>
                </div>
                <Separator className="my-1" />
                {/* License */}
                <div className="flex items-center justify-start gap-2">
                  <img src={license} alt="license" width={25} />
                  <p>Renewable (Up to 2 Years)</p>
                </div>
                <Separator className="my-1" />

                <Link to={"payment"}>
                  <Button>Purchase</Button>
                </Link>
              </div>

              {/*RDP Titan */}
              <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100 bg-white/10 p-8 rounded-xl mix-blend-luminosity">
                <Badge variant="destructive">GOLD</Badge>
                <h4 className="text-2xl font-bold mx-auto my-4 tracking-widest">
                  RDP Titan✨
                </h4>

                {/* Pricing */}
                <h1 className="text-4xl font-bold my-5">
                  $40<span className="text-lg text-gray-300">/month</span>{" "}
                </h1>

                {/* OS */}
                <div className="flex items-center justify-start gap-2">
                  <img src={os} alt="os" width={25} />
                  <p>Any Windows OS</p>
                </div>
                <Separator className="my-1 " />

                {/* CPU */}
                <div className="flex items-center justify-start gap-2">
                  <img src={cpu} alt="cpu" width={25} />
                  <p>4 Cores</p>
                </div>
                <Separator className="my-1" />
                {/* RAM */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ram} alt="ram" width={25} />
                  <p>8 GB DDR4</p>
                </div>
                <Separator className="my-1" />
                {/* SSD */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ssd} alt="ssd" width={25} />
                  <p>150GB NVMe SSD</p>
                </div>
                <Separator className="my-1" />
                {/* Bandwidth */}
                <div className="flex items-center justify-start gap-2">
                  <img src={bandwidth} alt="bandwidth" width={25} />
                  <p>Unlimited Bandwidth</p>
                </div>
                <Separator className="my-1" />
                {/* IP */}
                <div className="flex items-center justify-start gap-2">
                  <img src={ip} alt="ip" width={25} />
                  <p>Dedicated IP</p>
                </div>
                <Separator className="my-1" />
                {/* License */}
                <div className="flex items-center justify-start gap-2">
                  <img src={license} alt="license" width={25} />
                  <p>Renewable (Up to 2 Years)</p>
                </div>
                <Separator className="my-1" />

                <Link to={"payment"}>
                  <Button>Purchase</Button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicePackages;
