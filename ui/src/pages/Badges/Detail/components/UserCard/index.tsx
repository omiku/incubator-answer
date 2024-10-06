/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Avatar } from '@/components';
import { formatCount } from '@/utils';

interface Props {
  data: any;
}

const Index: FC<Props> = ({ data }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'badges' });
  return (
    <div className="d-flex">
      {data?.status !== 'deleted' ? (
        <Link to={`/users/${data?.username}`}>
          <Avatar
            avatar={data?.avatar}
            size="40px"
            className="me-2 d-none d-md-block"
            searchStr="s=96"
            alt={data?.display_name}
          />

          <Avatar
            avatar={data?.avatar}
            size="24px"
            className="me-2 d-block d-md-none"
            searchStr="s=48"
            alt={data?.display_name}
          />
        </Link>
      ) : (
        <>
          <Avatar
            avatar={data?.avatar}
            size="40px"
            className="me-2 d-none d-md-block"
            searchStr="s=96"
            alt={data?.display_name}
          />

          <Avatar
            avatar={data?.avatar}
            size="24px"
            className="me-2 d-block d-md-none"
            searchStr="s=48"
            alt={data?.display_name}
          />
        </>
      )}
      <div className="small text-secondary d-flex flex-column">
        {data?.status !== 'deleted' ? (
          <Link
            to={`/users/${data?.username}`}
            className="me-1 text-break name-ellipsis"
            style={{ maxWidth: '100px' }}>
            {data?.display_name}
          </Link>
        ) : (
          <span className="me-1 text-break">{data?.display_name}</span>
        )}
        <div className="text-secondary">
          {formatCount(data?.rank)}{' '}
          {t('x_reputation', { keyPrefix: 'personal' })}
        </div>
      </div>
    </div>
  );
};

export default memo(Index);
