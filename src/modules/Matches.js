import React from 'react'
import { Link } from 'react-router';
import Bar from '../components/Bar';

import BaseLayout from '../layout/Base';

export default React.createClass({
  render() {

    const bars = [
      {
        id: 1,
        itemA: 'Team EnVyUs',
        locA: 'France',
        flagA: 'https://s.starladder.com/assets/ui/images/blocks/flags/fr-5f985aed5044315c0270a8ded8eb7dc2.svg',
        iconA: 'https://s.starladder.com/uploads/tms/player/image/2982/thumb_72_3d25c33763449897ca2609b4149dde1d.png',
        itemB: 'dignitas',
        locB: 'Norway',
        flagB: 'https://s.starladder.com/assets/ui/images/blocks/flags/no-f82b1818ac4eb6a289b57819f0fb2231.svg',
        iconB: 'https://s.starladder.com/uploads/tms/player/image/3839/thumb_72_9d4fa5bd5011079e4f08713a8734bf8b.png',
        timeVal: 'Прямая трансляция..',
        btnSign: 'Участвовать в розыгрыше'
      },
      {
        id: 2,
        itemA: 'Vega Squadron',
        locA: 'Russia',
        flagA: 'https://s.starladder.com/assets/ui/images/blocks/flags/ru-4d13c8021dcfd9d574530cb2161f65da.svg',
        iconA: 'https://s.starladder.com/uploads/tms/player/image/2989/94a2c9618c2408a8190a1726249a8931.png',
        itemB: 'pro100',
        locB: 'Ukraine',
        flagB: 'https://s.starladder.com/assets/ui/images/blocks/flags/ua-8cc3202a6931f121251c3d2e01dbd848.svg',
        iconB: 'https://s.starladder.com/uploads/tms/player/image/3814/6f431c7e54ed0e96657860cdf2de159b.png',
        timeVal: 'Следующий розыгрыш через',
        btnSign: null,
        timeSign: '3:07:53'
      },
      {
        id: 3,
        itemA: 'Counter Logic Gaming',
        locA: 'United States',
        flagA: 'https://s.starladder.com/assets/ui/images/blocks/flags/us-4be0e603d8bce30796b408e1ee87e8c5.svg',
        iconA: 'https://s.starladder.com/uploads/tms/player/image/3031/thumb_72_45b69039955885c66b52383b9c37c6b5.png',
        itemB: 'paiN',
        locB: 'Brazil',
        flagB: 'https://s.starladder.com/assets/ui/images/blocks/flags/br-e375fd17341523e1d730e44757905a55.svg',
        iconB: 'https://s.starladder.com/uploads/tms/player/image/3898/thumb_72_281fc87e8d2b039a49c3a9185863bf38.png',
        date: '12 Июня',
        time: '12:30',
        event: 'StarSeries S3: LAN Play-Off'
      },
      {
        id: 4,
        itemA: 'Counter Logic Gaming',
        locA: 'United States',
        flagA: 'https://s.starladder.com/assets/ui/images/blocks/flags/us-4be0e603d8bce30796b408e1ee87e8c5.svg',
        iconA: 'https://s.starladder.com/uploads/tms/player/image/3031/thumb_72_45b69039955885c66b52383b9c37c6b5.png',
        itemB: 'paiN',
        locB: 'Brazil',
        flagB: 'https://s.starladder.com/assets/ui/images/blocks/flags/br-e375fd17341523e1d730e44757905a55.svg',
        iconB: 'https://s.starladder.com/uploads/tms/player/image/3898/thumb_72_281fc87e8d2b039a49c3a9185863bf38.png',
        date: '14 Июня',
        time: '16:30',
        event: 'StarSeries S3: LAN Play-Off'
      }
    ];

    const barslist = (
      <section>
        {bars.map((v) =>
          <Bar
            key={v.id}
            itemA={v.itemA}
            locA={v.locA}
            flagA={v.flagA}
            iconA={v.iconA}
            itemB={v.itemB}
            locB={v.locB}
            flagB={v.flagB}
            locB={v.locB}
            iconB={v.iconB}
            timeVal={v.timeVal}
            btnSign={v.btnSign}
            timeSign={v.timeSign}
            date={v.date}
            time={v.time}
            event={v.event}
          />
        )}
      </section>
    );

    return (
      <BaseLayout>
        {barslist}
      </BaseLayout>
    );

  }
})
