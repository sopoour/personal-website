import { FC, Fragment } from 'react';
import Section from '../../layout/Section';
import Typography from '../../Typography/Typography';
import useSWR from 'swr';
import { Experience } from '@app/types';
import { fetcher } from '@app/hooks/fetch/useFetch';
import Tags from '../../Tags';
import { toMonthAndYear } from '@app/utils/formatDate';
import LinkContainer from '../../LinkContainer';
import {
  Container,
  Description,
  ExperienceContainer,
  Header,
  TextWrapper,
  TimeWrapper,
} from './styles';
import LinkButton from '@app/components/LinkButton';

const Experience: FC = () => {
  const { data } = useSWR<Experience[]>('/api/experience', fetcher);
  return (
    <Section mobileTitle="Experience" id="experience">
      <Container className="animate-scale">
        {data &&
          data?.slice(0, 2).map((experience) => (
            <Fragment key={experience.id}>
              <TimeWrapper>
                <Typography>{`${toMonthAndYear(new Date(experience.date.startDate))} - ${
                  experience.date.current
                    ? 'present'
                    : experience.date.endDate && toMonthAndYear(new Date(experience.date.endDate))
                }`}</Typography>
                <Typography>{experience.location}</Typography>
              </TimeWrapper>
              <ExperienceContainer>
                <TextWrapper>
                  <Header>
                    <Typography fontWeight={700} as="h3">
                      {experience.title}
                      {experience.companyName ? ` @ ${experience.companyName}` : ''}
                    </Typography>
                    <LinkContainer
                      iconLinks={[{ link: experience.companyLink, type: 'link' }]}
                      size="small"
                    />
                  </Header>
                  <Description fontSize="14px">{experience.description}</Description>
                </TextWrapper>
                <Tags tags={experience.tags} />
              </ExperienceContainer>
            </Fragment>
          ))}
        <LinkButton
          label="View full Résumé"
          link="data/soph_resume.pdf"
          aria-description="This link opens a PDF in a new tab"
        />
      </Container>
    </Section>
  );
};

export default Experience;
