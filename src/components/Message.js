import React from 'react';

const Message = ({ content, header, types }) => (
  <>
    {types === 'success'}
    <div className="ui blue icon message">
      <i className="icon info"></i>
      <div className={content}>
        <div className={header}>There are no game in your store !</div>
        <p>You should add some, don't you think?</p>
      </div>
    </div>
    <div className="ui green icon message">
      <i className="icon thumbs up"></i>
      <div className={content}>
        <div className={header}>There are no game in your store !</div>
        <p>You should add some, don't you think?</p>
      </div>
    </div>
    <div className="ui red icon message">
      <i className="icon warning sign"></i>
      <div className={content}>
        <div className={header}>There are no game in your store !</div>
        <p>You should add some, don't you think?</p>
      </div>
    </div>
  </>
);

export default Message;
