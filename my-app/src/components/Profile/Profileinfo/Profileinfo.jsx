import React from 'react';
import s from '../Profile.module.css';

function Profileinfo() {
  return (
    <div>
      <div>
        <img alt="img" className={s.top_img} src="https://st5.depositphotos.com/29995906/65439/i/450/depositphotos_654396212-stock-photo-a-lone-tree-is-silhouetted.jpg" />
      </div>
      <div>
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s.ava}>
              <img alt="img" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" />
            </div>
            <div className={s.descr}>
              Info about User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileinfo;
