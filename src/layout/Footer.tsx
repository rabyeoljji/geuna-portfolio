const Footer = (): JSX.Element => {
  return (
    <div className="w-screen h-40 flex justify-center items-center bg-base-300 text-xs">
      <div className="w-4/5 flex flex-col justify-center items-center">
        <p>ⓒ Copyright 2024. created by NaGeuna</p>
        <p>React, Tailwind CSS, daisyUI, Framer-motion을 기반으로 제작된 사이트입니다.</p>
      </div>
    </div>
  );
};

export default Footer;
