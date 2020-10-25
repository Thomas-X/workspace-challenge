import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Text } from '@fluentui/react/lib/Text';
import { Separator } from '@fluentui/react/lib/Separator';
// TODO use module-resolver from babel to make this a little bit nicer to look at
import { QueryKeys } from '../../../core/data/QueryKeys';
import { getItems } from '../../../core/data/fetchers/getItems';
import { getMe } from '../../../core/data/fetchers/getMe';
import { HomePage } from '../HomePage';
import { BuyModal } from '../modals/BuyModal/BuyModal';
import { useItemsStore } from '../../../core/stores/useItemsStore';
import { NoItems } from '../../components/NoItems';

interface Props {}

export const Home: FC<Props> = () => {
  const {
    data: items = [],
    isFetching: itemsFetching,
    error: itemsError,
  } = useQuery(QueryKeys.items, getItems);
  const { data: me, isFetching: meFetching, error: meError } = useQuery(
    QueryKeys.me,
    getMe
  );
  const setMoney = useItemsStore((state) => state.setMoney);
  useEffect(() => {
    if (me?.balance) {
      setMoney(me.balance);
    }
  }, [me?.balance, setMoney]);
  return (
    <>
      <BuyModal />
      <HomePage>
        <div>
          <Separator styles={{ root: { margin: '1rem 0' } }}>
            <Text variant='xLarge'>Hello, {me?.login}</Text>
          </Separator>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, doloremque eveniet iusto laboriosam minus natus nemo
            pariatur? Animi asperiores autem, consequuntur culpa doloremque et
            eum in iste officiis perspiciatis tenetur.
          </Text>
        </div>
        <div>
          <Separator styles={{ root: { margin: '1rem 0' } }}>
            <Text variant='xLarge'>Current stocks</Text>
          </Separator>
          {(!items || (items.length === 0 && !itemsFetching)) && <NoItems />}
          {items?.map((item) => (
            <div key={item.id}>
              <Text style={{ flex: 1 }} variant='small'>
                {item.name}
              </Text>
            </div>
          ))}
        </div>
      </HomePage>
    </>
  );
};
