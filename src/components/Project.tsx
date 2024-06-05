import MyWeddingSlide from "./MyWeddingSlide";

const Project = (): JSX.Element => {
  return (
    <div className="w-screen max-w-[1149px] flex flex-col justify-center items-center pb-32">
      <header className="w-full flex flex-col items-start px-20 mt-16 mb-80 justify-self-start">
        <p>CLONE CODING</p>
        <h2 className="text-7xl font-extrabold">REACT SHOP</h2>
      </header>
      <div className="mockup-browser border bg-base-300 w-4/5 h-[35vw]">
        <div className="mockup-browser-toolbar">
          <div className="input">https://react-shop-geunana.vercel.app/</div>
        </div>
        <div className="h-full flex justify-center pb-12 bg-base-200">
          <MyWeddingSlide />
        </div>
      </div>
    </div>
  );
};

export default Project;
