import ServicePackages from "@/components/ServicePackages/ServicePackages";

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/src/assets/service-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ServicePackages />
    </div>
  );
};

export default Services;
