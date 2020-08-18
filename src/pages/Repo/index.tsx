import React from 'react';

import { Link } from 'react-router-dom';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link to={'/vagnerwentz'} className={'username'}>
          vagnerwentz
        </Link>

        <span>/</span>

        <Link to={'/vagnerwentz/fastfeet'} className="reponame">
          fastfeet
        </Link>

      </Breadcrumb>

      <p>Fastfeet é uma aplicativo de uma transportadora fícticia</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/vagnerwentz/fastfeet'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;