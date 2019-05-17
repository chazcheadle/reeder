import React from 'react';

import { feedParser } from '../src/modules/feedParser/feedParser';

import './App.css';

interface IProps {
}

interface IState {
  feeds: [];
}


class App extends React.PureComponent<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      feeds: [],
    };
  }

  public componentDidMount() {
    feedParser()
      .then((feeds) => 
        this.setState({ feeds })
      );
  }

  public render() {
    const { feeds } = this.state;
    return (
      <div>
      {
        feeds.map((feed, index) => {
          return (
            <div key={index}>
              <div>{feed.title}</div> 
              <ul>
              {
                feed.items.map((item, itemIndex) => {
                  return (
                    <li key={itemIndex}>
                      <a href={item.link}>{item.title}</a>
                      <div>{item['content:encoded']}</div>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          )
        })
      }
      </div>
    );
  }
}

export default App;
