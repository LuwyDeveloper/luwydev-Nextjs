import Image from "next/image";
import { projects } from "./imagenes";
import ProjectsCMS from "@/components/projectscms";
import ProjectsAngular from "@/components/projectsangular";
import ProjectsNext from "@/components/projectsnext";

export default function ProjectsC() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          MicroFrontend
        </h4>
      </div>
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          Design System
        </h4>
      </div>
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          Angular / CSR – SSR
        </h4>
        <ProjectsAngular></ProjectsAngular>
      </div>
      <div className="flex justify-center flex-col py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          NextJS - React/ CSR – SSR
        </h4>
        <ProjectsNext></ProjectsNext>
      </div>
      <div className="flex justify-center flex-col pt-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          CMS - Ecommerce
        </h4>
        <ProjectsCMS></ProjectsCMS>
      </div>
    </div>
  );
}
