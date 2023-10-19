import { FC } from 'react';
import styled from 'styled-components';
import Section from '../../layout/Section';
import { flexColumn, flexRow } from '@app/styles/mixins';
import Typography from '../../Typography/Typography';
import { robotoMono } from '@app/styles/fonts';
import theme from '@app/styles/theme';
import useSWR from 'swr';
import { Experience } from '@app/types';
import { IoIosArrowForward } from 'react-icons/io';
import { fetcher } from '@app/hooks/fetch/useFetch';
import Tags from '../../Tags';
import { toMonthAndYear } from '@app/utils/formatDate';
import LinkContainer from '../../LinkContainer';
import {
  Container,
  DownloadButton,
  ExperienceContainer,
  Header,
  TextWrapper,
  TimeWrapper,
} from './styles';

const Experience: FC = () => {
  const { data } = useSWR<Experience[]>('/api/experience', fetcher);
  return (
    <Section mobileTitle="Experience" id="experience">
      <Container className="animate">
        {data &&
          data?.slice(0, 2).map((experience) => (
            <>
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
                    <Typography fontWeight={700}>
                      {experience.title} @{experience.companyName}
                    </Typography>
                    <LinkContainer
                      iconLinks={[{ link: experience.companyLink, type: 'link' }]}
                      size="small"
                      tabIndex={6}
                    />
                  </Header>

                  <Typography color={theme.colors.bg.soft} fontSize="14px">
                    {experience.description}
                  </Typography>
                </TextWrapper>
                <Tags tags={experience.tags} />
              </ExperienceContainer>
            </>
          ))}
        <DownloadButton>
          View full Resumé <IoIosArrowForward />
        </DownloadButton>
      </Container>
    </Section>
  );
};

export default Experience;
