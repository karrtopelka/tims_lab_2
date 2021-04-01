import { Box } from '@chakra-ui/layout';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ExerciseOne from './views/ExerciseOne';
import ExerciseTwo from './views/ExerciseTwo';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Box>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ex1" component={ExerciseOne} />
          <Route exact path="/ex2" component={ExerciseTwo} />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
