import React from 'react'
import { Link } from 'react-router';
import Bar from '../components/Bar';
import Foo from '../components/Foo';
import Panel from '../components/Panel';
import Item from '../components/Item';
import Thumb from '../components/Thumb';

import BaseLayout from '../layout/Base';

export default React.createClass({

  render() {

    const thumbs = [
      {id: 1, title: 'AK-47', content: 'You can create a basic grid system that starts out stacked on mobile devices', img: 'media/ak_47.png', type: 'type-1', label: 'Mythical', qu: '6'},
      {id: 2, title: 'M4A1-S', content: 'Hyper Beast (Field-T blahhh)', img: 'media/m4a1_s.png', type: 'type-2', label: 'Uncommon', qu: '6'},
      {id: 3, title: 'P250', content: 'Asiimov (Field-Teste dddd ttt)', img: 'media/p250.png', type: 'type-3', label: 'Legendary', qu: '6'},
      {id: 4, title: 'Sawed-Off', content: 'Zander (Battle-Scarr dfff dd ttt)', img: 'media/sawed_off.png', type: 'type-4', label: 'Exceedingly Rare', qu: '6'},
      {id: 5, title: 'Desert Eagle', content: 'Bronze Deco (Minimfsdf dfsdf sdf)', img: 'media/desrt_egle.png', type: 'type-5', label: 'Immortal', qu: '6'},
      {id: 6, title: 'AWP', content: 'Man-o-war (Minimalfsdf fdsdf)', img: 'media/awp.png', type: 'type-6', label: 'Ancient', qu: '6'}
    ];

    const qusts = [
      {id: 1, class: 'steam', content: 'Активировать Steam-аккаунт', label: 'Выполнить'},
      {id: 2, class: 'facebook active', content: 'Подписаться на группу Hellcase в Facebook', label: 'Выполнено'},
      {id: 3, class: 'vk', content: 'Подписаться на группу Hellcase во VKontakte', label: 'Выполнить'},
      {id: 4, class: 'hell-steam active', content: 'Подписаться на группу Hellcase в Steam', label: 'Выполнено'},
      {id: 5, class: 'twitch', content: 'Подписаться на группу Hellcase в Twitch', label: 'Выполнить'}
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

    const left = (
      <Panel>
        <header>
          <ul className="nav">
            <li><a href="#" className="active">Топ-призы</a></li>
            <li><a href="#">Победители</a></li>
          </ul>
        </header>
        <section className="panel-body">
          {prizes}
          <button className="btn-all" type="submit">Весь список</button>
        </section>
      </Panel>
    );

    const questslist = (
      <section className="panel-body questsy">
        {qusts.map((v) =>
          <Item
            className={v.class}
            text={v.content}
            label={v.label}
          />
        )}
      </section>
    );

    const right = (
      <Panel>
        <header>
          <h2>Квесты</h2>
          <div className="loader"></div>
        </header>
        {questslist}
        <section className="panel-body info-table">
          <section>
            <header>
              <span className="text">Условия участия</span>
              <span className="right">Выполнено</span>
            </header>
            <div>
              <ul>
                <li>Выполнить квесты</li>
                <li>Ожидать призы на стрнице просмотра матча</li>
              </ul>
              <div className="value">60%</div>
            </div>
          </section>
        </section>
      </Panel>
    );

    const content = (
      <section className="content-container">
        <section>
          <section className="left">
            {right}
          </section>
          <section className="right">
            {left}
          </section>
        </section>
      </section>
    );

    return (
      <BaseLayout>
        <Bar
          itemA="Team EnVyUs"
          locA="France"
          flagA="https://s.starladder.com/assets/ui/images/blocks/flags/fr-5f985aed5044315c0270a8ded8eb7dc2.svg"
          iconA="https://s.starladder.com/uploads/tms/player/image/2982/thumb_72_3d25c33763449897ca2609b4149dde1d.png"
          itemB="dignitas"
          locB="Norway"
          flagB="https://s.starladder.com/assets/ui/images/blocks/flags/no-f82b1818ac4eb6a289b57819f0fb2231.svg"
          iconB="https://s.starladder.com/uploads/tms/player/image/3839/thumb_72_9d4fa5bd5011079e4f08713a8734bf8b.png"
          timeVal="Следующий розыгрыш через"
          timeSign="3:07:53"
        />
        <Foo />
        {content}
      </BaseLayout>
    );
  }

})
