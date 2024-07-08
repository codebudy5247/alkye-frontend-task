import Logo from "@/public/logo/Logo_white.png";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UserName from "./_components/UserName";
import ArcticleList from "./_components/ArcticleList";
import { apiService } from "@/services";
import Footer from "@/components/Footer";

const HomePage = async () => {
  const cookieStore = cookies();
  let cookiesVal = cookieStore.get("user")?.value!;

  //IF not get token,redirect user to login page
  if (!cookiesVal) {
    redirect(`/email`);
  }
  // Get current login user
  let currentUser = JSON.parse(cookiesVal);

  // Get all articles
  const articlesRes = await apiService.getArcticle(currentUser.token);
  const articles: Article[] = articlesRes?.data;

  return (
    <>
      <div className="bg-black mx-auto px-20 py-10">
        <Image src={Logo} alt="logo" width={100} height={50} />
        <UserName user={currentUser} />
        <h1 className="font-test-soehne text-xl text-white mt-5">
          Hope you having a good day!
        </h1>

        <h1 className="font-test-soehne text-2xl text-white mt-10">
          Photography
        </h1>

        <div className="mt-5">
          <ArcticleList articles={articles} prompt={"Photography"} />
        </div>

        <h1 className="font-test-soehne text-2xl text-white mt-10">Learning</h1>

        <div className="mt-5">
          <ArcticleList articles={articles} prompt={"Learning"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
