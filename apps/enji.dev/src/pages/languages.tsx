import TILContents from '@/contents/TIL';
import HeaderImage from '@/contents/TIL/HeaderImage';
import Page from '@/contents-layouts/Page';

function TIL() {
  return (
    <Page
      frontMatter={{
        title: 'Languages',
        description: `These are some languages, I currently speak or study.`,
      }}
      headerImage={<HeaderImage />}
    >
      <TILContents />
    </Page>
  );
}

export default TIL;
