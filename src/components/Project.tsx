import { useAtom } from "jotai";
import MyWeddingProject from "./MyWeddingProject";
import { projectAtom, projectType } from "../store/project";
import { useEffect } from "react";
import { PROJECT } from "../constants/storage";
import StudyBadgeProject from "./StudyBadgeProject";
import PicktossProject from "./PicktossProject";

const Project = (): JSX.Element => {
  const [projectState, setProject] = useAtom(projectAtom);
  const currentProject = sessionStorage.getItem(PROJECT) as projectType;

  useEffect(() => {
    if (currentProject) {
      console.log(currentProject);
      setProject(() => currentProject);
    } else {
      setProject(() => "Picktoss");
    }

    return sessionStorage.removeItem(PROJECT);
  }, []);

  return (
    <div className="w-screen max-w-[1149px] flex flex-col justify-center items-center pb-32">
      <div className="w-full flex justify-center items-center mb-8">
        <button
          className={`btn btn-xs sm:btn-sm md:btn-md ${projectState === "Picktoss" && "btn-active"} btn-ghost text-center`}
          onClick={() => {
            setProject(() => "Picktoss");
            sessionStorage.setItem(PROJECT, "Picktoss");
          }}
        >
          PICKTOSS
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
      </div>
      {projectState === "MyWedding" && <MyWeddingProject />}
      {projectState === "Picktoss" && <PicktossProject />}
      {projectState === "StudyBadge" && <StudyBadgeProject />}
    </div>
  );
};

export default Project;
