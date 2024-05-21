import { Container, Repo } from "./styles";

function ReposList({ repos }) {
  return (
    <Container>
      {repos.map((repo) => (
        <Repo key={repo.id}>
          <strong>{repo.name}</strong>
          <span>{repo.language}</span>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.html_url}
          </a>
        </Repo>
      ))}
    </Container>
  );
}

export { ReposList };
