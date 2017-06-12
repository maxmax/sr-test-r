import React from 'react'
import { Link } from 'react-router';
import Panel from '../components/Panel';
import Thumb from '../components/Thumb';
import Foo from '../components/Foo';

import BaseLayout from '../layout/Base';

export default React.createClass({
  render() {

    const thumbs = [
      {id: 1, title: 'AK-47', content: 'You can create a basic grid system that starts out stacked on mobile devices', img: 'media/ak_47.png', type: 'type-1', label: 'Mythical', qu: '6'},
      {id: 2, title: 'M4A1-S', content: 'Hyper Beast (Field-T blahhh)', img: 'media/m4a1_s.png', type: 'type-2', label: 'Uncommon', qu: '6'},
      {id: 3, title: 'P250', content: 'Asiimov (Field-Teste dddd ttt)', img: 'media/p250.png', type: 'type-3', label: 'Legendary', qu: '6'},
      {id: 4, title: 'Sawed-Off', content: 'Zander (Battle-Scarr dfff dd ttt)', img: 'media/sawed_off.png', type: 'type-4', label: 'Exceedingly Rare', qu: '6'},
      {id: 5, title: 'Desert Eagle', content: 'Bronze Deco (Minimfsdf dfsdf sdf)', img: 'media/desrt_egle.png', type: 'type-5', label: 'Immortal', qu: '6'},
      {id: 6, title: 'AWP', content: 'Man-o-war (Minimalfsdf fdsdf)', img: 'media/awp.png', type: 'type-6', label: 'Ancient', qu: '6'},
      {id: 7, title: 'AK-47', content: 'You can create a basic grid system that starts out stacked on mobile devices', img: 'media/ak_47.png', type: 'type-1', label: 'Mythical', qu: '1'},
      {id: 8, title: 'M4A1-S', content: 'Hyper Beast (Field-T blahhh)', img: 'media/m4a1_s.png', type: 'type-2', label: 'Uncommon', qu: '6'},
      {id: 9, title: 'P250', content: 'Asiimov (Field-Teste dddd ttt)', img: 'media/p250.png', type: 'type-3', label: 'Legendary', qu: '12'},
      {id: 10, title: 'Sawed-Off', content: 'Zander (Battle-Scarr dfff dd ttt)', img: 'media/sawed_off.png', type: 'type-4', label: 'Exceedingly Rare', qu: '6'},
      {id: 11, title: 'Desert Eagle', content: 'Bronze Deco (Minimfsdf dfsdf sdf)', img: 'media/desrt_egle.png', type: 'type-5', label: 'Immortal', qu: '4'},
      {id: 12, title: 'AWP', content: 'Man-o-war (Minimalfsdf fdsdf)', img: 'media/awp.png', type: 'type-6', label: 'Ancient', qu: '2'}
    ];

    const prizes = (
      <section className="thumbs">
        {thumbs.map((v) =>
          <Thumb
            key={v.id}
            label={v.label}
            title={v.title}
            text={v.content}
            img={v.img}
            type={v.type}
            qu={v.qu}
          />
        )}
      </section>
    );

    const panel = (
      <Panel>
        <header>
          <h2>Все</h2>
        </header>
        <section className="panel-body">
          {prizes}
        </section>
      </Panel>
    );

    const content = (
      <section className="content-container">
        <section>
          <section className="auto prizes">
            {panel}
          </section>
        </section>
      </section>
    );

    return (
      <BaseLayout>
        <Foo />
        {content}
      </BaseLayout>
    );

  }
})
