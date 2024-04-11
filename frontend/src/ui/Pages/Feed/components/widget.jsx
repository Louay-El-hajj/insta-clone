import React from 'react';
import RoundedImage from '../../../components/RoundedImg';

function Widget() {
  return (
    <div className="widget_container flex column">
      <UserInfo
        src=""
        imgClass="widget_profile_pic"
        username="louayhj"
        fullName="Louayhj"
        buttonText="switch"
      />
      <Suggestions />
    </div>
  );
}

function Suggestions() {
  return (
    <div className="suggestions_container flex column">
      <div className="flex a-center j-s__between">
        <h3>Suggested for you</h3>
        <p>See All</p>
      </div>
      <ul className="flex column suggested_users ">
        <li>
          <UserInfo
            src=""
            imgClass="widget_profile_pic"
            username="Souaad"
            fullName="suggested for you"
            buttonText="follow"
          />
        </li>

        <li>
          <UserInfo
            src=""
            imgClass="widget_profile_pic"
            username="Nabiha"
            fullName="suggested for you"
            buttonText="follow"
          />
        </li>

        <li>
          <UserInfo
            src=""
            imgClass="widget_profile_pic"
            username="Jamil"
            fullName="suggested for you"
            buttonText="follow"
          />
        </li>
      </ul>
    </div>
  );
}

function UserInfo({ src, imgClass, username, fullName, buttonText, buttonAction, text }) {
  return (
    <div className="user_info_container flex a-center j-s__between">
      <div className="flex a-center">
        <RoundedImage src={src} imgClass={`${imgClass}`} />
        <div className="flex column">
          <span className="f-s__b">{username}</span>
          <span className="f-l">{fullName}</span>
        </div>
      </div>
      <p className="switch_account t">{buttonText}</p>
    </div>
  );
}

export default Widget;
