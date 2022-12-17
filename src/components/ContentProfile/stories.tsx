import { Story, Meta } from '@storybook/react/types-6-0';
import ContentProfile, { ProfileProps } from '.';
import ContentBody, { BodyProfileProps } from './ContentBody';
import ContentHead, { HeadProfileProps } from './ContentHead';

type ProfileStoriesProps = ProfileProps;

export default {
  title: 'Profile',
  component: ContentProfile,
  argTypes: {
    temperamento: {
      control: {
        type: 'select',
        options: ['Agressivo', 'Timido', 'Manso']
      }
    },
    tamanho: {
      control: {
        type: 'select',
        options: ['Grande', 'Medio', 'Pequeno']
      }
    }
  }
} as Meta;

export const Default: Story<ProfileStoriesProps> = (args) => (
  <ContentProfile {...args} />
);

Default.args = {
  headProps: {
    name: 'Lucky',
    idade: 12,
    sexo: 'Macho',
    raca: 'Shih Tzu',
    img: '../image/r.jpeg'
  },
  bodyProps: {
    endereco: 'Rua José Bonifácio nº70 APT 505',
    telefone: '+55 (48) 99844-7068',
    temperamento: 'Manso',
    tamanho: 'Pequeno',
    descricao:
      'O Lucky possui problemas respiratorios então ele não aguenta uma caminhada longa 😭',
    latitude: 12,
    longitude: 45
  }
};
export const Head: Story<HeadProfileProps> = (args) => (
  <ContentHead {...args} />
);
Head.args = {
  name: 'Lucky',
  idade: 12,
  sexo: 'Macho',
  raca: 'Shih Tzu',
  img: '../image/r.jpeg'
};
export const Body: Story<BodyProfileProps> = (args) => (
  <ContentBody {...args} />
);

Body.args = {
  endereco: 'Rua José Bonifácio nº70 APT 505',
  telefone: '+55 (48) 99844-7068',
  temperamento: 'string',
  tamanho: 'Manço',
  descricao:
    'O Lucky possui problemas respiratorios então ele não aguenta uma caminhada longa 😭',
  latitude: 12,
  longitude: 45
};
