import ProjectsPage from "./projects"

export const metadata = {
  title: "Proyectos",
  openGraph: {
    title: 'Proyectos | Luwy Dyro',
  }
};



export default function RootLayout({ children }) {
  
  return <ProjectsPage>{children}</ProjectsPage>;
}
