import Image from "next/image";
import Logo from "../../public/logo/Logo.png";
import Footer from "@/components/Footer";

const SignupLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="bg-[#F4F4F4] p-10">
      <main>
        <div className="bg-[#FFFFFF] rounded-2xl px-10 py-20">
          <Image src={Logo} alt="logo" width={90} height={40} />
          <div className="grid md:grid-cols-[3fr_4fr] mt-10">{children}</div>
        </div>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default SignupLayout;
