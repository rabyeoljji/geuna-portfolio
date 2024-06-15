import { motion } from "framer-motion";
import { spring } from "../animation/index_ani";
import { useState } from "react";

const Contact = (): JSX.Element => {
  const [githubIsHovered, setGithubIsHovered] = useState(false);
  const [blogIsHovered, setBlogIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ spring }}
        className="inline-block w-fit text-6xl font-extrabold my-24 mt-48"
      >
        CONTACT
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ spring }}
        className="w-full flex flex-col pad:flex-row justify-between items-center md:px-8"
      >
        <motion.div
          className="card w-full pad:w-1/3 min-w-40 h-[50vh] md:h-[60vh] lg:h-[80vh] shrink-1 bg-base-100 shadow-xl mr-2 mb-4"
          onHoverStart={() => setGithubIsHovered(() => true)}
          onHoverEnd={() => setGithubIsHovered(() => false)}
        >
          <figure className=" h-1/2 p-4 bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              className={`bi bi-github ${githubIsHovered ? "scale-110" : ""} transition-all`}
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Github</h2>
            <p className="w-full text-wrap whitespace-nowrap break-all">https://github.com/rabyeoljji</p>
            <div className="card-actions justify-center mt-4">
              <a
                className="btn btn-neutral"
                href="https://github.com/rabyeoljji"
                target="_black"
                rel="noopener noreferrer"
              >
                Go To Github
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card w-full pad:w-1/3 min-w-40 h-[50vh] md:h-[60vh] lg:h-[80vh] shrink-1 bg-base-100 shadow-xl mx-2 mb-4"
          onHoverStart={() => setBlogIsHovered(() => true)}
          onHoverEnd={() => setBlogIsHovered(() => false)}
        >
          <figure className="w-full h-1/2 p-4 bg-base-200">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              className={`${blogIsHovered ? "scale-110" : ""} transition-all`}
            >
              <title>Velog</title>
              <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" />
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blog</h2>
            <p className="w-full text-wrap whitespace-nowrap break-all">https://velog.io/@rabyeoljji/series</p>
            <div className="card-actions justify-center mt-4">
              <a
                className="btn btn-neutral"
                href="https://velog.io/@rabyeoljji/series"
                target="_black"
                rel="noopener noreferrer"
              >
                Go To Blog
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card w-full pad:w-1/3 min-w-40 h-[50vh] md:h-[60vh] lg:h-[80vh] shrink-1 bg-base-100 shadow-xl ml-2 mb-4"
          onHoverStart={() => setEmailIsHovered(() => true)}
          onHoverEnd={() => setEmailIsHovered(() => false)}
        >
          <figure className="h-1/2 p-4 bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              className={`bi bi-envelope-at ${emailIsHovered ? "scale-110" : ""} transition-all`}
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Email</h2>
            <p className="w-full text-wrap whitespace-nowrap break-all">nageuna922@gmail.com</p>
            <div className="card-actions justify-center mt-4">
              <a href="mailto:nageuna922@gmail.com" className="btn btn-neutral">
                Send Mail
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
