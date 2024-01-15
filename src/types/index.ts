export type IconLink = {
  type: 'github' | 'linkedin' | 'email' | 'instagram' | 'link';
  id?: string;
  link?: string;
};

export type TagType = 'tech' | 'tool' | 'skill';

export type Tag = {
  type: TagType;
  label: string;
};

export type Project = {
  id: string;
  // for thumbnail take id and call image the same
  //thumbnail: string;
  title: string;
  links: IconLink[];
  description: string;
  tags: Tag[];
  date: string;
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  companyName?: string;
  companyLink: string;
  date: {
    current: boolean;
    startDate: string;
    endDate?: string;
  };
  location?: string;
  tags: Tag[];
};
