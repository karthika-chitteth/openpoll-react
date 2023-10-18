import logo from "../assets/logo.svg";

const BrandHeader = () => {
  return (
    <>
      <div className="flex justify-center py-5 bg-[#1F1C46]">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default BrandHeader;
