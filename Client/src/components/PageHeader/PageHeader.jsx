import { Pane, Heading, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const PageHeader = ({ heading, buttonText, path }) => {
  return (
    <div>
      <Pane elevation={1} className="page-header">
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>{heading}</Heading>
        </Pane>
        <Pane>
          <Link to={path}>
            <Button appearance="primary">{buttonText}</Button>
          </Link>
        </Pane>
      </Pane>
    </div>
  );
};

export default PageHeader;
