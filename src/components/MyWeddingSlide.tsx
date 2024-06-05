import MAIN_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_MAIN.png";

const MyWeddingSlide = (): JSX.Element => {
  // todo : 캐러셀 아래로 스크롤 시 작동하도록

  return (
    <>
      <img src={MAIN_PAGE} className="w-full object-fill"></img>
    </>
  );
};

export default MyWeddingSlide;
