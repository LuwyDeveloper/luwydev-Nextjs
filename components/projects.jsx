import ProjectsCMS from "@/components/projectscms";
import ProjectsAngular from "@/components/projectsangular";
import ProjectsNext from "@/components/projectsnext";
import ProjectsMF from "@/components/projectMF";
import ProjectsDS from "@/components/projectsDS";
import ProjectsAngular21 from "@/components/projectsAngular21";

export default function ProjectsC() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          Angular 21 / Auth - JWT - Cache - Signals
        </h4>
        <ProjectsAngular21></ProjectsAngular21>
      </div>
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          Design System / React19 - Vite - StoryBook - GitHub Tokens - Angular20 - TailwindCSS v.4.1
        </h4>
        <ProjectsDS></ProjectsDS>
      </div>
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          MicroFrontend / Angular21 - Module Federation - React19 - Vite - UI-Kit - TailwindCSS v.4.1
        </h4>
        <ProjectsMF></ProjectsMF>
      </div>
      <div className="flex justify-center flex-col  py-5">
        <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
          Angular 17-20 / CSR - SSR
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
