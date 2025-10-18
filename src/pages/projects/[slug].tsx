import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ProjectLayout from "y/layouts/projectLayout";
import {
  ProjectContent,
  projectDetails,
  projectDetailMap,
  type ProjectDetail,
} from "y/features/projects";

interface ProjectPageProps {
  project: ProjectDetail;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <ProjectLayout
      image={project.hero.image}
      title={project.hero.title}
      subtitle={project.hero.subtitle}
      description={project.hero.description}
    >
      <ProjectContent project={project} />
    </ProjectLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: projectDetails.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const project = projectDetailMap[slug];

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
