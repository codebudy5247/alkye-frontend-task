import EmailForm from "../_components/EmailForm";

const EmailPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 p-2">
        <h6 className="text-[#000000] text-lg">STEP1</h6>
        <h1 className="text-[#000000] font-bold font-test-soehne text-4xl leading-10">
          Enter your email address to continue
        </h1>
        <h6 className="text-[#000000] text-md">
          Log in to your account. If you don’t have one, you will be prompted to
          create one.
        </h6>
      </div>
      <div className="p-5">
        <EmailForm />
      </div>
    </>
  );
};

export default EmailPage;
