import React from 'react'
import { Link } from 'react-router';

export default class Bar extends React.Component {

  render() {

    const { itemA, locA, flagA, iconA, itemB, locB, flagB, iconB, timeVal, timeSign, realTime, btnSign, date, event, time } = this.props;

    console.log("item:", itemA);

    const preview = (
      <span className="preview-item">
        <span className="preview-item-box">
          <span className="preview-title-holder">
            <span className="preview-title">{itemA}</span>
          </span>
          <span className="preview-location">
            <span className="preview-location-text">{locA}</span>
            <img title={locA} className="preview-location-ico" src={flagA} alt={locA} width={22} height={16} />
          </span>
        </span>
        <span className="preview-img">
          <img src={iconA} alt={itemA} width={72} height={72} />
        </span>
      </span>
    );

    const reverse = (
      <span className="preview-item mod-reverse">
        <span className="preview-item-box">
          <span className="preview-img">
            <img src={iconB} alt={itemB} width={72} height={72} />
          </span>
          <span className="preview-item-box">
            <span className="preview-title-holder">
              <span className="preview-title">{itemB}</span>
            </span>
            <span className="preview-location">
              <img title={locB} className="preview-location-ico" src={flagB} alt={locB} width={22} height={16} />
              <span className="preview-location-text">{locB}</span>
            </span>
          </span>
        </span>
      </span>
    );

    function Btn() {
      if (btnSign) {
        return <span className="preview-btn">{btnSign}</span>;
      }
      return null;
    }

    function Timein() {
      if (timeSign) {
        return <span className="preview-time-sign">{timeSign}</span>;
      }
      return null;
    }

    function Datein() {
      if (date) {
        return <span>{date} <span>@</span> {time}</span>;
      }
      return null;
    }

    function Eventin() {
      if (event) {
        return <span className="preview-time-event">{event}</span>;
      }
      return null;
    }

    const previewTime = (
      <span className="preview-time">
        <span className="preview-time-val">
          {timeVal}
          <Datein />
        </span>
        <Timein />
        <Btn />
        <Eventin />
      </span>
    );

    return (
      <section className="bar">
        <section>
          <section className="bar-body">
            <span className="preview-data">
              {preview}
              {previewTime}
              {reverse}
            </span>
          </section>
        </section>
      </section>
    );
  }

}
