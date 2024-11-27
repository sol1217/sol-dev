import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Here you can see a section of projects created from scratch.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
