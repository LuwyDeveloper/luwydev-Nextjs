import ProjectsCMS from "@/components/projectsCMS";
import ProjectsAngular from "@/components/projectsAngular";
import ProjectsNext from "@/components/projectsNext";
import ProjectsMF from "@/components/ProjectsMF";

export default function ProjectsC() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          MicroFrontend
        </h4>
        <ProjectsMF></ProjectsMF>
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
