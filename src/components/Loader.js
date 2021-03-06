import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Error from './Error';
import { Loader as useStyles } from './styles';

function Loader({ loading, errors, children }) {

  const classes = useStyles();
  if (errors && !loading) return <Error />;
  return <div className={classes.root}>
    <div className={classes.justifier}>
      {loading && <CircularProgress className={classes.progressCircle} />}
      <div className={classes.content}>
        {!errors && children}
      </div>
    </div>
    {loading && <div className={classes.uiBlocker} />}
  </div>;
}

export default React.memo(Loader);