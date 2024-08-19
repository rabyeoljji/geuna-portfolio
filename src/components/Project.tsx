import { useAtom } from "jotai";
import MyWeddingProject from "./MyWeddingProject";
import { projectAtom, projectType } from "../store/project";
import ReactShopProject from "./ReactShopProject";
import { useEffect } from "react";
import { PROJECT } from "../constants/storage";
import StudyBadgeProject from "./StudyBadgeProject";

const Project = (): JSX.Element => {
  const [projectState, setProject] = useAtom(projectAtom);
  const currentProject = sessionStorage.getItem(PROJECT) as projectType;

  useEffect(() => {
    if (currentProject) {
      console.log(currentProject);
      setProject(() => currentProject);
    } else {
      setProject(() => "StudyBadge");
    }

    return sessionStorage.removeItem(PROJECT);
  }, []);

  return (
    <div className="w-screen max-w-[1149px] flex flex-col justify-center items-center pb-32">
      <div className="w-full flex justify-center items-center mb-8">
        <button
          className={`btn btn-xs sm:btn-sm md:btn-md ${projectState === "ReactShop" && "btn-active"} btn-ghost text-center`}
          onClick={() => {
            setProject(() => "ReactShop");
            sessionStorage.setItem(PROJECT, "ReactShop");
          }}
        >
          REACT SHOP
        </button>
        <div className="divider divider-horizontal m-0"></div>
        <button
          className={`btn btn-xs sm:btn-sm md:btn-md ${projectState === "MyWedding" && "btn-active"} btn-ghost text-center`}
          onClick={() => {
            setProject(() => "MyWedding");
            sessionStorage.setItem(PROJECT, "MyWedding");
          }}
        >
          MY WEDDING
        </button>
        <div className="divider divider-horizontal m-0"></div>
        <button
          className={`btn btn-xs sm:btn-sm md:btn-md ${projectState === "StudyBadge" && "btn-active"} btn-ghost text-center`}
          onClick={() => {
            setProject("StudyBadge");
            sessionStorage.setItem(PROJECT, "StudyBadge");
          }}
        >
          STUDY BADGE
        </button>
      </div>
      {projectState === "MyWedding" && <MyWeddingProject />}
      {projectState === "ReactShop" && <ReactShopProject />}
      {projectState === "StudyBadge" && <StudyBadgeProject />}
    </div>
  );
};

export default Project;
