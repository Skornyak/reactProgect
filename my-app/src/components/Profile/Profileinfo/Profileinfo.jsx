import React from 'react';
import style from '../Profile.module.css';

function Profileinfo() {
  return (
    <div>
      <div className={style.image_wrapper}>
        <img alt="img" className={style.top_img} src="https://st5.depositphotos.com/29995906/65439/i/450/depositphotos_654396212-stock-photo-a-lone-tree-is-silhouetted.jpg" />
      </div>
      <div>
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.ava}>
              <img alt="img" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" />
            </div>
            <div className={style.descr}>
              Info about User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileinfo;
