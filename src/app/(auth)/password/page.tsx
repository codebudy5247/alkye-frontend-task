import PasswordForm from "../_components/PasswordForm";

const PasswordPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 p-2">
        <h6 className="text-[#000000] text-lg">STEP2</h6>
        <h1 className="text-[#000000] font-bold font-test-soehne text-4xl leading-10">
          Create an account to continue
        </h1>
        <h6 className="text-[#000000] text-md">
          You will able to log in to Dingoo with this email address and password.
        </h6>
      </div>
      <div className="p-5">
        <PasswordForm />
      </div>
    </>
  );
};

export default PasswordPage;
